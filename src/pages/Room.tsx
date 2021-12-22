import { Container, Header, Content } from "../styles/Room";
import logoImg from "../assets/images/logo.svg";
import { CodeRoom } from "../components/CodeRoom";
import { Button } from "../components/Button";

import { useParams } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-toastify";
import { database } from "../services/firebase";

type RoomParams = {
  id: string;
};

type FirebaseQuestions = Record<
  string,
  {
    author: {
      name: string;
      avatar: string;
    };
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
  }
>;

type Question = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
};

export function Room() {
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const { user, signInWithGoogle } = useAuth();

  async function handleSingInRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    toast.success("Login efetuado com sucesso!");
    return;
  }

  const [newQuestion, setNewQuestion] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [titleQuestion, setTitleQuestion] = useState("");

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.once("value", (room) => {
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
          isHighlighted: value.isHighlighted,
          isAnswered: value.isAnswered,
        };
      });

      setTitleQuestion(databaseRoom.title);
      setQuestions(parsedQuestions);
    });
  }, [roomId]);

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
      context: newQuestion,
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

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Logo da plataforma LetMeAsk" />
        <CodeRoom code="{roomId}" />
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
        {JSON.stringify(questions)}
      </Content>
    </Container>
  );
}
