import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

import { Authentication, Container, Illustration } from "../styles/Home";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";

import googleIconImg from "../assets/images/google-icon.svg";
import loginIconImg from "../assets/images/login.svg";
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";

export function Home() {
  const history = useNavigate();

  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState("");

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history("/rooms/new");
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === "") {
      toast.info("Opps... código da sala está incorreto!");
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      toast.error("Não existe sala com esse código.");
      return;
    }

    history(`/rooms/${roomCode}`);
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
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button>
              <img src={loginIconImg} alt="Icon de login" />
              Entrar na sala
            </Button>
          </form>
        </section>
      </Authentication>
    </Container>
  );
}
