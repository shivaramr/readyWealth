import React from "react";
import Body from "../Common/Body";
import Head from "../Head";
import { data } from "../Common/data";

function index() {
  return (
    <div>
      <Head />
      {data.map(({id, ...ele}) => (
        <Body key={id} {...ele} />
      ))}
    </div>
  );
}

export default index;
