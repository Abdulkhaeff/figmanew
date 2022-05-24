import React from "react";
import {
  Box,
  BoxTitle,
  Container,
  FirstIcon,
  Left,
  Right,
  SecondIcon,
  ThirdIcon,
  Title,
} from "./styled";

const About = () => {
  return (
    <Container>
      <Title>
        Still more?
        <Title.T> Take a look to our features games</Title.T>
      </Title>
      <Title.Title>How does Kurtis work?</Title.Title>
      <Box>
        <Left>
          <FirstIcon />
        </Left>
        <Right>
          <BoxTitle>Create</BoxTitle>
          <BoxTitle.Title>
            It only takes minutes to create a learning game or trivia quiz on
            any topic, in any language.
          </BoxTitle.Title>
        </Right>
      </Box>
      <Box>
        <Left>
        <BoxTitle>Host or share</BoxTitle>
          <BoxTitle.Title>
            Host a live game with questions on a big screen or share a game with
            remote players.
          </BoxTitle.Title>
        </Left>
        <Right>
        <SecondIcon />
          
        </Right>
      </Box>

      <Box>
        <Left>
          <ThirdIcon />
        </Left>
        <Right>
          <BoxTitle>Play</BoxTitle>
          <BoxTitle.Title>
            Game on! Join a kahoot with a PIN provided by the host and answer
            questions on your device.
          </BoxTitle.Title>
        </Right>
      </Box>
    </Container>
  );
};

export default About;
