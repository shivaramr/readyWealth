import React, { memo } from "react";
import { Container } from "react-bootstrap";
import { style } from "./style";

const Head = memo((props) => {
  const { data } = props || {};
  const { head, pic, desc } = data || {};

  return (
    <Container>
      <div class={style.main}>
        <img
          src={pic}
          alt="logo"
          //   style={{ width: "40%", height: '40%' }}
          class={style.img}
        />
        <div class={style.data}>
          <h2>{head}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </Container>
  );
});

export default Head;
