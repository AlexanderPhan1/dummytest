import React from "react";
import { Row, Input, Col, Button} from "react-materialize";
import "./input.css"


const search = (props) => (
  <Row className="container cont">
  <Col s={6}>
    <Input
      className="#ffd54f "
      s={6}
      label="City"
      validate
      defaultValue="Chicago"
      value={props.children}
    />
    </Col>
    <Col s={6}>
    <Input
      className="#ffd54f"
      s={6}
      label="Cuisine"
      validate
      defaultValue="Pizza"
      value={props.children}
    />
    <Button className="submit center brown" >Submit</Button>
    </Col>
  </Row>
);
export default search;
