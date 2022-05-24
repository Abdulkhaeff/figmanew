import React from "react";
import { Arrow, Body, Button, Container, Icon, Left, Right, Setting, Title } from "./styled";

const Navbar = () => {
  return (
    <Container>
      <Body>
        <Left>
          <Icon />
          Kurtis Classrom
        </Left>
        <Right>
            <Title>
                EN
                <Arrow/>
            </Title>
            <Button bg width={110}  height={44}>Sign Up</Button>
            <Button width={110}  height={44}>Log In</Button>
            <Setting/>
        </Right>
      </Body>
    </Container>
  );
};

export default Navbar;