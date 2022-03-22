import React from "react";
import styled from "styled-components";
import { FaUser } from "react-icons/fa";

export const Sidebar = () => {
  return (
    <SidebarStyle className="sidebar">
      <div className="sidebar__top">
        <FaUser size={30} className="icon" />
        <>
          <h6>Admin</h6>
          <p>John Doe</p>
        </>
      </div>
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

  overflow: hidden;
  width: 6rem;
  height: calc(100vh - 4rem);

  position: fixed;
  left: 0;
  top: 4rem;

  background-color: transparent;

  border-right: 1px solid lightgray;
  transition: width 0.2s ease-in-out;

  .sidebar__top {
    /* background-color: teal; */
    height: 6rem;
    text-align: center;
    padding-top: 1rem;
    transition: all 0.2s ease-in-out;
  }

  .sidebar__middle {
    flex-grow: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .sidebar__bottom {
    font-size: 1.2rem;
    background-color: red;
    width: 100%;
  }
`;
