import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Container } from "../Container";

export const Discover = () => {
  return (
    <Container>
      <DiscoverStyle>
        <div>
          <Image
            src="/images/kakum.jpg"
            height="360"
            width="250"
            layout="fill"
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
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 360px;

  div {
    /* background-color: crimson; */
    margin: 2rem;
  }
`;
