import React from "react";
import styled from "styled-components";

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
}

const MenuItem = ({ icon, label }: MenuItemProps) => {
  return (
    <MenuItemStyle>
      <span>{icon}</span> {label}
    </MenuItemStyle>
  );
};

const MenuItemStyle = styled.li`
  span {
    width: 6rem;
    height: 6rem;
    color: #fff;
  }
`;

export default MenuItem;
