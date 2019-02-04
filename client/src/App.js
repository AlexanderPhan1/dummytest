import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import Homie from "./pages/Homie";
// import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Nav";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SignUpCustomer from "./pages/SignUpCustomer";
import About from "./pages/About";
import Feed from "./pages/FeedPage"
import StartUpGuide from "./pages/StartUpGuide";
import userInterface from "./pages/Dashboard";
import Footer from "./components/Footer"
import PdfPage from "./pages/PdfPage"
import fire from "./config/Fire"

// // Creating a Route component
// const Route = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//       this.state.user === true
//           ? <Component {...props} />
//           : <Redirect to="/signup" />
//   )} />
// );

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: {},
      isLoggedIn: false
    }
  }

  userExists (user) {
    if (user) {
      this.setState({
        isLoggedIn: true
      })
    } else {
      this.setState({
        isLoggedIn: false
      })
    }
  }

  componentDidMount() {
    this.authListener();
    this.userExists();
  }

  // Auth listener from Firebase that understands when a user is signed in.
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ 
              user,
              isLoggedIn: true 
            });
        // localStorage.setItem('user', user.uid);
      } else {
        this.setState({ 
          user: null, 
          isLoggedIn: false
        });
      }
    });
    this.authListener = this.authListener.bind(this)
  }

  render() {
    // Write conditional Rendering here
    // Pass down user as a prop inside of Nav.js
    // Props.name or props.user, etc...
    // https://reactjs.org/docs/conditional-rendering.html

    return (
        
      <Router>
        <div>
          <Navbar isLoggedIn={this.state.isLoggedIn}/>
           <Route path="/" component={Homie} />
           <Route path="/signup" component={Signup} />
           <Route path="/signupcustomer" component={SignUpCustomer} />
           <Route path="/about" component={About} />
           <Route path="/startupguide" component={StartUpGuide} />
           <Route path="/feed" component={Feed} />
           <Route path="/pdf/:id" component={PdfPage} />
           <Route path="/dashboard" component={userInterface} />
        </div>
      </Router>
    )
  }

};

export default App;
