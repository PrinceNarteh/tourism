import React from "react";
import styled from "styled-components";
import { MenuItem } from "./MenuItem";

const menuList: {
  href: string;
  label: string;
}[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about-us",
    label: "About Us",
  },
  {
    href: "/contact-us",
    label: "Contact Us",
  },
];

export const MenuItems = () => {
  return (
    <MenuItemsStyle>
      {menuList.map((menu, idx) => (
        <MenuItem key={idx} href={menu.href} label={menu.label} />
      ))}
    </MenuItemsStyle>
  );
};

const MenuItemsStyle = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2rem;
`;
