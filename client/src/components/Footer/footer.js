import React from "react";
import { Footer } from "react-materialize";
import ImportedImage from "../../images/Logo(transparent).PNG";

let Img = <img alt="ime" className="logo" src={ImportedImage} />;

export default () => (
  <Footer
    copyrights="Chefinately @copy 2018 Copyright Text"
    moreLinks={
      <a className="grey-text text-lighten-4 right" href="#!">
        {/* More Links */}
      </a>
    }
    links={
      <ul>
        <li>
          <a className="grey-text text-lighten-3" href="/About">
            About Us
          </a>
        </li>
        <li>
          <a className="grey-text text-lighten-3" href="/StartUpGuide">
            StartUp Guide
          </a>
        </li>
        <li>
          <a className="grey-text text-lighten-3" href="/Signup">
            Chef Account
          </a>
        </li>
        <li>
          <a className="grey-text text-lighten-3" href="SignUpCustomer">
            Customer Account
          </a>
        </li>
      </ul>
    }
    className="example grey"
  >
    <h5 className="white-text">{Img}</h5>
    <p className="grey-text text-lighten-4">
      Chefinately provides independent chefs a service to connect with customers
      who are looking for home-cooked meals. As well as providing chefs with a
      platform to cater to any number of individuals. Customers will be able to specify their need for a specific
      cuisine and request a specific chef.
      
     
    </p>
  </Footer>
);
