import styled from "styled-components";
import first from "../assets/first.png";
import Header from "../components/Header";

export const ShareEXPage = () => {
  return (
    <>
      <Header />
      <Img src={first} />
    </>
  );
};

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
