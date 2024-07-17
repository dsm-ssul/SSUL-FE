import styled from "styled-components";
import { ShareBox } from "../components/ShareBox";
import ShareEX from "../assets/ShareEX.png";
import ShareEX2 from "../assets/ShareEX2.png";
import ShareEX3 from "../assets/ShareEX3.png";
import ShareEX4 from "../assets/ShareEX4.png";
import ShareEX5 from "../assets/ShareEX5.png";
import ShareEX6 from "../assets/ShareEX6.png";
import ShareEX7 from "../assets/ShareEX7.png";
import ShareEX8 from "../assets/ShareEX8.png";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const values = [
  {
    onclick: "/ShareEX",
    img: ShareEX,
    title: "재무설계란 무엇이고 왜 필요할까?",
    content: "꼭 필요한 재무설계 개념 잡고가기",
    date: "2024년 7월 16일",
  },
  {
    onclick: "/ShareEX2",
    img: ShareEX2,
    title: "스스로 재무 설계 하기",
    content: "재무 설계 혼자서 마스터하기",
    date: "2024년 7월 17일",
  },
  {
    img: ShareEX3,
    title: "갑작스러운 상속재산, 어떻게 해야할까?",
    content: "갑작스러운 이별, 어떻게 해결해야 할까",
    date: "2024년 7월 18일",
  },
  {
    img: ShareEX4,
    title: "가만히 100만원 벌기",
    content: "일상생활 쉽게 깨지는 돈 아끼는법",
    date: "2024년 7월 19일",
  },
  {
    img: ShareEX5,
    title: "실패하지 않는 주식시작하기",
    content: "탄탄한 주식 기초 개념",
    date: "2024년 7월 20일",
  },
  {
    img: ShareEX6,
    title: "가장 합리적인 적금 가입하기",
    content: "완벽한 내 미래를 위한 첫걸음",
    date: "2024년 7월 21일",
  },
  {
    img: ShareEX7,
    title: "2024 하반기 달라지는 금융정책",
    content: "나에게 도움이 되는 혜탹을 찾아보자!",
    date: "2024년 7월 22일",
  },
  {
    img: ShareEX8,
    title: "내집마련 언제부터 시작해야 할까?",
    content: "완벽한 내집마련 계획 세우기",
    date: "2024년 7월 23일",
  },
];

export const SharePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Container>
        {values.map((element, index) => (
          <ShareBox
            key={index}
            img={element.img}
            title={element.title}
            content={element.content}
            date={element.date}
            onclick={() => navigate(element.onclick)}
          />
        ))}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px 300px;
  column-gap: 44px;
  row-gap: 70px;
  margin: 80px 294px 0px;
`;
