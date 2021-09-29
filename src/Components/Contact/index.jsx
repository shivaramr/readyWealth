import React, { memo } from "react";
import Form from "./Form/Form";
import HeadImg from "./Head/HeadImg";
import Side from "./SideNav/Side";
import { style } from "./style";

const Contact = memo(() => {
  return (
    <>
      <HeadImg title={'CONTACT US'}/>
      <div class={style.main}>
        <Side />
        <Form />
      </div>
    </>
  );
});

export default Contact;
