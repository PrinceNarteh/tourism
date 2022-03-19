import React from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";

const menuItems = [
  {
    icon: "",
    label: "Add Post",
  },
];

const Menu = () => {
  return (
    // <MenuStyle>
    //   {menuItems.map((menu, idx) => (
    //     // <MenuItem icon={} label={menu.label} />
    //   ))}
    // </MenuStyle>
    <h1>Menu</h1>
  );
};

export default Menu;

const MenuStyle = styled.ul`
  list-style: none;
`;
