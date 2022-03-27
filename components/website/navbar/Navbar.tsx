import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Logo } from "./Logo";
import { MenuItems } from "./MenuItems";

export const Navbar = () => {
  return (
    <NavbarStyle>
      <Logo />
      <MenuItems />
    </NavbarStyle>
  );
};

const NavbarStyle = styled.nav`
  position: fixed;

  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rem;
`;
