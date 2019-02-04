import React, { Component } from 'react';
import { Row, Input, Button, Col, Section } from 'react-materialize';
import API from "../../utils/API";
import "./signupcustomer.css";
import fire from "../../config/Fire"

class SignUpCustomer extends Component {

  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  };

  formSubmit = event => {
    event.preventDefault();
    console.log("Submit button works!");

    let userData = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
    }

    console.log(userData);
    API.saveUser(
      userData
    )
      .catch(err => console.log(err));

    fire.auth().createUserWithEmailAndPassword(
      this.state.email,
      this.state.password
    )
      .then((u) => { console.log(u) })
      .catch((error) => { console.log(error) })
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form className="container signups" >
        <Section>
          <Row className="center main">
            <Col className="left" s={6}>
              <Input 
                s={12}
                label="First Name"
                onChange={(event) => this.handleInputChange(event)}
                name="firstname"
                value={this.state.firstname}
              />



              <Input
                label="Last Name"
                s={12}
                name="lastname"
                onChange={(event) => this.handleInputChange(event)}
                value={this.state.lastname}
              />



              <Input
                type="email"
                label="Email"
                s={12}
                name="email"
                onChange={(event) => this.handleInputChange(event)}
                value={this.state.email}
              />


              <Input
                type="password"
                label="Password"
                s={12}
                name="password"
                onChange={(event) => this.handleInputChange(event)}
                value={this.state.password}
              />



              <Button className="btn" onClick={(event) => this.formSubmit(event)}>Submit</Button>
            </Col >
            <Col s={6} className="rowwood left center">
              <img className="chefwood" src="https://i.postimg.cc/SK1MmdBT/chefinately-wood.png" alt="chefinatelylogo"></img>
            </Col>
          </Row>
        </Section>
      </form>
    );
  }
}

export default SignUpCustomer;