import React from "react";
import HeadImg from "../../Common/Head/HeadImg";
import Body from "../Body";

function Main() {
  const serviceImg = `https://i.picsum.photos/id/1059/7360/4912.jpg?hmac=vVWk1qyiXN_VgPhpNqFm3yl2HUPW6fHqYOjTHYO2bHQ`;
  return (
    <div>
      <HeadImg imgLink={serviceImg} title={"SERVICES"} />
      <Body />
    </div>
  );
}

export default Main;
