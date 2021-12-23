import { Container, Content } from "../styles/Footer";

export function Footer() {
  return (
    <Container>
      <Content>
        <p>
          &copy; Desenvolvidor por{" "}
          <a href="https://portfolio.prismasystems.com.br" target="_blank" rel="noreferrer">
            Adair Juneo
          </a>
        </p>
      </Content>
    </Container>
  );
}
