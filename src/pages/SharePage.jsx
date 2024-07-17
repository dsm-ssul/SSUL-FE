import styled from "styled-components";
import { ShareBox } from "../components/ShareBox";
import ShareEX from "../assets/ShareEX.png";
import ShareEX2 from "../assets/ShareEX2.png";
import Header from "../components/Header";

const values = [
  {
    img: ShareEX,
    title: "재무설계란 무엇이고 왜 필요할까?",
    content: "꼭 필요한 재무설계 개념 잡고가기",
    date: "2024년 7월 16일",
  },
  {
    img: ShareEX2,
    title: "스스로 재무 설계 하기",
    content: "재무 설계 혼자서 마스터하기",
    date: "2024년 7월 17일",
  },
  {
    img: ShareEX,
    title: "재무설계란 무엇이고 왜 필요할까?",
    content: "꼭 필요한 재무설계 개념 잡고가기",
    date: "2024년 7월 18일",
  },
  {
    img: ShareEX,
    title: "재무설계란 무엇이고 왜 필요할까?",
    content: "꼭 필요한 재무설계 개념 잡고가기",
    date: "2024년 7월 19일",
  },
  {
    img: ShareEX,
    title: "재무설계란 무엇이고 왜 필요할까?",
    content: "꼭 필요한 재무설계 개념 잡고가기",
    date: "2024년 7월 20일",
  },
  {
    img: ShareEX,
    title: "재무설계란 무엇이고 왜 필요할까?",
    content: "꼭 필요한 재무설계 개념 잡고가기",
    date: "2024년 7월 21일",
  },
  {
    img: ShareEX,
    title: "재무설계란 무엇이고 왜 필요할까?",
    content: "꼭 필요한 재무설계 개념 잡고가기",
    date: "2024년 7월 22일",
  },
  {
    img: ShareEX,
    title: "재무설계란 무엇이고 왜 필요할까?",
    content: "꼭 필요한 재무설계 개념 잡고가기",
    date: "2024년 7월 23일",
  },
];

export const SharePage = () => {
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
