import React from "react";
import styled from "styled-components";

interface CardProps {
  title: string;
  description: string;
}

export const Card = ({ title, description }: CardProps) => {
  return (
    <CardStyle>
      <h3>{title}</h3>
      <p>{description}</p>
    </CardStyle>
  );
};

const CardStyle = styled.div`
  max-width: 30rem;
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
