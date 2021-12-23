import styled from "styled-components";

export const Container = styled.section`
  max-width: 1056px;
  margin-top: 2.5rem;

  & + .container-question {
    margin-top: 1.5rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: fit-content;

  padding: 1.5rem;

  background: var(--white-details);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.04);

  border-radius: 0.5rem;

  .question {
    width: 100%;
    height: fit-content;

    h4 {
      max-width: 100%;
      font-size: 1rem;
      font-weight: 500;
      text-align: justify;
    }
  }

  .information-question{
    display: flex;
    flex-direction: row
    align-items: center;
    justify-content: space-between;

    margin-top: 2rem;

    button{
      outline: none;
      background: transparent;
      border: none;
      width: fit-content;
      height: fit-content;

      display: flex;
      align-items: center;

    }

    .user{
      display: flex;
      flex-direction: row;
      align-items: center;
      
      gap: 0.5rem;

      img{
        clip-path: circle();
        width: 32px;
      }

      p{
        font-size: 1rem;
        color: var(--gray-medium);
      }
    }

    .functions-admin{
      display: flex;
      flex-direction: row;
      align-items: center;

      gap: 0.5rem;

      .check{
        transition: filter 0.5s;
        &:hover{
          filter: brightness(0) saturate(100%) invert(30%) sepia(76%) saturate(1686%) hue-rotate(237deg) brightness(88%) contrast(93%);
        }
      }
      

      .answer{
        transition: filter 0.5s;
        &:hover{
          filter: brightness(0) saturate(100%) invert(30%) sepia(76%) saturate(1686%) hue-rotate(237deg) brightness(88%) contrast(93%);
        }
      }

      .delete{
        transition: filter 0.5s;
        &:hover{
          filter: brightness(0) saturate(100%) invert(35%) sepia(55%) saturate(1028%) hue-rotate(306deg) brightness(102%) contrast(105%);
        }
      }
    }

    .functions-user{
      display: flex;
      flex-direction: row;
      align-items: center;

      gap: 0.5rem;

      p{
        font-size: 1rem;
        color: var(--gray-dark);
      }

      .like{
        transition: filter 0.5s;
        &:hover{
          filter: brightness(0) saturate(100%) invert(30%) sepia(76%) saturate(1686%) hue-rotate(237deg) brightness(88%) contrast(93%);
        }
      }
    }
  }
`;
