import styled from "styled-components";

export const EnterInput = ({ Title }) => {
  return (
    <InputContainer>
      <InputTitle>{Title}</InputTitle>
      <Input />
    </InputContainer>
  );
};

const InputTitle = styled.p`
  font-size: 20px;
  color: #787878;
`;

const Input = styled.input`
  width: 520px;
  height: 45px;
  border-radius: 15px;
  border: 1px solid #838383;
  &:focus {
    border: 1px solid #5163d2 !important;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
