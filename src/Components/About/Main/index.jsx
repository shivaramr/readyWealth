import React from "react";
import { Container } from "react-bootstrap";
import Body from "../Common/Body/Body";
import Head from "../Common/Head/Head";
import { data } from "../Common/Head/headData";
import Hero from "../Hero";

function Main() {
  return (
    <Container>
      <h1>About Us</h1>
      <Hero />
      <Head data={data} />
      <Body />
    </Container>
  );
}

export default Main;
