import React, { memo } from "react";
import CarouselFile from "../../Common/Carousel/CarouselFile";
import { carouselData, data } from "./data";
import { style } from "./style";

const Head = memo(() => {
  return (
    <div class={style.main}>
      <div class={style.row}>
        <div class={style.col1}>
          <span class={style.tag}>{data.tag}</span>
          <h1>{data.title}</h1>
          <p>{data.desc}</p>
          <button type="button" class={style.btn}>
            <a href='/services' class={style.btnA}>
              {data.btn}
            </a>
          </button>
        </div>
        <div class={style.col2}>
          <CarouselFile 
          data={carouselData}
          />
        </div>
      </div>
    </div>
  );
});

export default Head;
