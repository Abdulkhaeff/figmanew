import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import { Container } from "./styled.js";
import Footer from "../components/Footer";
import InputStyle from "../components/InputCode";
import About from "../components/About";
const Root = () => {
  return (
    <Container>
      <Navbar />
      <Home />
      <Footer/>
      <InputStyle/>
      <About/>
    </Container>
  );
};

export default Root;
