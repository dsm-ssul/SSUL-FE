import styled from "styled-components";
import Header from "../components/Header";
import { CalculatorInput } from "../components/CalculatorInput";
import { useState } from "react";

export const CalculatorPage = () => {
  const [wages, setWages] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [cashReceipt, setCashReceipt] = useState("");
  const [checkCard, setCheckCard] = useState("");
  const [taxPercent, setTaxPercent] = useState("");
  const [safeTax, setSafeTax] = useState("");

  const handleWagesChange = (e) => {
    setWages(e.target.value);
  };

  const handleCreditCardChange = (e) => {
    setCreditCard(e.target.value);
  };

  const handleCashReceiptChange = (e) => {
    setCashReceipt(e.target.value);
  };

  const handleCheckCardChange = (e) => {
    setCheckCard(e.target.value);
  };

  const calculateTax = () => {
    const wagesNum = parseFloat(wages) || 0;
    const creditCardNum = parseFloat(creditCard) || 0;
    const cashReceiptNum = parseFloat(cashReceipt) || 0;
    const checkCardNum = parseFloat(checkCard) || 0;

    const creditCardResult =
      ((creditCardNum - wagesNum * (25 / 100)) * 15) / 100;
    const cashReceiptResult = cashReceiptNum * (30 / 100);
    const checkCardResult = checkCardNum * (30 / 100);

    let CalculatorResult =
      creditCardResult + cashReceiptResult + checkCardResult;

    const MAX = wagesNum <= 70000000 ? 300 : 250;

    if (CalculatorResult > MAX) {
      CalculatorResult = MAX;
    }

    let taxPercentValue =
      wagesNum <= 1400
        ? 0.06
        : wagesNum <= 5000
        ? 0.15
        : wagesNum <= 8800
        ? 0.24
        : wagesNum <= 15000
        ? 0.35
        : wagesNum <= 30000
        ? 0.38
        : wagesNum <= 50000
        ? 0.4
        : wagesNum <= 100000
        ? 0.42
        : 0.45;

    setTaxPercent(`${taxPercentValue * 100}`);
    setSafeTax(
      (CalculatorResult * taxPercentValue * 10000).toLocaleString("ko-KR")
    );
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
          <CalculatorInput
            title="현금영수증(연간)"
            placeholder="사용금액 입력"
            value={cashReceipt}
            onChange={handleCashReceiptChange}
          />
          <CalculatorInput
            title="체크카드(연간)"
            placeholder="사용금액 입력"
            value={checkCard}
            onChange={handleCheckCardChange}
          />
          <Button onClick={calculateTax}>계산하기</Button>
        </Calculator>
        <PercentContainer>
          <TextContainer>
            <Title>예상 적용 세율</Title>
            <Percent>{taxPercent}%</Percent>
            <Content>
              *소득공제 후 연간 급여액의 변동에 따라 적용 세율 구간이 한 단계
              낮아질 수 있습니다.
            </Content>
          </TextContainer>
          <TextContainer>
            <Title>아낄 수 있는 세금(예상액)</Title>
            <Percent>{safeTax}원</Percent>
            <Content>
              *본 금액은 환급액이 아니며 실제 환급액은 기존 납입 세금에 따라
              달라집니다.
            </Content>
          </TextContainer>
        </PercentContainer>
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

const PercentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.b`
  font-size: 30px;
`;

const Percent = styled.p`
  font-size: 35px;
  color: #5163d2;
`;

const Content = styled.p`
  font-size: 14px;
  color: #787878;
`;
