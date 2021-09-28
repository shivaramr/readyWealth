import React, { memo } from "react";
import { Container } from "react-bootstrap";
import { data } from "./data";
import Card from "./Card";
import { bdStyl } from "./style";

const Body = memo(() => {
  const { goal, content, tag } = data || {};

  return (
    <Container>
      <div class={bdStyl.goal}>
        <h5>{goal.head}</h5>
        <p>{goal.desc}</p>
      </div>
      <div class={bdStyl.boxes}>
        <div class={bdStyl.frCards}>
          {content.map((element) => (
            <Card key={element.id} element={element} />
          ))}
        </div>
        <h5>{tag}</h5>
      </div>
    </Container>
  );
});

export default Body;
