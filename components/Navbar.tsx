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
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0;
  background-color: #fff;
  box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.2);

  padding: 0 2rem;
  height: 4rem;
  z-index: 100;
`;
