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

  &:checked ~ .sidebar {
    width: 20rem;
    /* transition: all 5s ease-in-out; */

    .sidebar__top {
      height: 15rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      /* color: #fff; */

      .icon {
        width: 8rem;
        height: 8rem;
      }
    }
  }

  &:checked ~ .content {
    width: calc(100vw - 20rem);
    margin-left: 20rem;
  }
`;
