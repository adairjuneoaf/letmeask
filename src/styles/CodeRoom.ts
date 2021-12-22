import styled from "styled-components";

export const Content = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: 1px solid var(--background-purple);
  border-radius: 0.5rem;

  outline: none;
  background: none;

  img {
    background: var(--background-purple);
    border-radius: 0.5rem 0 0 0.5rem;
    width: 32px;

    padding: 0.375rem;
  }

  h3 {
    color: var(--gray-font);
    padding: 0 1rem;
  }
`;
