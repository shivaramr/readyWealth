import React from "react";
import { data } from "./data";
import { style } from "./style";

function TermsAndConditions() {
  return (
    <div className={style.mainDiv}>
      <h1>{data.title}</h1>
      <p>{data.desc}</p>
      <h3>{data.subH1}</h3>
      {data.subP1.map((element, id) => (
        <p key={id}>{element}</p>
      ))}
    </div>
  );
}

export default TermsAndConditions;
