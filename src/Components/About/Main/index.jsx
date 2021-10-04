import React from "react";
import HeadImg from "../../Common/Head/HeadImg";
import Body from "../Common/Body/Body";
import Head from "../Common/Head/Head";
import { data } from "../Common/Head/headData";
import Hero from "../Hero";
import { style } from './style';

function Main() {
  
  return (
    <>
    <HeadImg 
      title={'ABOUT US'}
      />
    <div class={style.main}>
      {/* <h1 class={style.head}>About Us</h1> */}    
      <Head data={data} />
      <Hero />
      <Body />
    </div>
    </>
  );
}

export default Main;
