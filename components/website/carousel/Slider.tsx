import { AnimationControls } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Card } from "./Card";

interface SliderProps {
  title: string;
  description: string;
  image: string;
  controls: AnimationControls;
}

export const Slider = ({
  title,
  description,
  image,
  controls,
}: SliderProps) => {
  return (
    <SliderStyle>
      <img src={image} />
      <Overlay />
      <Card title={title} description={description} controls={controls} />
    </SliderStyle>
  );
};

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

const SliderStyle = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  position: relative;
  overflow: hidden;

  & > img {
    width: 100%;
    object-fit: cover;
  }
`;
