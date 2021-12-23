import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { database } from "../services/firebase";
import { Authentication, Container, Illustration } from "../styles/Home";
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";
import loginIconImg from "../assets/images/login.svg";

//COMPONENTE PRINCIPAL DA PÁGINA HOME.
export function Home() {
  //CONST UTILIZADA PARA REDIRECIONAR USUÁRIO A OUTRAS ROTAS.
  const history = useNavigate();

  //CONST PARA RECEBER OS INFORMAÇÕES DO USUÁRIO e LOG-ON NO GOOGLE UTILIZANDO HOOK useAuth().
  const { user, signInWithGoogle } = useAuth();

  //CONST PARA RECEBER INFORMAÇÕES DA SALA e SETAR NOVAS INFORMAÇÕES UTILIZANDO useState().
  const [roomCode, setRoomCode] = useState("");

  //FUNÇÃO RESPONSAVEL POR CHAMAR O POP-UP DE LOGIN NO HOOK useAuth() CASO USUÁRIO NÃO LOGADO.
  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history("/rooms/new");
  }

  //FUNÇÃO RESPONSAVEL POR EFETUAR ENTRADA EM SALA QUE JÁ FOI CRIADA OU NÃO(RETORNO DE ALERTA EM TELA).
  //ESSA FUNÇÃO POSSUI VÁRIAS VERIFICAÇÕES ANTES DE CONFIRMAR ENTRADA NA SALA DE FATO.

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

    if (roomRef.val().endedAt) {
      toast.info("Esta sala já foi encerrada.");
      return;
    }

    history(`/rooms/${roomCode}`);
  }

  //RETORNO DO COMPONENTE OU COMPONENTES QUE SERÃO EXIBIDOS EM TELA / RENDERIZADOS EM TELA.
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
