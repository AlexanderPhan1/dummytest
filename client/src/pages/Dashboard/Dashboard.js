import React from "react";
import API from "../../utils/API";
import "./Dashboard.css";
import {
  Col,
  Row,
  Input,
  Icon,
  Section,
  Button,
  // Thead,
  // Td,
  // Tr,
  // Tbody,
  // Th,
  // Table
  
} from "react-materialize";

class userInterface extends React.Component {
  state = {
    chefs: [],
    chefName: "",
    email: "",
    password: "",
    description: "",
    availability: true,
    city: "",
    range: "",
    foodimg: "",
    profilepic: "",
    cuisines: []
  };

  componentDidMount() {
    this.loadChefs();
    // this.loadCuisines();
  }

  // loadCuisines = () => {
  //   API.getCuisines()
  //     .then(res =>
  //       this.setState({ cuisines: res.data,
  //         cuisine: "",
  //         image:""

  //       })
  //     )
  //     .catch(err => console.log(err));
  // };

  // loadCuisines = () => {
  //   API.getCuisines()
  //       .then(res =>
  //         this.setState({ foods: res.data , name:"", image:"" })
  //         )
  //       .catch(err => console.log(err));
  // }

  setChefs = res =>
    this.setState({
      chefs: res.data,
      description: "",
      availability: "",
      city: "",
      range: "",
      chefName: "",
      email: "",
      cuisines: "",
      foodimg: "",
      profilepic: ""
    });

  loadChefs = () => {
    return API.getChefs().then(res => this.setChefs(res));
    // .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.city && this.state.cuisines) {
      API.getChefs({
        city: this.state.city,
        cuisine: this.state.cuisine
      })
        .then(res => this.loadChefs())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Section className="center">
        <Row className="left">
          <Col l={12} className="num1">
            <Col s={3} className="aside left num2 container">
              <img
                className="boxlogo"
                src="https://i.postimg.cc/SNYBDm9j/Chefinatley-Icon.png"
                alt="cheflogo"
              />
              <h2 className="order">Order Now</h2>
              <Col s={12} className="center" />
              <Col s={12} className="center carry-pickup">
                <Input label="city" />
              </Col>
              <Col s={12} className="center carry-pickup">
                <Input label="cuisine" />
                <Button
                  onClick={() => this.handleFormSubmit}
                  className="orange"
                >
                  Submit
                </Button>
              </Col>
              <Col s={12} className="center carry-pickup">
                <Button className="brown" name="Pickup">
                  Pickup
                </Button>
                <Button className="brown" name="Delivery">
                  Delivery
                </Button>
              </Col>
              <Col s={12} className="center carry-pickup">
                <Col s={4}>
                  <Button
                    onClick={() => this.handleFormSubmit}
                    className="orange"
                  >
                    <Icon>$</Icon>
                  </Button>
                </Col>
                <Col s={4}>
                  <Button
                    onClick={() => this.handleFormSubmit}
                    className="orange"
                  >
                    <Icon>$$</Icon>
                  </Button>
                </Col>
                <Col s={4}>
                  <Button
                    onClick={() => this.handleFormSubmit}
                    className="orange"
                  >
                    <Icon>$$$</Icon>
                  </Button>
                </Col>
              </Col>
              <Col s={12} className="center carry-pickup">
                <Col s={4}>
                  <Button className="orange">
                    <Icon>star_border</Icon>
                  </Button>
                </Col>
                <Col s={4}>
                  <Button className="orange">
                    <Icon>star_half</Icon>
                  </Button>
                </Col>
                <Col s={4}>
                  <Button className="orange">
                    <Icon>star</Icon>
                  </Button>
                </Col>
              </Col>
            </Col>
            <Col s={9} />
            <Col s={9}>
              <p>Local Chefs near you</p>
            </Col>
            <Col s={9}>
              <p>Local Delivery Chefs Near you</p>
            </Col>
            {this.state.chefs.length ? (     
             <Col s={9}>
            {this.state.chefs.map(chef => (
             <Col s={3}>
              <img className="chefpics" alt ="chefpicture"src={'data:image/jpeg;base64,' + chef.profilepic}></img>
              <span>{chef.chefName}</span> 
              <Col s={12}>
              <span>{chef.city} </span>
              </Col>
              <Col s={12}>
              <a href={`/pdf/` + chef._id} target="blank">Menu</a>
              </Col>
             </Col>
              
             ) )}
            </Col>
             ) : (
              <h3>No Results to Display</h3>
                   )}
           



           </Col>
        </Row>
      </Section>
    );
  }
}

export default userInterface;
