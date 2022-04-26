import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Register.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import TopNav from "../Nav/Top/Nav";
import loginImg from "../../images/login-1.jpg";

// auth
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default class Login extends Component {
  state = {}
  
  //navigateTo('/home')

  PostData() {
    //axios.post(https://careline-bzu.herokuapp.com/registration)

    console.log("here")

    return (
      <>
        <TopNav />
        <Container className="mt-5">
          <h1 className="shadow-sm mt-5 p-3 rounded mb-5" id="heading">
            An email has been sent to you. Please check your inbox.
          </h1>

          <p className="">Thank you for your patience. It might take a few minutes until the confirmation has arrived.</p>
        </Container>
      </>
    );
    
  }

  render() {
    return (
      <>
        <TopNav />
        <Container className="mt-5">
          <h1 className="shadow-sm mt-5 p-3 rounded mb-5" id="heading">
            Registeration Form
          </h1>
          <Row>
            <Col className="col-4 mb-5">
              <Form className="mt-5 needs-validation novalidate">
                <Form.Group
                  className="mb-5 has-validation"
                  controlId="formBasicEmail"
                  required
                >
                  <p className="text-dark">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="black"
                      className="bi bi-person-circle inline me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path
                        fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                      />
                    </svg>
                    Set Your Username:
                  </p>

                  <Form.Control
                    className="mb-3"
                    type="username"
                    placeholder="johndoe_1"
                    invalid-feedback="Please enter your university email."
                    required
                  />

                  <p className="text-dark">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="black"
                      className="bi bi-key-fill me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                    Enter New Password:
                  </p>

                  <Form.Control
                    className="mb-3"
                    type="password"
                    placeholder="********"
                    invalid-feedback="Please enter your university email."
                    required
                  />

                  <p className="text-dark">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="black"
                      className="bi bi-envelope-fill me-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                    </svg>
                    Enter Your Email:
                  </p>

                  <Form.Control
                    className="mb-1"
                    type="email"
                    placeholder="1234567@student.birzeit.edu"
                    invalid-feedback="Please enter your university email."
                    required
                  />
                  <Form.Text className="text-muted">
                    Please only use your university email to sign up. Upon
                    confirming your sign up, you'll be sent a confirmation email
                    shortly after. You will need to verify your email before
                    completing your registration.
                  </Form.Text>
                </Form.Group>

                <div className="mt-5 d-grid gap-2">
                  <Button
                    variant="primary"
                    type="submit"
                    onSubmit={this.PostData}
                  >
                    Send Confirmation Email
                  </Button>
                  <div className="text-center mt-3">
                    <a href="/reset-password">
                      <small className="reset">Reset Password</small>
                    </a>
                    <a href="/login">
                      <small className="sign-in">Sign In</small>
                    </a>
                  </div>
                </div>
              </Form>
            </Col>
            <Col className="col-8">
              <img
                className="main-img "
                src={loginImg}
                alt="person holding a key"
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
