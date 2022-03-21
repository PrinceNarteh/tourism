import React from "react";
import styled from "styled-components";

interface ICard {
  bgColor?: string;
  icon: React.ReactNode;
  label: string;
  stats: number;
}

export const Card = ({ bgColor, icon, label, stats }: ICard) => {
  return (
    <CardStyle bgColor={`${bgColor}`}>
      <div>{icon}</div>
      <div>
        <h3>{label}</h3>
        <p>{stats}</p>
      </div>
    </CardStyle>
  );
};

const CardStyle = styled.div`
  background-color: ${({ bgColor }: { bgColor: string }) =>
    bgColor ? bgColor : "red"};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  height: 15rem;
  flex-basis: 20rem;
`;
