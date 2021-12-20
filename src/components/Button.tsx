import { ButtonHTMLAttributes } from "react";
import { Container } from "../styles/Button";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  return (
    <Container>
      <button className="button" {...props} />
    </Container>
  );
}
