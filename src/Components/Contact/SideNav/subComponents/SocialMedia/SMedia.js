import React, { memo } from "react";
import { Container } from "react-bootstrap";
import { data } from "./data";
import { style } from "./mediaStyle";

const SMedia = memo(() => {
  return (
    <Container>
      <h3>Social Media</h3>
      <hr />
      <div class={style.iconParent}>
        {data.map((element) => (
          <a href={element.link} target="_blank" rel="noopener noreferrer">
            <element.title size={50} style={style.icons} />
          </a>
        ))}
      </div>
    </Container>
  );
});

export default SMedia;
