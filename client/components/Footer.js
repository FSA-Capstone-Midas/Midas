import React, { Component } from "react";
import {
  List,
  Segment,
  Container,
  Grid,
  Header,
  Image
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <Segment
      inverted
      vertical
      style={{
        padding: "5em 0em",
        left: "0",
        bottom: "0",
        width: "100%",
        textAlign: "center",
        position: "relative"
      }}
    >
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as={NavLink} to="/aboutus">
                  Contact Us
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Services" />
              <List link inverted>
                <List.Item>How To Access</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Midas
              </Header>
              <p>
                Disclaimer: This website is built for a web application school
                project. It is not intended for commercial use. You should not
                act on the basis of anything contained on this website. Any
                reliance you place on such material is strictly at your own
                risk. In addition, we are not responsible for any personal
                information compromise or loss resulting from the use of this
                website. If you choose to use our website and rely on it, it is
                wholelly at your own risk.
              </p>
            </Grid.Column>
            <Grid.Column width={3}>
              <Image src="../../pictures/image.png" size="small" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
}
