import React, { memo } from "react";
import { Container } from "react-bootstrap";
import { style } from "./cardStyle";

const Card = memo((props) => {
  const { title, logo, details } = props;
  return (
    <Container>
      <h3>{title}</h3>
      <hr />
      <div class={style.body}>
        {logo}
        <h4 class={style.data}>{details}</h4>
      </div>
    </Container>
  );
});

export default Card;
