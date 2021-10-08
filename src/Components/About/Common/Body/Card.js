import React, { memo } from "react";
import { cardStyle } from "./style";

const Card = memo((props) => {
  const { element } = props || {};
  const { head, desc } = element || {};

  return (
    <div className={cardStyle.main} style={cardStyle.mainStylObj}>
      <div className={cardStyle.body}>
        <h5 className={cardStyle.title}>{head}</h5>
        <p className={cardStyle.text}>{desc}</p>
      </div>
    </div>
  );
});

export default Card;
