import { Container, Header, Content } from "../styles/AdminRoom";
import logoImg from "../assets/images/logo.svg";
import { CodeRoom } from "../components/CodeRoom";
import { Button } from "../components/Button";

import { useParams } from "react-router-dom";
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
