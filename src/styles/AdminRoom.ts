import styled from "styled-components";

export const Container = styled.section``;

export const Header = styled.header`
  padding: 0 16rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 120px;

  border-bottom: 1px solid var(--gray-light);

  > img {
    width: 128px;
  }

  > div {
    display: flex;
    align-items: center;

    gap: 1rem;
  }
`;

export const Content = styled.section`
  max-width: 1056px;
  margin: 0 auto;

  margin-top: 2rem;

  display: flex;
  flex-direction: column;

  .information-room {
    display: flex;
    align-items: center;
    flex-direction: row;

    gap: 2rem;

    margin-bottom: 1rem;
    h3 {
      font-size: 1.5rem;
    }

    h4 {
      padding: 0.5rem 1rem;
      color: var(--white-details);
      background: var(--pink-dark);

      border-radius: 1000px;
    }
  }

  form {
    textarea {
      margin-bottom: 1rem;
      font-size: 1rem;

      width: 100%;

      padding: 1rem;
      min-height: 10rem;

      border-color: transparent;
      outline: none;
      border-radius: 0.5rem;

      box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.04);

      resize: vertical;

      transition: border-color 0 3s;

      &::placeholder {
        color: var(--gray-medium);
      }

      &:focus {
        border-color: var(--hover-purple);
      }
    }

    .footer-textarea-question {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .user-logged {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;

        img {
          clip-path: circle();
          width: 32px;
        }

        p {
          font-size: 0.875rem;
          color: var(--gray-shadow);
        }
      }

      .user-not-logged {
        p {
          font-size: 0.875rem;
          color: var(--gray-dark);

          button {
            font-size: 0.875rem;
            border: none;
            outline: none;
            background: none;
            color: var(--background-purple);
          }
        }
      }
    }
  }
`;
