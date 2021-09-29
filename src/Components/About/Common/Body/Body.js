import React, { memo } from "react";
import { Container } from "react-bootstrap";
import { data } from "./data";
import Card from "./Card";
import { bdStyl } from "./style";

const Body = memo(() => {
  const { goal, content, tag, last } = data || {};

  return (
    <div class={bdStyl.main}>
      <Container>
        <div class={bdStyl.goal}>
          <h5>{goal.head}</h5>
          <p>{goal.desc}</p>
        </div>
      </Container>
      <div class={bdStyl.boxes}>
        <div class={bdStyl.frCards}>
          {content.map((element) => (
            <Card key={element.id} element={element} />
          ))}
        </div>
        <h5 class={bdStyl.tag}>{tag}</h5>
      </div>
      <div class={bdStyl.cardMn}>
        <div class={bdStyl.cardBdy}>
          <h5>{last}</h5>
        </div>
      </div>
    </div>
  );
});

export default Body;
