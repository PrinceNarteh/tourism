import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Container } from "../Container";
import Kakum from "assets/images/kakum.jpg";

export const Discover = () => {
  return (
    <Container>
      <DiscoverStyle>
        <div>
          <Image
            src={Kakum}
            height={400}
            layout="fixed"
            objectPosition="center"
          />
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </DiscoverStyle>
    </Container>
  );
};

const DiscoverStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 400px;

  div {
    background-color: crimson;
    position: relative;
    margin: 2rem;
    overflow: hidden;

    &:hover img {
      transition: all 0.3s linear;
      transform: scale(1.1);
    }
  }
`;
