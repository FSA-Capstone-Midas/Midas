import PropTypes from "prop-types";
import React, { Component } from "react";
import Carousel from "nuka-carousel";
import Footer from "./Footer";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";

const HomepageHeading = ({ mobile }) => (
  <div text>
    <section id="carousel">
      <Header
        className="carousel-text"
        as="h1"
        content="Imagine-a-Company"
        inverted
        style={{
          fontSize: mobile ? "2em" : "4em",
          fontWeight: "normal",
          marginBottom: 0,
          marginTop: mobile ? "1.5em" : "3em",
        }}
      />

      <Carousel>
        <img
          className="carousel-image"
          src="../../../../../../pictures/gold.jpg"
        />
        <img
          className="carousel-image"
          src="../../../../../../pictures/waterplants.jpg"
        />
      </Carousel>
      <Header
        className="carousel-text"
        as="h2"
        content="Do whatever you want when you want to."
        inverted
        style={{
          fontSize: mobile ? "1.8em" : "2.0em",
          fontWeight: "normal",
          marginTop: mobile ? "0.5em" : "1.5em",
        }}
      />
    </section>
    <Button primary size="huge">
      Get Started
      <Icon name="right arrow" />
    </Button>
  </div>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

export default withRouter(HomepageHeading);
