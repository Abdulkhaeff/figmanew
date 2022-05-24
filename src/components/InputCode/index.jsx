import React from "react";
import { Arrow, Container, Input, Logo, Title } from "./styled";

const InputStyle = () => {
  return (
    <Container>
      <Title><Logo/> Kurtin Classrom</Title>
      <Input>
        <Input.Input placeholder="Write the code here" />
        <Arrow />
      </Input>
      <Title.Title>Or try with 1234</Title.Title>
    </Container>
  );
};

export default InputStyle;
