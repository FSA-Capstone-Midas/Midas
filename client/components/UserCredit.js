import PropTypes from "prop-types";
import React from "react";
import Footer from "./Footer";
import { Segment, Container, Grid, Image, Progress } from "semantic-ui-react";
import DesktopContainer from "./AfterLogin/AfterLoginDesktopContainer";
import MobileContainer from "./AfterLogin/AfterLoginMobileContainer";

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const UserCredit = () => (
  <ResponsiveContainer>
    <Segment id="headerBackground" style={{ padding: "0.7em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "0.7em", paddingTop: "0.7em" }}>
            <h3>Credit Score</h3>
            <h4>Take control of your finance today.</h4>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Container>
      <Segment
        style={{ padding: "2em 0em", fontSize: "28px", textAlign: "center" }}
      >
        <div
          className="ui segment"
          style={{ marginLeft: "15%", marginRight: "15%" }}
        >
          <div
            className="ui statistic"
            style={{
              width: "-webkit-fill-available",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            <h2
              className="ui header"
              style={{
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              The average Midaser's credit score is
            </h2>
            <div className="ui red statistic">
              <div className="value">800</div>
            </div>
            <Progress percent={85} inverted color="blue" progress />
            <h4>
              Get your absolutely free credit score to see how you stack up.
            </h4>
            <h4>
              Discover what impacks your score and put yourself in a better
              position for a new loan, a new credit card-or even a new job.
            </h4>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://credit.com/"
              style={{
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              <h4> Feel free to sign up to check your Credit score!</h4>
            </a>
          </div>
        </div>
        <div />
      </Segment>
    </Container>

    <Footer />
  </ResponsiveContainer>
);

export default UserCredit;
