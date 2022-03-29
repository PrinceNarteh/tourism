import React from "react";
import styled from "styled-components";
import { AnimationControls, motion, useAnimation } from "framer-motion";

interface CardProps {
  title: string;
  description: string;
  controls: AnimationControls;
}

export const Card = ({ title, description, controls }: CardProps) => {
  const pControl = useAnimation();
  return (
    <CardStyle>
      <motion.h3 initial={{ x: 100 }} animate={controls}>
        {title}
      </motion.h3>
      <motion.p
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        {description}
      </motion.p>
    </CardStyle>
  );
};

const CardStyle = styled.div`
  max-width: 40rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  left: 10%;
  bottom: 10%;
  padding: 2rem;
  border-radius: 0.5rem;

  h3 {
    font-size: clamp(1.2rem, 1.6vw, 3rem);
    font-weight: 400;
  }

  p {
    font-size: clamp(1rem, 1.1vw, 3rem);
  }
`;
