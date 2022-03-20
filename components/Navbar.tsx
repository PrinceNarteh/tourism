import React from "react";
import styled from "styled-components";
import { Hamburger } from "./Hamburger";

export const Navbar = () => {
  return (
    <NavbarStyle>
      <Hamburger />
    </NavbarStyle>
  );
};

const NavbarStyle = styled.nav`
  height: 6rem;
  box-shadow: 0 2px 10px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rem;
`;
