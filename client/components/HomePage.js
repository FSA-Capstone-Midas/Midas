import PropTypes from "prop-types";
import React, { Component } from "react";
import Carousel from "nuka-carousel";
import { connect } from "react-redux";
import Footer from "./Footer";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Segment
} from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import MobileContainer from "./MobileContainer";
import DesktopContainer from "./DesktopContainer";
import AfterDesktopContainer from "./AfterLogin/AfterLoginDesktopContainer";
import AfterMobileContainer from "./AfterLogin/AfterLoginMobileContainer";

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
              {/* <Header as="h3" style={{ fontSize: "2em" }}>
              About Us
            </Header> */}

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
              {/* <Header as="h3" style={{ fontSize: "2em" }}>
              About Us
            </Header> */}

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
                {/* <Image avatar src="/assets/images/avatar/large/nan.jpg" /> */}
                <b>Midas</b> Sign up and sync a bank account easily. Manage your
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
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Container text>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Breaking The Grid, Grabs Your Attention
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Instead of focusing on content creation and hard work, we have
            learned how to master the art of doing nothing by providing massive
            amounts of whitespace and generic content that can seem massive,
            monolithic and worth your attention.
          </p>
          <Button as="a" size="large">
            Read More
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
            Did We Tell You About Our Bananas?
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Yes I know you probably disregarded the earlier boasts as
            non-sequitur filler content, but it's really true. It took years of
            gene splicing and combinatory DNA research, but our bananas can
            really dance.
          </p>
          <Button as="a" size="large">
            I'm Still Quite Interested
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
