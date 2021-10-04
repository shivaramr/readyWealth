import React, { memo } from "react";
import Form from "./Form/Form";
import HeadImg from "../Common/Head/HeadImg";
import Side from "./SideNav/Side";
import { style } from "./style";

const Contact = memo(() => {
  const abtImg = `https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ`;
  return (
    <>
      <HeadImg 
      imgLink={abtImg}
      title={'CONTACT US'}/>
      <div class={style.main}>
        <Side />
        <Form />
      </div>
    </>
  );
});

export default Contact;
