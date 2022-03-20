import React from "react";
import styled from "styled-components";

export const Content = () => {
  return (
    <ContentStyle>
      <h1>Content</h1>
    </ContentStyle>
  );
};

const ContentStyle = styled.main`
  transition: all 0.2s ease-in-out;
  margin: 1rem;
  /* padding: 7rem 2rem 2rem; */
`;
