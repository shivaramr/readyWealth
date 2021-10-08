import React, { memo } from "react";
import { Container } from "react-bootstrap";
import { data } from "./data";
import { style } from "./mediaStyle";

const SMedia = memo(() => {
  return (
    <Container>
      <h3>Social Media</h3>
      <hr />
      <div className={style.iconParent}>
        {data.map((ele) => (
          <a key={ele.id} href={ele.link} target="_blank" rel="noopener noreferrer">
            <ele.title size={50} style={style.icons} />
          </a>
        ))}
      </div>
    </Container>
  );
});

export default SMedia;
