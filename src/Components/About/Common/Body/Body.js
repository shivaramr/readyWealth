import React, { memo } from "react";
import { Container } from "react-bootstrap";
import { data } from "./data";
import Card from "./Card";
import { bdStyl } from "./style";

const Body = memo(() => {
  const { goal, content, tag, last } = data || {};

  return (
    <div className={bdStyl.main}>
      <Container>
        <div className={bdStyl.goal}>
          <h5>{goal.head}</h5>
          <p>{goal.desc}</p>
        </div>
      </Container>
      <div className={bdStyl.boxes}>
        <div className={bdStyl.frCards}>
          {content.map(({ id, ...ele }) => (
            <Card key={id} element={{ ...ele }} />
          ))}
        </div>
        <h5 className={bdStyl.tag}>{tag}</h5>
      </div>
      <div className={bdStyl.cardMn}>
        <div className={bdStyl.cardBdy}>
          <h5>{last}</h5>
        </div>
      </div>
    </div>
  );
});

export default Body;
