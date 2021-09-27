import React from "react";
import Card from "./subComponents/Card/Card";
import { data } from "./subComponents/Card/contactData";
import SMedia from "./subComponents/SocialMedia/SMedia";
import { style } from "./style";

function Side() {
  return (
    <div class={style.main}>
      {data.map((element) => (
        <Card
          key={element.id}
          title={element.title}
          logo={element.logo}
          details={element.details}
        />
      ))}
      <SMedia />
    </div>
  );
}

export default Side;
