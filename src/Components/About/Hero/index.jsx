import React, { memo } from "react";
import Card from "./subComponents/Card";
import { data } from "./subComponents/Card/data";
import { style } from "./style";

const Hero = memo(() => {
  return (
      <div class={style.main}>
        {data.map((element) => (
          <Card key={element.id} element={element} />
        ))}
      </div>
  );
});

export default Hero;
