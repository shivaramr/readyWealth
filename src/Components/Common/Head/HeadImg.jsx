import React, { memo } from "react";
import { Parallax } from "react-parallax";
import { style } from './style';

const HeadImg = memo((props) => {
  const { imgLink, title } = props;
  
  return (
    <div className={style.main}>
      <Parallax bgImage={imgLink || style.img} strength={-200}>
        <div style={style.picHght}>
          <h1 style={style.inlineStyle}>{title}</h1>
        </div>
      </Parallax>
    </div>
  );
});

export default HeadImg;
