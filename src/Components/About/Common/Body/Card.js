import React, { memo } from "react";
import { cardStyle } from "./style";

const Card = memo((props) => {
  const { element } = props || {};
  const { head, desc } = element || {};

  return (
    <div class={cardStyle.main} style={cardStyle.mainStylObj}>
      <div class={cardStyle.body}>
        <h5 class={cardStyle.title}>{head}</h5>
        <p class={cardStyle.text}>{desc}</p>
      </div>
    </div>
  );
});

export default Card;
