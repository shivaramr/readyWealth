import React, { memo } from "react";
import { Parallax } from "react-parallax";

const HeadImg = memo((props) => {
  const { imgLink, title } = props;
  const image3 = `https://i.picsum.photos/id/534/4000/3000.jpg?hmac=lZH_v84ot8WWUIgqwrJvFKqtockRBoqVnStUqqaJFug`;

  const inlineStyle = {
    color: "#fff",
    fontWeight: "bold",
    left: "50%",
    top: "50%",
    position: "absolute",
    padding: "20px",
    transform: "translate(-50%, -50%)",
  };
  
  return (
    <div class="text-center mb-5">
      <Parallax bgImage={imgLink || image3} strength={-200}>
        <div style={{ height: 500 }}>
          <h1 style={inlineStyle}>{title}</h1>
        </div>
      </Parallax>
    </div>
  );
});

export default HeadImg;
