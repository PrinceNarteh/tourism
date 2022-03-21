import React from "react";
import styled from "styled-components";

export const Sidebar = () => {
  return (
    <SidebarStyle className="sidebar">
      <div className="sidebar__top">Top Section</div>
      <div className="sidebar__middle">Middle Section</div>
      <div className="sidebar__bottom">Bottom Section</div>
    </SidebarStyle>
  );
};

const SidebarStyle = styled.aside`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  flex-direction: column;
  justify-content: stretch;

  overflow: hidden;
  width: 6rem;
  height: calc(100vh - 5rem);

  padding-top: 1rem;

  position: sticky;
  left: 0;
  top: 4rem;

  background-color: transparent;

  border-right: 1px solid lightgray;
  transition: width 0.2s ease-in-out;

  .sidebar__top {
  }

  .sidebar__middle {
    flex-grow: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .sidebar__bottom {
  }
`;
