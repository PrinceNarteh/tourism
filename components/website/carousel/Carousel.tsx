import React from "react";
import styled from "styled-components";
import { Slider } from "./Slider";

export const Carousel = () => {
  return (
    <CarouselStyle>
      <Slider />
    </CarouselStyle>
  );
};

const CarouselStyle = styled.div`
  max-width: 100vw;
  height: 100vh;
  /* background-color: teal; */
`;
