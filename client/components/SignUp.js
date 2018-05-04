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
  Visibility
} from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";
import MobileContainer from "./MobileContainer";
import DesktopContainer from "./DesktopContainer";

/* eslint-disable react/no-multi-comp */

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
// class DesktopContainer extends Component {
//   state = {};

//   hideFixedMenu = () => this.setState({ fixed: false });
//   showFixedMenu = () => this.setState({ fixed: true });

//   render() {
//     const { children } = this.props;
//     const { fixed } = this.state;

//     return (
//       <Responsive {...Responsive.onlyComputer}>
//         <Visibility
//           once={false}
//           onBottomPassed={this.showFixedMenu}
//           onBottomPassedReverse={this.hideFixedMenu}
//         >
//           <Segment
//             inverted
//             textAlign="center"
//             style={{ minHeight: 100, padding: "1em 0em" }}
//             vertical
//           >
//             <Menu
//               fixed={fixed ? "top" : null}
//               inverted={!fixed}
//               pointing={!fixed}
//               secondary={!fixed}
//               size="large"
//             >
//               <Container>
//                 <Menu.Item exact as={NavLink} to="/">
//                   Home
//                 </Menu.Item>
//                 <Menu.Item exact as={NavLink} to="/howitworks">
//                   How It Works
//                 </Menu.Item>
//                 <Menu.Item as="a">Security</Menu.Item>
//                 <Menu.Item as="a">Blog</Menu.Item>
//                 <Menu.Item as="a">Support</Menu.Item>
//                 <Menu.Item as={NavLink} to="/aboutus">
//                   About Us
//                 </Menu.Item>
//                 <Menu.Item position="right">
//                   <Button as="a" inverted={!fixed}>
//                     Log in
//                   </Button>
//                 </Menu.Item>
//               </Container>
//             </Menu>
//           </Segment>
//         </Visibility>

//         {children}
//       </Responsive>
//     );
//   }
// }

// DesktopContainer.propTypes = {
//   children: PropTypes.node
// };

// class MobileContainer extends Component {
//   state = {};

//   handlePusherClick = () => {
//     const { sidebarOpened } = this.state;

//     if (sidebarOpened) this.setState({ sidebarOpened: false });
//   };

//   handleToggle = () =>
//     this.setState({ sidebarOpened: !this.state.sidebarOpened });

//   render() {
//     const { children } = this.props;
//     const { sidebarOpened } = this.state;

//     return (
//       <Responsive {...Responsive.onlyMobile}>
//         <Sidebar.Pushable>
//           <Sidebar
//             as={Menu}
//             animation="uncover"
//             inverted
//             vertical
//             visible={sidebarOpened}
//           >
//             <Menu.Item as="a" active>
//               Home
//             </Menu.Item>
//             <Menu.Item as="a">How It Works</Menu.Item>
//             <Menu.Item as="a">Security</Menu.Item>
//             <Menu.Item as="a">Blog</Menu.Item>
//             <Menu.Item as="a">Support</Menu.Item>
//             <Menu.Item as="a">Log in</Menu.Item>
//           </Sidebar>

//           <Sidebar.Pusher
//             dimmed={sidebarOpened}
//             onClick={this.handlePusherClick}
//             style={{ minHeight: "100vh" }}
//           >
//             <Segment
//               inverted
//               textAlign="center"
//               style={{ minHeight: 350, padding: "1em 0em" }}
//               vertical
//             >
//               <Container>
//                 <Menu inverted pointing secondary size="large">
//                   <Menu.Item onClick={this.handleToggle}>
//                     <Icon name="sidebar" />
//                   </Menu.Item>
//                   <Menu.Item position="right">
//                     <Button as="a" inverted>
//                       Log in
//                     </Button>
//                     <Button
//                       as={NavLink}
//                       to="/signup"
//                       inverted
//                       style={{ marginLeft: "0.5em" }}
//                     >
//                       Sign Up
//                     </Button>
//                   </Menu.Item>
//                 </Menu>
//               </Container>
//             </Segment>

//             {children}
//           </Sidebar.Pusher>
//         </Sidebar.Pushable>
//       </Responsive>
//     );
//   }
// }

// MobileContainer.propTypes = {
//   children: PropTypes.node
// };

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

class SignUp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const startYear = 1948;
    const endYear = 2000;
    const startDay = 1;
    const endDay = 31;
    let arrayYear = [];
    let arrayDay = [];
    for (var i = startYear; i <= endYear; i++) {
      arrayYear.push(i);
    }
    for (var j = startDay; j <= endDay; j++) {
      arrayDay.push(j);
    }
    return (
      <ResponsiveContainer>
        <Segment id="aboutUsBackground" style={{ padding: "3em" }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column
                style={{ paddingBottom: "0.5em", paddingTop: "0.5em" }}
              >
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Sign Up Now
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  {/* <Image avatar src="/assets/images/avatar/large/nan.jpg" /> */}
                  <b>MIDAS</b> OUR APP MAKES MANAGING YOUR MONEY EASY.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: "2em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column>
                <div id="signup-login">
                  <form className="ui form">
                    <div className="field">
                      <label>First Name</label>
                      <input placeholder="First Name" />
                    </div>
                    <div className="field">
                      <label>Last Name</label>
                      <input placeholder="Last Name" />
                    </div>
                    <div className="field">
                      <label>Email</label>
                      <input placeholder="Email" />
                    </div>
                    <div className="field">
                      <label>Password</label>
                      <input placeholder="Password" />
                    </div>
                    <div className="field">
                      <label>What should we call you?</label>
                      <input placeholder="What should we call you?" />
                    </div>

                    <label>
                      Date of Birth
                      <div id="dob">
                        <select name="month" default="month" id="monthddl">
                          <option value="1">January</option>
                          <option value="2">Febuary</option>
                          <option value="3">March</option>
                          <option value="4">April</option>
                          <option value="5">May</option>
                          <option value="6">June</option>
                          <option value="7">July</option>
                          <option value="8">August</option>
                          <option value="9">September</option>
                          <option value="10">October</option>
                          <option value="11">November</option>
                          <option value="12">December</option>
                        </select>
                        <select name="day" id="dayddl">
                          {arrayDay.map(elem => (
                            <option key={`${elem}`} value={`${elem}`}>
                              {elem}
                            </option>
                          ))}
                        </select>

                        <select name="Year" id="Year">
                          {arrayYear.map(item => (
                            <option key={`${item}`} value={`${item}`}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>
                    </label>
                    <br />
                    <div className="field">
                      <div className="ui checkbox">
                        <input type="checkbox" className="hidden" />
                        <label>I agree to the Terms and Conditions</label>
                      </div>
                    </div>
                    <br />
                    <button
                      type="submit"
                      className="ui orange inverted button"
                      role="button"
                    >
                      Submit
                    </button>
                    <br />
                  </form>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Footer />
      </ResponsiveContainer>
    );
  }
}
export default withRouter(SignUp);
