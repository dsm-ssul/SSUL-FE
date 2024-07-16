import styled from "styled-components";

export const CalculatorInput = ({ title, content, placeholder }) => {
  return (
    <Container>
      <TextContainer>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </TextContainer>
      <TextContainer>
        <Input placeholder={placeholder} />
        <Text>만원</Text>
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const TextContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Title = styled.p`
  font-size: 20px;
  color: #787878;
`;

const Content = styled.p`
  font-size: 16px;
  color: #787878;
`;

const Input = styled.input`
  width: 490px;
  height: 34px;
  border-radius: 15px;
  border: 1px solid #838383;
  padding: 13px 20px 10px;
  font-size: 20px;
  &::placeholder {
    font-size: 20px;
    color: #787878;
  }
`;

const Text = styled.p`
  font-size: 30px;
  color: #787878;
`;
