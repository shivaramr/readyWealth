import React, { memo } from "react";
import { style } from "./style";

const Head = memo((props) => {
  const { data } = props || {};
  const { head, pic, desc } = data || {};

  return (
      <div className={style.main}>
        <img
          src={pic}
          alt="logo"
          //   style={{ width: "40%", height: '40%' }}
          className={style.img}
        />
        <div className={style.data}>
          <h2>{head}</h2>
          <p>{desc}</p>
        </div>
      </div>
  );
});

export default Head;
