import React from "react";
import { data } from "./data";
import { style } from "./style";

function Foot() {
  return (
    <div>
      <p class={style.txt}>{data.desc}</p>
      <div class={style.linkDiv}>
        <a class={style.navLink} href="/tc">
          {data.tc}
        </a>
        <a class={style.navLink} href="/pp">
          {data.pp}
        </a>
      </div>
      <p class={style.txt}>{data.copyRight}</p>
    </div>
  );
}

export default Foot;
