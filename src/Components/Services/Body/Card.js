import React, { memo } from "react";
import { cardStyle } from './style';

const Card = memo((props) => {
  const { title, points } = props;
  return (
    <div className={cardStyle.main}>
      <div className={cardStyle.bpy}>
        <h4 className={cardStyle.title}>{title || ""}</h4>
        <p className={cardStyle.text}>
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
