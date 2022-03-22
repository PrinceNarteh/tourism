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
  height: 10rem;
  min-width: 22rem;
  max-width: 25rem;
  padding: 2rem;
  color: #fff;

  .card__icon {
    flex: 1;
    border: 1px solid #777;
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
      font-size: 1rem;
      font-weight: 400;
      letter-spacing: 1px;
      text-transform: capitalize;
    }

    p {
      font-size: 3rem;
      font-weight: bolder;
    }
  }
`;
