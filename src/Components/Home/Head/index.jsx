import React, { memo } from "react";
import CarouselFile from "../../Common/Carousel/CarouselFile";
import { carouselData, data } from "./data";
import { style } from "./style";

const Head = memo(() => {
  return (
    <div className={style.main}>
      <div className={style.row}>
        <div className={style.col1}>
          <span className={style.tag}>{data.tag}</span>
          <h1>{data.title}</h1>
          <p>{data.desc}</p>
          <button type="button" className={style.btn}>
            <a href='/services' className={style.btnA}>
              {data.btn}
            </a>
          </button>
        </div>
        <div className={style.col2}>
          <CarouselFile 
          data={carouselData}
          />
        </div>
      </div>
    </div>
  );
});

export default Head;
