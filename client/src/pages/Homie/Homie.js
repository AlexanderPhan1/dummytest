import React, {Component} from 'react';
 import Carousel from "../../components/Carousel";
import Search from "../../components/Input";
import Icons from "../../components/Icons";
import Card from "../../components/Card"
import API from "../../utils/API"
import {BrowserRouter as Router} from "react-router-dom";

class Home extends Component {
  state = {
    city:"",
    cuisine:"",
    API,
  }

  render() {
    return (
      <div>
        <Carousel/>
        <Search />
        <Icons />
        <Card />
      </div>
    )
  }
}
  
  export default Home;