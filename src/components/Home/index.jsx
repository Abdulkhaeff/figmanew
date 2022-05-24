import React from "react";
import { Box, Button, Card, Container, Img, Left, Logo, Right, Title, Titles } from "./styled";
import app from '../../assets/image/app.jpg'
import google from '../../assets/image/google.jpg'
const Home = () => {
  return (
    <Container>
      <Left>
        <Card>
          <Title>Make learning fun! </Title>
          <Title.First>
            Any subject, in any language, on any device, for all ages!
          </Title.First>
          <Button bg width={255} height={56}>
            Sign up for free
          </Button>
        </Card>
        <Titles>Or download the app:</Titles>
        <Box>
            <Img src={app}/>
            <Img src={google}/>
        </Box>
      </Left>
      <Right>
        <Logo />
      </Right>
    </Container>
  );
};

export default Home;


