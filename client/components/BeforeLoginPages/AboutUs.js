import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Button,
  Grid,
  Header,
  Segment,
  Card,
  Icon,
  Image,
} from "semantic-ui-react";
import MobileContainer from "../BeforeLogin/MobileContainer";
import DesktopContainer from "../BeforeLogin/DesktopContainer";
import AfterDesktopContainer from "../AfterLogin/AfterLoginDesktopContainer";
import AfterMobileContainer from "../AfterLogin/AfterLoginMobileContainer";
import Footer from "../Footer";

const ResponsiveContainer = ({ children, logined }) => {
  return (
    <div>
      {!logined ? (
        <div>
          <DesktopContainer>{children}</DesktopContainer>
          <MobileContainer>{children}</MobileContainer>
        </div>
      ) : (
        <div>
          <AfterDesktopContainer>{children}</AfterDesktopContainer>
          <AfterMobileContainer>{children}</AfterMobileContainer>
        </div>
      )}
    </div>
  );
};

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

const AboutUs = props => {
  return (
    <ResponsiveContainer logined={props.isLoggedIn}>
      <Segment id="headerBackground" style={{ padding: "2em" }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "2em", paddingTop: "2em" }}>
              <h1>About Us</h1>
              <h3>
                <b>MIDAS</b> - We make managing your money easy.
              </h3>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment
        style={{ padding: "2em 0em", fontSize: "12px", textAlign: "center" }}
        vertical
        id="mainContent"
      >
        <Grid container stackable verticalAlign="middle" columns={4}>
          <Grid.Row>
            <Grid.Column>
              <Card centered>
                <Image src="pictures/JJ.png" />
                <Card.Content>
                  <Card.Header>JingJing Li</Card.Header>
                  <Card.Meta>Joined in 2018</Card.Meta>
                  <Card.Description>Software Developer</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/jingjing-li-757b0711/"
                  >
                    <Icon name="user" />
                    2000 Connections
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column>
              <Card centered>
                <Image src="../../../../../../pictures/Joshua.png" />
                <Card.Content>
                  <Card.Header>Joshua Park</Card.Header>
                  <Card.Meta>Joined in 2018</Card.Meta>
                  <Card.Description>Software Developer</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/joshua-park-7044a7153/"
                  >
                    <Icon name="user" />
                    2000 Connections
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column>
              <Card centered>
                <Image src="../../../../../../pictures/Philip.png" />
                <Card.Content>
                  <Card.Header>Philip Leung</Card.Header>
                  <Card.Meta>Joined in 2018</Card.Meta>
                  <Card.Description>Software Developer</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/philipleung90/"
                  >
                    <Icon name="user" />
                    2000 Connections
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column>
              <Card centered>
                <Image src="../../../../../../pictures/Casey.png" />
                <Card.Content>
                  <Card.Header>Casey Chan</Card.Header>
                  <Card.Meta>Joined in 2018</Card.Meta>
                  <Card.Description>Software Developer</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/whchan703/"
                  >
                    <Icon name="user" />
                    2000 Connections
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: "0em" }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Sign Up for Midas
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                <b>MIDAS</b> Sign up and sync a bank account easily. Manage your
                money like never before
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button size="huge">Check Them Out</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Footer />
    </ResponsiveContainer>
  );
};

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
  };
};

export default withRouter(connect(mapState)(AboutUs));
