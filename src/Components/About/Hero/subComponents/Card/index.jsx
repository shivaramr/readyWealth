import React, { memo } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { style } from "./cardStyle";

const Card = memo((props) => {
  const { element } = props || {};
  const { name, image, designation, desc, fb, twitter, linkedIn } =
    element || {};

  return (
    <div class={style.card} style={style.cardStyle}>
      <img src={image} class={style.img} alt={designation} />
      <div class={style.cardBody}>
        <h5 class={style.cardHead}>{name}</h5>
        <h6 class={style.cardSubHead}>{designation}</h6>
        <p class={style.cardDesc}>{desc}</p>
        <div class={style.socialLinks}>
          <a href={fb} target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare size={35} style={style.icons} />
          </a>
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitterSquare size={35} style={style.icons} />
          </a>
          <a href={linkedIn} target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={35} style={style.icons} />
          </a>
        </div>
      </div>
    </div>
  );
});

export default Card;
