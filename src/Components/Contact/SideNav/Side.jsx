import React from "react";
import Card from "./subComponents/Card/Card";
import { data } from "./subComponents/Card/contactData";
import SMedia from "./subComponents/SocialMedia/SMedia";
import { style } from "./style";

function Side() {
  return (
    <div class={style.main}>
      {data.map(({ id, title, logo, details }) => (
        <Card key={id} title={title} logo={logo} details={details} />
      ))}
      <SMedia />
    </div>
  );
}

export default Side;
