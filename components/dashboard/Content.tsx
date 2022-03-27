import React from "react";
import styled from "styled-components";
import { Summary } from "./Summary";

export const Content = () => {
  return (
    <ContentStyle className="content">
      <Summary />
    </ContentStyle>
  );
};

const ContentStyle = styled.main`
  transition: all 0.2s ease-in-out;
  width: calc(100% - 6rem);
  margin-left: 6rem;
  padding: 1rem;
  /* padding: 7rem 2rem 2rem; */
  p {
    font-size: 1.3rem;
  }
`;
