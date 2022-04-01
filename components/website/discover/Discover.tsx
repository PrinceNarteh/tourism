import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Container } from "../Container";
import Kakum from "assets/images/kakum.jpg";

export const Discover = () => {
  return (
    <Container>
      <Heading>Check Our Tourist Sites</Heading>
      <DiscoverStyle>
        <div>
          <Image
            src={Kakum}
            height={400}
            layout="fixed"
            objectPosition="center"
          />
          <div className="content">
            <h4>Cape Coast</h4>
            <h3>Kakum National Park</h3>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </DiscoverStyle>
    </Container>
  );
};

const Heading = styled.h1`
  font-size: 3vw;
  font-weight: 400;
`;

const DiscoverStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 400px;
  cursor: pointer;

  div {
    background-color: crimson;
    position: relative;
    margin: 2rem;
    overflow: hidden;

    &:hover img {
      transition: all 0.3s linear;
      transform: scale(1.1);
    }

    .content {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: teal;
      inset: 0;
      z-index: 2;
    }
  }
`;
