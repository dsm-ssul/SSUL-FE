import styled from "styled-components";

export const ShareBox = ({ onclick, img, title, content, date }) => {
  return (
    <Container onClick={onclick}>
      <Img src={img} />
      <Text>
        <div>
          <Title>{title}</Title>
          <Content>{content}</Content>
        </div>
        <Date>{date}</Date>
      </Text>
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  height: 340px;
  box-shadow: 0px 0px 4px 0px #ebebeb;
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  height: 200px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  margin-left: 20px;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.b`
  font-size: 18px;
`;

const Content = styled.p`
  font-size: 14px;
  color: #838383;
`;

const Date = styled.p`
  font-size: 10px;
  align-self: flex-start;
`;
