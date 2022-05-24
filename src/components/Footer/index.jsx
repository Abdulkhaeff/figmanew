import React from "react";
import { Box, Button, Card, Container, Icon1, Icon2, Icon3, Icon4, Title } from "./styled";

const Footer = () => {
  return (
    <Box>
      <Title>Who is Kurtis for?</Title>
      <Container>
        <Card>
          <Icon1 />
          <Title.First>At School</Title.First>
          <Title.Second>
            Engaging group and distance learning for teachers and students.
          </Title.Second>
          <Title.Third>Learn more</Title.Third>
        </Card>
        <Card>
          <Icon2 />
          <Title.First>At Work</Title.First>
          <Title.Second>
            Engaging group and distance learning for teachers and students.
          </Title.Second>
          <Title.Third>Learn more</Title.Third>
        </Card>
        <Card>
          <Icon3 />
          <Title.First>At Home</Title.First>
          <Title.Second>
            Engaging group and distance learning for teachers and students.
          </Title.Second>
          <Title.Third>Learn more</Title.Third>
        </Card>
        <Card>
          <Icon4 />
          <Title.First>Learning Apps</Title.First>
          <Title.Second>
            Engaging group and distance learning for teachers and students.
          </Title.Second>
          <Title.Third>Learn more</Title.Third>
        </Card>
      </Container>
      <Button bg width={159} height={53}> Sign Up Now</Button>
    </Box>
  );
};

export default Footer;