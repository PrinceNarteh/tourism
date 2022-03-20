import React from "react";
import styled from "styled-components";

export const Hamburger = () => {
  return (
    <HamburgerStyle htmlFor="checkbox">
      <span></span>
      <span></span>
      <span></span>
    </HamburgerStyle>
  );
};

export const HamburgerStyle = styled.label`
  position: relative;
  width: 5rem;
  height: 5rem;
  overflow: hidden;
  cursor: pointer;

  span {
    position: absolute;
    top: 50%;
    left: 20%;
    width: 3rem;
    height: 3px;
    background-color: gray;
    border-radius: 5px;
    transition: all 0.2s linear;

    &:nth-child(1) {
      transform: translateY(-1rem);
      animation-delay: 100ms;
    }

    &:nth-child(3) {
      transform: translateY(1rem);
      animation-delay: 250ms;
    }
  }
`;
