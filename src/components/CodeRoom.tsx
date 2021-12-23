import { Content } from "../styles/CodeRoom";
import copyImg from "../assets/images/copy.svg";

type RoomCodeProps = {
  code?: string;
};

export function CodeRoom({ code }: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    if (!code) return;
    navigator.clipboard.writeText(code);
  }

  return (
    <Content onClick={copyRoomCodeToClipboard}>
      <img src={copyImg} alt="Icone copiar número da sala." />
      <h3>Sala: {code}</h3>
    </Content>
  );
}
