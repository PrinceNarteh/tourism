import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Container } from "../Container";
import Kakum from "../../../public/images/kakum.jpg";

export const Discover = () => {
  return (
    <Container>
      <DiscoverStyle>
        <div>
          <Image src={Kakum} objectFit="contain" />
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
