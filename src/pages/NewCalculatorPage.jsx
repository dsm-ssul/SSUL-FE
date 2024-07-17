import styled from "styled-components";
import Header from "../components/Header";
import { CalculatorInput } from "../components/CalculatorInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const NewCalculatorPage = () => {
  const [wages, setWages] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [cashTax, setCashTax] = useState("");

  const navigate = useNavigate();

  const handleWagesChange = (e) => {
    setWages(e.target.value);
  };

  const handleCreditCardChange = (e) => {
    setCreditCard(e.target.value);
  };

  const calculateTax = () => {
    const wagesNum = parseFloat(wages) || 0;
    const creditCardNum = parseFloat(creditCard) || 0;

    const deductionLimit = 300_0000; // 소득공제 한도 300만원
    const baseExcess = wagesNum * 0.25; // 급여의 25%
    const creditDeducted = creditCardNum - baseExcess; // 신용카드 사용금액에서 초과한 금액

    let safeCashTax = Math.floor(
      0.3 * (deductionLimit - creditDeducted * 0.15)
    ); // 공식을 사용하여 앞으로 사용해야 할 현금

    safeCashTax = Math.round(safeCashTax / 100) * 100;

    setCashTax(safeCashTax);
  };

  return (
    <>
      <Header />
      <Container>
        <Calculator>
          <CalculatorInput
            title="급여액(연간)"
            content="연간 근로소득에서 비과세소득(식대, 교통비, 양육비 등)을 제외한 금액입니다."
            placeholder="급여액 입력"
            value={wages}
            onChange={handleWagesChange}
          />
          <CalculatorInput
            title="신용카드(연간)"
            placeholder="사용금액 입력"
            value={creditCard}
            onChange={handleCreditCardChange}
          />
          <Button onClick={calculateTax}>계산하기</Button>
        </Calculator>
        <TextContainer>
          <div>
            <Title>앞으로 써야할 현금</Title>
            <Percent>{cashTax}원</Percent>
          </div>
          <SmallButton onClick={() => navigate("/NewCalculator")}>
            소득 공제 계산기
          </SmallButton>
        </TextContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 840px;
  display: flex;
  gap: 160px;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 380px;
  height: 60px;
  background-color: #5163d2;
  color: white;
  border: none;
  font-size: 26px;
  border-radius: 15px;
`;

const Calculator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const TextContainer = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 70px;
  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const Title = styled.b`
  font-size: 30px;
`;

const Percent = styled.p`
  font-size: 35px;
  color: #5163d2;
`;

const SmallButton = styled.button`
  width: 200px;
  height: 45px;
  background-color: #5163d2;
  font-size: 20px;
  color: white;
  border: none;
  border-radius: 15px;
  align-self: flex-end;
  cursor: pointer;
`;
