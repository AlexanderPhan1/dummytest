import React, { Component } from "react";
import { Row, Input } from "react-materialize";


class Login extends Component {
    state = {
      email: "",
      password: ""
    };

    render() {
        return (
            <div className="container">

            <Row>
              {/* <Input type="Chef Log In" label="Chef Log In" s={6}/> */}
              <Input type="email" label="Email" s={12} />
              <Input type="password" label="password" s={12} />
            </Row>
          </div>
        )
    }
}

export default Login;


