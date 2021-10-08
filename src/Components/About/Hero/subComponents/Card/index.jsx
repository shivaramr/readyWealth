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
    <div className={style.card} style={style.cardStyle}>
      <img src={image} className={style.img} alt={designation} />
      <div className={style.cardBody}>
        <h5 className={style.cardHead}>{name}</h5>
        <h6 className={style.cardSubHead}>{designation}</h6>
        <p className={style.cardDesc}>{desc}</p>
        <div className={style.socialLinks}>
          {/* <a href={fb} target="_blank" rel="noopener noreferrer"> */}
          <a href={fb}>
            <FaFacebookSquare size={35} style={style.icons} />
          </a>
          {/* <a href={twitter} target="_blank" rel="noopener noreferrer"> */}
          <a href={twitter}>
            <FaTwitterSquare size={35} style={style.icons} />
          </a>
          {/* <a href={linkedIn} target="_blank" rel="noopener noreferrer"> */}
          <a href={linkedIn}>
            <FaLinkedin size={35} style={style.icons} />
          </a>
        </div>
      </div>
    </div>
  );
});

export default Card;
