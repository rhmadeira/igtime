import { HeaderContainer } from "./styles";
import logoIgnite from "../../assets/ignite-logo.svg";
import { Timer, Scroll } from "phosphor-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="logo" />
      <nav>
        <NavLink to="/" title="Timer">
          {" "}
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Historico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
