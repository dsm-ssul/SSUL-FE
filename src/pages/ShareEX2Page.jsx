import styled from "styled-components";
import second from "../assets/second.png";
import Header from "../components/Header";

export const ShareEX2Page = () => {
  return (
    <>
      <Header />
      <Img src={second} />
    </>
  );
};

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
