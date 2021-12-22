import { Content } from "../styles/CodeRoom";
import copyImg from "../assets/images/copy.svg";

type RoomCodeProps = {
  code: string;
};

export function CodeRoom(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <Content onClick={copyRoomCodeToClipboard}>
      <img src={copyImg} alt="Icone copiar número da sala." />
      <h3>Sala: {props.code}</h3>
    </Content>
  );
}
