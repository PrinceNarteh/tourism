import styled from "styled-components";

export const HiddenInput = styled.input`
  display: none;

  &:checked ~ nav label span:nth-child(1) {
    transform: rotate(40deg);
  }

  &:checked ~ nav label span:nth-child(2) {
    transform: translateX(4rem);
    opacity: 0;
  }

  &:checked ~ nav label span:nth-child(3) {
    transform: rotate(-40deg);
  }

  &:checked ~ div .sidebar {
    width: 30rem;
  }
`;
