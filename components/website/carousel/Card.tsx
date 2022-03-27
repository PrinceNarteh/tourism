import React from "react";
import styled from "styled-components";

export const Card = () => {
  return (
    <CardStyle>
      <h3>Kakum Nation Park</h3>
      <p>This is a canopy walk in Ghana</p>
    </CardStyle>
  );
};

const CardStyle = styled.div`
  max-width: 30rem;
  /* height: 10rem; */
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  left: 10%;
  bottom: 10%;
  padding: 2rem;
  border-radius: 0.5rem;

  h3 {
    font-size: clamp(1.2rem, 1.5vw, 3rem);
    font-weight: 400;
  }

  p {
    font-size: clamp(1rem, 1.1vw, 3rem);
  }
`;
