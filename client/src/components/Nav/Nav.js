import React, { Component } from "react";
import { Navbar, NavItem, Button, Modal, Row, Input, Col } from "react-materialize";
import ImportedImage from "../../images/Logo(transparent).PNG";
import "./Nav.css";
import fire from "../../config/Fire";

var Img = <img alt="ime" className="logo" src={ImportedImage} />;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.logout = this.logout.bind(this)
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    });
  };

  // Function definition for 'logging in' via Firebase
  login(event) {
    event.preventDefault();

    console.log(this.state.email)

    fire.auth().signInWithEmailAndPassword(
      this.state.email,
      this.state.password
    )
      .then(user => {
        console.log(user)
        this.setState({
          isLoggedIn: true
        });
      })
      .catch(error => { console.log(error) })
  };

  // Function definition for 'logging out' via Firebase
  logout() {
    fire.auth().signOut()
  }

  render() {
    // LOGIN MODAL VARIABLES
    // PROP IS PASSED FROM APP
    let isLoggedIn = this.props.isLoggedIn;

    // Button is the variable for whether or not they're logged in or logged out
    // loggedInOrNot detects what goes inside the Modal (depending on whether they're logged in or not)
    let button;
    let loggedInOrNot;
    let header;

    // Conditional that renders what goes inside the modal depending on whether they're checked in or not
    if (isLoggedIn === true) {
          button = <Button
                      className="orange"
                   >
                  Sign Out
                  </Button>
          loggedInOrNot = <Col> Have a good day!
                          <Row><Button className="red" onClick={this.logout}>LogOut</Button></Row>
                          </Col>        
          header = "Sorry! You have to click again to sign out"
    } else {
          button = <Button
                      className="orange"
                      waves='light'
                   >
                   Log In
                   </Button>
          loggedInOrNot = <Row>
                          <Col className="center" s={12}>
                            <Input
                              type="email"
                              label="Email"
                              name="email"
                              onChange={this.handleInputChange}
                              s={6} />
                          </Col>
                          <Col className="center" s={12}>
                            <Input
                              type="password"
                              label="Password"
                              name="password"
                              onChange={this.handleInputChange}
                              s={6} />
                          </Col>
                          <Col>
                            <Button
                              className="orange"
                              waves='light'
                              onClick={this.login}
                            >
                            Sign In
                            </Button>
                          </Col>
                          </Row>
            header = "Log in with your Chefinately Account!"
    }

    return (
      <Navbar brand={Img} className="grey darken-2 appbar" left>
        <Row>
          <NavItem href="/signup">Chef Account</NavItem>
          <NavItem href="/signUpCustomer">Customer Account</NavItem>
          <NavItem href="/startUpGuide">StartUp Guide</NavItem>
          <Modal
            className="center login"
            header={header}
            trigger={button}
            >
            {loggedInOrNot}
          </Modal>
        </Row>
      </Navbar>
    )
  }
}

export default Nav;
