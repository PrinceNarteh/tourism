import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface MenuItemProps {
  href: string;
  label: string;
}

export const MenuItem = ({ href, label }: MenuItemProps) => {
  return (
    <MenuItemStyle>
      <Link href={href}>{label}</Link>
    </MenuItemStyle>
  );
};

const MenuItemStyle = styled.li`
  font-size: 1.5rem;
`;
