import styled from "styled-components";
import { EnterInput } from "../components/EnterInput";

export const EnteringPage = () => {
  return (
    <Container>
      <Title>SSUL's 재무설계</Title>
      <EnterInput Title="이름" />
      <EnterInput Title="나이" />
      <EnterInput Title="월급" />
      <EnterInput Title="한달 고정 지출비" />
      <InputContainer>
        <InputTitle>목표</InputTitle>
        <div>
          <Input />
          <Content>년 안에</Content>
          <Input />
          <Content>만원 모으기</Content>
        </div>
      </InputContainer>
      <Button>결과 확인하기</Button>
    </Container>
  );
};

const Container = styled.div`
  height: 900px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  font-size: 40px;
  margin-bottom: 20px;
  font-weight: 500;
`;

const InputTitle = styled.p`
  font-size: 20px;
  color: #787878;
`;

const Input = styled.input`
  width: 100px;
  height: 45px;
  border-radius: 15px;
  border: 1px solid #838383;
  &:focus {
    border: 1px solid #5163d2 !important;
  }
`;

const InputContainer = styled.div`
  > div {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: -7%;
`;

const Content = styled.p`
  font-size: 20px;
  color: #787878;
`;

const Button = styled.button`
  width: 520px;
  height: 60px;
  background-color: #5163d2;
  color: white;
  border: none;
  font-size: 25px;
  border-radius: 15px;
`;
