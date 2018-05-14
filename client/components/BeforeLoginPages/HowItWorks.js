import PropTypes from "prop-types";
import React from "react";
import { Grid, Header, Image, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DesktopContainer from "../BeforeLogin/DesktopContainer";
import MobileContainer from "../BeforeLogin/MobileContainer";
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

const HowItWorks = props => {
  return (
    <ResponsiveContainer logined={props.isLoggedIn}>
      <Segment id="howItWorksBackground" style={{ padding: "1.5em" }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "0.5em", paddingTop: "2em" }}>
              <img
                style={{ width: "60%" }}
                className="carousel-image"
                src="../../../../../../pictures/feature_track_headline.gif"
              />
              <h1>It's New York's first. It's your first.</h1>
              <p style={{ fontSize: "1.33em" }}>
                As New York’s first Personal financial management app,
                <br />
                MIDAS currently integrates with all major banks in the U.S.
                <br />
                Become a finance guru in just minutes with the up-to-date data
                analytics and tracking.
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
                Integrated
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                One app that rules them all. No more multiple sign-ins for
                different banks. You can now view all online bank statements
                with one tap on Midas.
              </p>
              <p style={{ fontSize: "1.33em" }}>
                It’s hard to keep track of all these credit card payments and
                direct transfer for subscriptions and bills…
              </p>
              <p style={{ fontSize: "1.33em" }}>
                There’s nothing worse than getting excited about the arrival of
                pay day, and finding out from your multiple mobile banking apps
                that nothing much is left.
              </p>
              <p style={{ fontSize: "1.33em" }}>
                With Midas you don’t have to worry. We got your back. You’ll
                never miss a payment again.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image
                size="medium"
                src="../../../../../../pictures/wallet.gif"
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
                size="medium"
                src="../../../../../../pictures/feature_link_solution.gif"
              />
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as="h1" style={{ fontSize: "2em" }}>
                The Big Picture
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Mobile payment makes spending easy. Maybe too easy…
              </p>
              <p style={{ fontSize: "1.33em" }}>
                We’ve got used to Fintech integrating into nearly every part of
                our daily lives: online shopping, Apple Pay, ChasePay or PayPal,
                paying utility bills, investment and plenty more.
              </p>
              <p style={{ fontSize: "1.33em" }}>
                But all these different products, it becomes easy to lose track.
              </p>
              <p style={{ fontSize: "1.33em" }}>
                When it comes to personal finance, you want to see both the big
                picture, including your bank balance, and minute details, such
                as every credit card transaction and credit limit.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: "2em 2em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "1em", paddingTop: "1em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Supported Banks
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Sign up and sync a bank account easily. Manage your money like
                never before
              </p>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3}>
              <div className="ui small circular rotate left reveal image">
                <img
                  src="../../../../../../pictures/icon-bank.png"
                  className="visible content"
                />
                <img
                  src="../../../../../../pictures/citibank.jpg"
                  className="hidden content"
                />
              </div>
            </Grid.Column>
            <Grid.Column width={3}>
              <div className="ui small circular rotate left reveal image">
                <img
                  src="../../../../../../pictures/icon-bank.png"
                  className="visible content"
                />
                <img
                  src="../../../../../../pictures/Wells_Fargo_Bank.png"
                  className="hidden content"
                />
              </div>
            </Grid.Column>
            <Grid.Column width={3}>
              <div className="ui small circular rotate left reveal image">
                <img
                  src="../../../../../../pictures/icon-bank.png"
                  className="visible content"
                />
                <img
                  src="../../../../../../pictures/Chase.png"
                  className="hidden content"
                />
              </div>
            </Grid.Column>
            <Grid.Column width={3}>
              <div className="ui small circular rotate left reveal image">
                <img
                  src="../../../../../../pictures/icon-bank.png"
                  className="visible content"
                />
                <img
                  src="../../../../../../pictures/TD.jpg"
                  className="hidden content"
                />
              </div>
            </Grid.Column>
            <Grid.Column width={3}>
              <div className="ui small circular rotate left reveal image">
                <img
                  src="../../../../../../pictures/icon-bank.png"
                  className="visible content"
                />
                <img
                  src="../../../../../../pictures/CS.png"
                  className="hidden content"
                />
              </div>
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

export default withRouter(connect(mapState)(HowItWorks));
