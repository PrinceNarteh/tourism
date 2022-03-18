import React from "react";
import styled from "styled-components";

export const Sidebar = () => {
  return <SidebarStyle>Sidebar</SidebarStyle>;
};

const SidebarStyle = styled.nav`
  width: 30rem;
  background-color: teal;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
`;
