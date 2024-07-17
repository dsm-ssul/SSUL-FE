import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import * as S from "./style.js";

const getNavLinkStyle = ({ isActive }) => ({
  color: isActive ? "#4F63D2" : "black",
  textDecoration: "none",
});

function Header() {
  return (
    <S.Container>
      <Logo />
      <NavLink to="/main" style={getNavLinkStyle}>
        <S.Text>재무설계</S.Text>
      </NavLink>
      <NavLink to="/voting" style={getNavLinkStyle}>
        <S.Text>재무투표</S.Text>
      </NavLink>
      <NavLink to="/share" style={getNavLinkStyle}>
        <S.Text>지식공유</S.Text>
      </NavLink>
      <NavLink to="/calculator" style={getNavLinkStyle}>
        <S.Text>계산기</S.Text>
      </NavLink>
    </S.Container>
  );
}

export default Header;
