import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 80px;

  position: fixed;
  bottom: 0;

  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border-top: 1px solid var(--gray-light);
`;

export const Content = styled.section`
  p {
    font-size: 0.875rem;

    a {
      text-decoration: none;
      color: var(--background-purple);

      transition: color 0.3s;

      &:hover {
        color: var(--hover-purple);
      }
    }
  }
`;
