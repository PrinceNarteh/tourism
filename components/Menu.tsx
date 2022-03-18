import React from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";
import { add } from "react-icons/all";

const menuItems = [
  {
    icon: "",
    label: "Add Post",
  },
];

const Menu = () => {
  return (
    <MenuStyle>
      {menuItems.map((menu, idx) => (
        <MenuItem icon={} label={menu.label} />
      ))}
    </MenuStyle>
  );
};

export default Menu;

const MenuStyle = styled.ul`
  list-style: none;
`;
