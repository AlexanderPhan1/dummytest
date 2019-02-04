// import React, { Component } from "react";
// import { Modal, Row, Col, Button, Input } from "react-materialize";
// import ReactDOM from 'react-dom';
// import GoogleLogin from 'react-google-login';
// import FacebookLogin from 'react-facebool-login';

// const responseGoogle = (response) => {
//     console.log(response)
// }

// class Login extends Component {

//     constructor(props) {
//         this.stats = {
//             redirectToReferrer: false
//         }
//         this.signup = this.signupbind(this);

//     }

//     signup(res, type) {

//         PostData('login', this.state)
//             .then((result) => {
//                 let responseJson = result;
//                 if (responseJson.userData) {
//                     sessionStorage.setItem('userData', JSON.stringify(responseJson));
//                     this.setState({ redirectToReferrer: true })
//                 }
//             });
//     }






//     render() {
//         return (


//         <Modal className="center" header="Log In with your Chefinately Account" trigger={<Button  className="brown">LogIn</Button>}>
//         <Row>
//         <Col className="center" s={12}>
//         <Input className="center" type="email" label="Email" s={6} />
//         <GoogleLogin
//     clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
//     buttonText="Login"
//     onSuccess={responseGoogle}
//     onFailure={responseGoogle}
//   />,
//         </Col>
//                     <Col className="center" s={12}>
//                         <Input type="password" label="password" s={6} />
//                         <FacebookLogin
//                             appId="527179861413328"
//                             autoLoad={true}
//                             fields="name,email,picture"
//                             onClick={componentClicked}
//                             callback={responseFacebook} />,
//         </Col>
//         <Button waves='light'>Sign In</Button>
//         </ Modal>

//                 );
//               }
// }