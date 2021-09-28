import React, { memo } from "react";
import { Container } from "react-bootstrap";
import { style } from "./style";
import Card from "./subComponents/Card";
import { data } from "./subComponents/Card/data";

const Hero = memo(() => {
  return (
    <Container>
      <div class={style.main}>
        {data.map((element) => (
          <Card key={element.id} element={element} />
        ))}
      </div>
    </Container>
  );
});

export default Hero;
