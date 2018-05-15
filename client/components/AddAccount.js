import PropTypes from "prop-types";
import React, { Component } from "react";
import Plaid from "./Plaid";
import MobileContainer from "./BeforeLogin/MobileContainer";
import DesktopContainer from "./BeforeLogin/DesktopContainer";
import Footer from "./Footer";
import { Container, Grid, Message, Icon } from "semantic-ui-react";

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

class AddAccount extends Component {
  render() {
    return (
      <ResponsiveContainer>
        <Container>
          <Grid centered columns={2}>
            <Grid.Column>
              <Message icon>
                <Icon name="circle notched" loading />
                <Message.Content>
                  <Message.Header>Just one second</Message.Header>
                  We just need little more content for you.
                  <Plaid />
                </Message.Content>
              </Message>
              <Message>
                <Message.Header>WARNING!!!!!</Message.Header>
                <p>
                  Disclaimer: This website is built for a web application school
                  project. The data and relevent data visualization are not
                  accurate. You should not act on the basis of anything
                  contained on this website. If you choose to use our website
                  and rely on it, it is wholelly at your own risk.
                </p>
              </Message>
            </Grid.Column>
          </Grid>
        </Container>
      </ResponsiveContainer>
    );
  }
}

export default AddAccount;
