import React from "react";
import Body from "../Common/Body/Body";
import Head from "../Common/Head/Head";
import { data } from "../Common/Head/headData";
import Hero from "../Hero";
import { style } from './style';

function Main() {
  return (
    <div class={style.main}>
      <h1 class={style.head}>About Us</h1>
      <Hero />
      <Head data={data} />
      <Body />
    </div>
  );
}

export default Main;
