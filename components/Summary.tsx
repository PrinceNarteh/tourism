import React from "react";
import styled from "styled-components";
import { Card } from "./Card";
import { AiFillHdd } from "react-icons/ai";

export const Summary = () => {
  return (
    <SummaryStyle>
      <Card
        bgColor="#1D3557"
        icon={<AiFillHdd size={30} color="#fff" />}
        label="Total Tourist Sites"
        stats={65}
      />
      <Card
        bgColor="#54414E"
        icon={<AiFillHdd size={30} color="#fff" />}
        label="Total Tourist Sites"
        stats={65}
      />
      <Card
        bgColor="#D95D39"
        icon={<AiFillHdd size={30} color="#fff" />}
        label="Total Tourist Sites"
        stats={65}
      />
      <Card
        bgColor="#5D707F"
        icon={<AiFillHdd size={30} color="#fff" />}
        label="Total Tourist Sites"
        stats={65}
      />
    </SummaryStyle>
  );
};

const SummaryStyle = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
`;
