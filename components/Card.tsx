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
      <div className="card__icon">{icon}</div>
      <div className="card__text">
        <h3>{label}</h3>
        <p>{stats}</p>
      </div>
    </CardStyle>
  );
};

const CardStyle = styled.div`
  background-color: ${({ bgColor }: { bgColor: string }) =>
    bgColor ? bgColor : "red"};
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 1rem;
  height: 15rem;
  min-width: 25rem;
  max-width: 30rem;
  padding: 2rem;
  color: #fff;

  .card__icon {
    flex: 1;
    border: 1px solid #ccc;
    padding: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    height: 5rem;
    width: 5rem;
  }

  .card__text {
    text-align: right;
    flex: 3;

    h3 {
      font-size: 2rem;
      font-weight: 400;
      letter-spacing: 1px;
      text-transform: capitalize;
    }

    p {
      font-size: 5rem;
      font-weight: bolder;
    }
  }
`;
