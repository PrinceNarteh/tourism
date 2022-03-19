import React from "react";
import styled from "styled-components";

export const Sidebar = () => {
  return <SidebarStyle>Sidebar</SidebarStyle>;
};

const SidebarStyle = styled.nav`
  width: 30rem;
  background-color: teal;
  position: fixed;
  bottom: 0;
  left: 0;
  height: calc(100vh - 6rem);
`;
