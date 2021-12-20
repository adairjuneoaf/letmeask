import { useNavigate } from "react-router-dom";

import { Authentication, Container, Illustration } from "../styles/Home";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";

import googleIconImg from "../assets/images/google-icon.svg";
import loginIconImg from "../assets/images/login.svg";
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";

export function Home() {
  const history = useNavigate();

  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history("/rooms/new");
  }

  return (
    <Container>
      <Illustration>
        <img src={illustrationImg} alt="Ilustração de chat" />
        <h1>Toda pergunta tem uma resposta.</h1>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </Illustration>

      <Authentication>
        <section>
          <img src={logoImg} alt="Logo da plataforma LetMeAsk" />
          <button onClick={handleCreateRoom} className="login-google">
            <img src={googleIconImg} alt="Logo do Google" />
            <h4>Crie sua sala com o Google</h4>
          </button>
          <div className="divider">ou entre em uma sala</div>
          <input type="number" placeholder="Digite o código da sala" />
          <Button>
            <img src={loginIconImg} alt="Icon de login" />
            Entrar na sala
          </Button>
        </section>
      </Authentication>
    </Container>
  );
}
