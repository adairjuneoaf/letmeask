import { Container, Header, Content } from "../styles/Room";
import logoImg from "../assets/images/logo.svg";

import { CodeRoom } from "../components/CodeRoom";
import { Button } from "../components/Button";

import { useParams } from "react-router-dom";
import { FormEvent, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-toastify";
import { database } from "../services/firebase";
import { Question } from "../components/Question";
import { Footer } from "../components/Footer";

import { useRoom } from "../hooks/useRoom";

type RoomParams = {
  id: string;
};

export function Room() {
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { questions, titleQuestion } = useRoom(roomId);

  const { user, signInWithGoogle } = useAuth();

  async function handleSingInRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    toast.success("Login efetuado com sucesso!");
    return;
  }

  const [newQuestion, setNewQuestion] = useState("");

  async function handleSendNewQuestion(event: FormEvent) {
    event.preventDefault();

    if (newQuestion.trim() === "") {
      toast.info("Houve algum erro com a sua pergunta, por favor verifique o conteúdo");
      return;
    }

    if (!user) {
      toast.info("Você ainda não efetuou seu login");
    }

    const question = {
      content: newQuestion,
      author: {
        name: user?.name,
        avatar: user?.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    try {
      await database.ref(`rooms/${roomId}/questions`).push(question);
      toast.success("Pergunta enviada com sucesso!");
      setNewQuestion("");
    } catch {
      toast.error("Oops, houve algum erro durante o envio da sua pergunta.");
    }
  }

  async function handleLikeQuestion(questionId: string, likeId: string | undefined) {
    if (likeId) {
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes/${likeId}`).remove();
    } else {
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes`).push({
        likeUserId: user?.id,
      });
    }
  }

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Logo da plataforma LetMeAsk" />
        <CodeRoom code={params.id} />
      </Header>

      <Content>
        <div className="information-room">
          <h3>{titleQuestion}</h3>
          {questions.length > 0 && <h4>{questions.length} Pergunta(s)</h4>}
        </div>
        <form onSubmit={handleSendNewQuestion}>
          <textarea placeholder="Qual é a sua dúvida?" onChange={(event) => setNewQuestion(event.target.value)} value={newQuestion} />
          <div className="footer-textarea-question">
            {user ? (
              <div className="user-logged">
                <img src={user.avatar} alt={user.name} />
                <p>{user.name}</p>
              </div>
            ) : (
              <div className="user-not-logged">
                <p>
                  Para enviar uma pergunta,
                  <button type="button" onClick={handleSingInRoom}>
                    {" "}
                    faça seu login
                  </button>
                  .
                </p>
              </div>
            )}
            <Button type="submit" disabled={!user}>
              Enviar pergunta
            </Button>
          </div>
        </form>

        {questions.map((question) => {
          return (
            <Question
              key={question.id}
              content={question.content}
              author={question.author}
              isAnswered={question.isAnswered}
              isHighlighted={question.isHighlighted}
            >
              <div className={`functions-user ${question.likeId ? "liked" : ""}`}>
                <p>{question.likeCount}</p>
                {!question.isAnswered && (
                  <button type="button" onClick={() => handleLikeQuestion(question.id, question.likeId)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z"
                        stroke="#737380"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </Question>
          );
        })}
      </Content>

      <Footer />
    </Container>
  );
}
