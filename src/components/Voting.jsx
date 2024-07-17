import { useState, useEffect } from 'react';
import styled from 'styled-components';

const VotingComponent = ({ question = "기본 질문", options = ["옵션 1", "옵션 2"], questionId, initialVotes }) => {
  const initialVotesState = () => {
    const savedVotes = localStorage.getItem(`votes_${questionId}`);
    if (savedVotes) {
      return JSON.parse(savedVotes);
    } else {
      return initialVotes || options.reduce((acc, option) => ({ ...acc, [option]: 0 }), {});
    }
  };

  const [votes, setVotes] = useState(initialVotesState);
  const [votedOption, setVotedOption] = useState(() => {
    return localStorage.getItem(`voted_${questionId}`) || null;
  });

  const totalVotes = Object.values(votes).reduce((sum, v) => sum + v, 0);

  const handleVote = (option) => {
    if (!votedOption) {
      const updatedVotes = {
        ...votes,
        [option]: votes[option] + 1,
      };
      setVotes(updatedVotes);
      setVotedOption(option);
      localStorage.setItem(`votes_${questionId}`, JSON.stringify(updatedVotes));
      localStorage.setItem(`voted_${questionId}`, option);
    }
  };

  const getPercentage = (optionVotes) => {
    return totalVotes === 0 ? 0 : ((optionVotes / totalVotes) * 100).toFixed(0);
  };

  useEffect(() => {
    localStorage.setItem(`votes_${questionId}`, JSON.stringify(votes));
  }, [votes, questionId]);

  return (
    <Container>
      <Title>{question}</Title>
      {!votedOption ? (
        <>
          {options.map((option, index) => (
            <Button key={index} onClick={() => handleVote(option)}>
              {option}
            </Button>
          ))}
        </>
      ) : (
        <ResultContainer>
          {options.map((option, index) => (
            <Option key={index}>
              <ProgressBarContainer>
                <ProgressBar width={getPercentage(votes[option])} color="#7B89DA" />
              </ProgressBarContainer>
              <Text>{getPercentage(votes[option])}%</Text>
            </Option>
          ))}
        </ResultContainer>
      )}
    </Container>
  );
};

export default VotingComponent;


const Container = styled.div`
  width: 750px;
  height: 250px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  padding: 27px;
`;

const Title = styled.h2`
  font-size: 25px;
  font-weight: bold;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  width: 661px;
  height: 55px;
  padding: 0 0 0 21px;
  border: none;
  border-radius: 25px;
  background-color: #F1F1F1;
  color: black;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  margin: 31px 0 0 0;

  &:hover {
    background-color: #c9c8c8;
  }
`;

const ResultContainer = styled.div`
  margin-top: 20px;
`;

const Option = styled.div`
  margin: 31px 0 0 0;
  display: flex;
  align-items: center;
`;

const ProgressBarContainer = styled.div`
  width: 661px;
  height: 55px;
  background: #F1F1F1;
  position: relative;
  border-radius: 25px;
`;

const ProgressBar = styled.div`
  height: 100%;
  width: ${props => props.width}%;
  background: ${props => props.color};
  position: absolute;
  border-radius: 25px;
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 0 23px;
`;
