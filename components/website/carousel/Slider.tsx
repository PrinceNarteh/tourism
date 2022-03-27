import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Card } from "./Card";

export const Slider = () => {
  return (
    <SliderStyle>
      <img src="/images/kakum.jpg" />
      <Overlay />
      <Card />
    </SliderStyle>
  );
};

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
`;

const SliderStyle = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
