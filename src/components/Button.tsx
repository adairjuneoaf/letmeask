import { ButtonHTMLAttributes } from "react";
import { Container } from "../styles/Button";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutline?: boolean;
};

export function Button({ isOutline = false, ...props }: ButtonProps) {
  return (
    <Container>
      <button className={`button ${isOutline ? "outlined" : ""}`} {...props} />
    </Container>
  );
}
