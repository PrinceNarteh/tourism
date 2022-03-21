import React from "react";
import styled from "styled-components";
import { Summary } from "./Summary";

export const Content = () => {
  return (
    <ContentStyle>
      <Summary />
    </ContentStyle>
  );
};

const ContentStyle = styled.main`
  transition: all 0.2s ease-in-out;
  margin: 1rem;
  width: 100%;
  /* padding: 7rem 2rem 2rem; */
`;
