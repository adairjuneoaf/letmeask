import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Illustration = styled.div`
  background: var(--background-purple);

  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  padding: 8rem 6rem;

  color: var(--white-details);

  img {
    max-width: 40%;
    margin-bottom: 1rem;
  }
`;

export const CreateRoom = styled.div`
  flex: 7;

  background: var(--white-background);

  display: flex;
  justify-content: center;

  max-width: 100%;

  padding: 8rem 6rem;

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;

    width: 40%;

    > img {
      width: 40%;
      padding: 3.5rem 0;

      margin: 0 auto;
    }

    h2,
    h4 {
      text-align: center;
      margin-bottom: 1rem;
      color: var(--gray-font);
    }

    form {
      input {
        width: 100%;

        padding: 0.5rem 1rem;
        margin: 0rem 0 1rem 0;
        font-size: 1rem;
        height: 50px;

        &::placeholder {
          color: var(--gray-medium);
        }

        outline: none;
        border: 1px solid var(--gray-medium);
        border-radius: 0.375rem;

        transition: border 0.5s;

        &:focus {
          border-color: var(--hover-purple);
          color: var(--gray-font);
        }
      }
    }

    p {
      margin-top: 1rem;
      color: var(--gray-dark);

      a {
        color: var(--pink-dark);
      }
    }
  }
`;
