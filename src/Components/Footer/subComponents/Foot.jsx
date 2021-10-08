import React from "react";
import { data } from "./data";
import { style } from "./style";

function Foot() {
  return (
    <div>
      <p className={style.txt}>{data.desc}</p>
      <div className={style.linkDiv}>
        <a className={style.navLink} href="/tc">
          {data.tc}
        </a>
        <a className={style.navLink} href="/pp">
          {data.pp}
        </a>
      </div>
      <p className={style.txt}>{data.copyRight}</p>
    </div>
  );
}

export default Foot;
