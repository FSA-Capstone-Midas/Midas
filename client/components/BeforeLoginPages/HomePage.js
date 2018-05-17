import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Segment
} from "semantic-ui-react";
import { withRouter, Link } from "react-router-dom";
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
  children: PropTypes.node
};

const HomePage = props => {
  return (
    <ResponsiveContainer logined={props.isLoggedIn}>
      <Segment id="howItWorksBackground" style={{ padding: "1.5em" }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "0.5em", paddingTop: "2em" }}>
              {/* <Typist>Seriously amazing.</Typist> */}
              <img
                style={{ width: "60%" }}
                className="carousel-image"
                src="../../../../../../pictures/feature_link_headline.gif"
              />
              <h1>Time is money. Save both.</h1>
              <p style={{ fontSize: "1.33em" }}>
                As New York’s first Personal financial management app,
                <br />
                Introducing New York’s first personal finance app powered by
                bank-level security.
                <br />
                Midas is a simple, safe, smart way to save - mobile banking has
                never been so rewarding.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment id="homeBackground" style={{ padding: "12.5em" }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "0.5em", paddingTop: "2em" }}>
              <h1 />
              <p style={{ fontSize: "1.33em" }}>
                <br />
                <br />
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: "2em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h1" style={{ fontSize: "2em" }}>
                Your money, sorted.
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Lost track of your spending again? Simply connect your banks
                with our best personal finance tracker. Your accounts
                automatically update every time you sign in to show you current
                (and categorised!) transactions. Wealth building begins with
                healthy financial habits.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image
                bordered
                rounded
                size="large"
                src="../../../../../../pictures/all-in-one.jpg"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: "2em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column floated="left" width={6}>
              <Image
                bordered
                rounded
                size="large"
                src="../../../../../../pictures/insurance coverage.jpg"
              />
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as="h1" style={{ fontSize: "2em" }}>
                Know your money better.
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Get a great grasp of your finances with our unique monthly
                overviews and easy-to-read graphs. You can also monitor your
                spending across all of your accounts and spending categories.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: "0em" }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h1" style={{ fontSize: "2em" }}>
                Sign Up for Midas
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                <b>Midas</b> Sign up and sync a bank account easily. Manage your
                money like never before
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button size="huge" as={Link} to="/signup">
                Check Them Out
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Container text>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Try Our Demo Account
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Login to our demo account to test it out!
          </p>
          <Button size="huge" as={Link} to="/demo">
            Try It Now
          </Button>
          <Divider
            as="h4"
            className="header"
            horizontal
            style={{ margin: "3em 0em", textTransform: "uppercase" }}
          >
            <a href="#">Case Studies</a>
          </Divider>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Want to test it out with your bank?
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Do you want to sign up an account and vistualize your financial
            statement and spending activity?
          </p>
          <Button size="huge" as={Link} to="/signup">
            I'm Interested
          </Button>
        </Container>
      </Segment>
      <Footer />
    </ResponsiveContainer>
  );
};

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  };
};

export default withRouter(connect(mapState)(HomePage));
