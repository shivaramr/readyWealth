import React, { memo } from "react";
import { cardStyle } from './style';

const Card = memo((props) => {
  const { title, points } = props;
  return (
    <div class={cardStyle.main}>
      <div class={cardStyle.bpy}>
        <h4 class={cardStyle.title}>{title || ""}</h4>
        <p class={cardStyle.text}>
          <ul>
            {Array.isArray(points)
              ? points.map((ele, id) => <li>{ele}</li>)
              : ""}
          </ul>
        </p>
      </div>
    </div>
  );
});

export default Card;
