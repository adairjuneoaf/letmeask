import { Link } from "react-router-dom";

import { CreateRoom, Container, Illustration } from "../styles/NewRoom";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";

export function NewRoom() {
  const { user } = useAuth();

  return (
    <Container>
      <Illustration>
        <img src={illustrationImg} alt="Ilustração de chat" />
        <h1>Toda pergunta tem uma resposta.</h1>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </Illustration>

      <CreateRoom>
        <section>
          <img src={logoImg} alt="Logo da plataforma LetMeAsk" />
          <h4>
            Olá <span>{user?.name}</span>
          </h4>
          <h2>Crie uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button>Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala já existente? <Link to="/">Clique aqui</Link>
          </p>
        </section>
      </CreateRoom>
    </Container>
  );
}
