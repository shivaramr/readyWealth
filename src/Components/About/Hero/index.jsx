import React, { memo } from "react";
import Card from "./subComponents/Card";
import { data } from "./subComponents/Card/data";
import { style } from "./style";

const Hero = memo(() => {
  return (
    <div class={style.main}>
      {data.map((ele) => (
        <Card key={ele.id} element={ele} />
      ))}
    </div>
  );
});

export default Hero;
