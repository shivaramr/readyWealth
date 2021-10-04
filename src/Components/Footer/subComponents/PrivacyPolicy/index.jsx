import React from "react";
import { data } from "./data";
import { style } from "./style";

function PrivacyPolicy() {
  return (
    <div class={style.mainDiv}>
      <h1>{data.title}</h1>
      <p>{data.main}</p>

      <h3>{data.subH1}</h3>
      <p>{data.subP1}</p>
      <ul>
        {data.subPoints1.map((element, id) => (
          <li key={id}>{element}</li>
        ))}
      </ul>

      <h3>{data.subH2}</h3>
      <ul>
        {data.subPoints2.map((element, id) => (
          <li key={id}>{element}</li>
        ))}
      </ul>

      <h3>{data.subH3}</h3>
      <p>{data.subP3}</p>

      <h3>{data.subH4}</h3>
      <p>{data.subP4}</p>

      <h3>{data.subH5}</h3>
      <p>{data.subP5}</p>

      <h3>{data.subH6}</h3>
      <p>{data.subP6}</p>

      <h3>{data.subH7}</h3>
      <ul>
        {data.subPoints7.map((element, id) => (
          <li key={id}>{element}</li>
        ))}
      </ul>
    </div>
  );
}

export default PrivacyPolicy;
