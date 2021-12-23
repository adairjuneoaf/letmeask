import styled from "styled-components";

export const Container = styled.div`
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    width: 100%;

    padding: 1rem 1rem;
    font-size: 1rem;

    background: var(--background-purple);

    color: var(--white-details);

    outline: none;
    border: none;
    border-radius: 0.375rem;

    transition: background-color 0.2s;

    &.outlined {
      background: var(--danger);
      color: var(--white-background);

      transition: background-color 0.3s;

      &:hover {
        background: var(--hover-danger);
      }
    }

    &:hover {
      background: var(--hover-purple);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`;
