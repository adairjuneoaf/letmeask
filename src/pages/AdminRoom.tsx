import { Container, Header, Content } from "../styles/AdminRoom";
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

export function AdminRoom() {
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

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Logo da plataforma LetMeAsk" />

        <div>
          <CodeRoom code={params.id} />
          <Button isOutline={true}>Encerrar sala</Button>
        </div>
      </Header>

      <Content>
        <div className="information-room">
          <h3>{titleQuestion}</h3>
          {questions.length > 0 && <h4>{questions.length} Pergunta(s)</h4>}
        </div>

        {questions.map((question) => {
          return <Question key={question.id} content={question.content} author={question.author} />;
        })}
      </Content>

      <Footer />
    </Container>
  );
}
