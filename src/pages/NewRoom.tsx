import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";

import { CreateRoom, Container, Illustration } from "../styles/NewRoom";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";
import { useNavigate } from "react-router-dom";

export function NewRoom() {
  const { user } = useAuth();
  const history = useNavigate();

  const [newRoom, setNewRoom] = useState("");

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === "") {
      toast.info("Opps... nome da sala está incorreto!");
      return;
    }

    const roomRef = database.ref("rooms");

    try {
      const firebaseRoom = await roomRef.push({
        title: newRoom,
        authorId: user?.id,
      });

      toast.success("Sala criada com sucesso!");
      history(`/rooms/${firebaseRoom.key}`);
    } catch {
      toast.error("Erro ao criar está sala.");
    }
  }

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
          <form onSubmit={handleCreateRoom}>
            <input type="text" placeholder="Nome da sala" onChange={(event) => setNewRoom(event.target.value)} value={newRoom} />
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
