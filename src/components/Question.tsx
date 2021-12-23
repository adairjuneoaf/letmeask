import { Container, Content } from "../styles/Question";

import { ReactNode } from "react";

type QuestionProps = {
  content: string;
  author: {
    avatar: string;
    name: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
};

export function Question({ content, author, children, isAnswered = false, isHighlighted = false }: QuestionProps) {
  return (
    <Container className="container-question">
      <Content className={`${isAnswered ? "answered " : ""} ${isHighlighted && !isAnswered ? "highlighted" : ""}`}>
        <div className="question">
          <h4>{content}</h4>
        </div>
        <div className="information-question">
          <div className="user">
            <img src={author.avatar} alt={author.name} />
            <p>{author.name}</p>
          </div>

          <div className="functions">{children}</div>
        </div>
      </Content>
    </Container>
  );
}
