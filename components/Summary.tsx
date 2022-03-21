import React from "react";
import styled from "styled-components";
import { Card } from "./Card";
import {} from "react-icons/ai";

export const Summary = () => {
  return (
    <SummaryStyle>
      <Card bgColor="blue" icon />
    </SummaryStyle>
  );
};

const SummaryStyle = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
`;
