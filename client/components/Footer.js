import React, { Component } from "react";
import { List, Segment, Container, Grid, Header } from "semantic-ui-react";
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
        position: "relative",
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
                Disclaimer: This website is built for a web application school project. The data and relevent data visualization are not accurate. You should not act on the basis of anything contained on this website. If you choose to use our website and rely on it, it is wholelly at your own risk.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
}
