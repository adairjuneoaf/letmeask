import { Container, Content } from "../styles/Question";
import likeImg from "../assets/images/like.svg";
import checkImg from "../assets/images/check.svg";
import deleteImg from "../assets/images/delete.svg";
import answerImg from "../assets/images/answer.svg";

type QuestionProps = {
  content: string;
  author: {
    avatar: string;
    name: string;
  };
};

export function Question(props: QuestionProps) {
  return (
    <Container className="container-question">
      <Content>
        <div className="question">
          <h4>{props.content}</h4>
        </div>
        <div className="information-question">
          <div className="user">
            <img src={props.author.avatar} alt={props.author.name} />
            <p>{props.author.name}</p>
          </div>

          <div className="functions-admin">
            <button type="button">
              <img src={checkImg} className="check" alt="Marcar como lida essa pergunta." />
            </button>

            <button type="button">
              <img src={answerImg} className="answer" alt="Responder essa pergunta." />
            </button>

            <button type="button">
              <img src={deleteImg} className="delete" alt="Deletar essa pergunta." />
            </button>
          </div>

          <div className="functions-user">
            <p>2</p>
            <button type="button">
              <img src={likeImg} className="like" alt="Dar like nessa pergunta." />
            </button>
          </div>
        </div>
      </Content>
    </Container>
  );
}
