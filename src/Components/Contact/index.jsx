import React, { memo } from "react";
import Form from "./Form/Form";
import Side from "./SideNav/Side";
import { style } from "./style";

const Contact = memo(()=> {
  return (
      <div class={style.main}>
        <Side />
        <Form />
      </div>
  );
});

export default Contact;
