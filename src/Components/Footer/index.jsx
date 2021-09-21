import React, { memo } from "react";
import Foot from "./subComponents/Foot";
import { style } from "./style";

const Footer = memo(function Footer(props) {
  return (
    <nav class={style.nav}>
      <div class={style.wrapDiv}>
        <Foot />
      </div>
    </nav>
  );
});

export default Footer;
