import PropTypes from "prop-types";
import React, { Component } from "react";
import Plaid from "./Plaid";
import MobileContainer from "./AddAccountNavBar/AddAccountMobileNavBar";
import DesktopContainer from "./AddAccountNavBar/AddAccountDesktopNavBar";
import Footer from "./Footer";
import {
  Container,
  Grid,
  Message,
  Icon,
  Image,
  Divider
} from "semantic-ui-react";

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
        <Divider section />
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
                  project. It is not intended for commercial use. The data and
                  corresponding data visualization are not accurate. You should
                  not act on the basis of anything contained on this website.
                  Any reliance you place on such material is strictly at your
                  own risk. In addition, we are not responsible for any personal
                  information compromise or loss resulting from the use of this
                  website. If you choose to use our website and rely on it, it
                  is wholelly at your own risk.
                </p>
              </Message>
              <Grid>
                <Grid.Column width={3}>
                  <Image src="../../pictures/image.png" size="small" />
                </Grid.Column>
                <Grid.Column width={3}>
                  <Image src="../../pictures/image.png" size="small" />
                </Grid.Column>
                <Grid.Column width={3}>
                  <Image src="../../pictures/image.png" size="small" />
                </Grid.Column>
                <Grid.Column width={3}>
                  <Image src="../../pictures/image.png" size="small" />
                </Grid.Column>
                <Grid.Column width={3}>
                  <Image src="../../pictures/image.png" size="small" />
                </Grid.Column>
              </Grid>
            </Grid.Column>
          </Grid>
        </Container>
        <Divider section />

        <Footer />
      </ResponsiveContainer>
    );
  }
}

export default AddAccount;
