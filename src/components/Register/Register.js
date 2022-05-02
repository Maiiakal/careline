import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Register.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import TopNav from "../Nav/Top/Nav";
import loginImg from "../../images/login-1.jpg";

// auth
import axios from "axios";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: props.username,
      password: props.password,
      email: props.email,
      isSubmitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const url =
      "https://cors-anywhere.herokuapp.com/https://careline-bzu.herokuapp.com/register";

    axios({
      method: "post",
      url: url,
      data: {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
    }).then((response) => {
      //res.status.includes('SUCCESS')

      console.log(response);

      if (response.data.status === "SUCCESS") {
        alert("Registration form completed successfully.");
        this.setState({ isSubmitted: true });
      } else if (
        response.data.message === "Email is already in use.: Invalid_Email"
      ) {
        alert("Email is already in use. Please try a diagain.");
        this.setState({ isSubmitted: false });
      }
    });
  }

  render() {
    const isSubmitted = this.state.isSubmitted;

    let content;
    if (isSubmitted) {
      content = (
        <>
          <TopNav />
          <Container className="mt-5">
            <h1 className="shadow-sm mt-5 p-3 rounded mb-5" id="heading">
              An email has been sent to you. Please check your inbox.
            </h1>

            <p className="">
              Thank you for your patience. It might take a few minutes until the
              confirmation has arrived.
            </p>
          </Container>
        </>
      );
      return <div>{content}</div>;
    } else {
      content = (
        <>
          <TopNav />
          <Container className="mt-5">
            <h1 className="shadow-sm mt-5 p-3 rounded mb-5" id="heading">
              Registeration Form
            </h1>
            <Row>
              <Col className="col-4 mb-5">
                <Form
                  className="mt-5 needs-validation novalidate"
                  onSubmit={this.handleSubmit}
                >
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
                      name="username"
                      className="mb-3"
                      type="username"
                      value={this.state.username}
                      onChange={this.handleChange}
                      placeholder="johndoe_1"
                      invalid-feedback="Please enter your username"
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
                      name="password"
                      className="mb-3"
                      type="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      placeholder="********"
                      invalid-feedback="Please enter your password."
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
                      name="email"
                      className="mb-1"
                      type="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      placeholder="1234567@student.birzeit.edu"
                      invalid-feedback="Please enter your university email."
                      required
                    />
                    <Form.Text className="text-muted">
                      Please only use your university email to sign up. Upon
                      confirming your sign up, you'll be sent a confirmation
                      email shortly after. You will need to verify your email
                      before completing your registration.
                    </Form.Text>
                  </Form.Group>

                  <div className="mt-5 d-grid gap-2">
                    <Button variant="primary" type="submit">
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
    return <div>{content}</div>;
  }
}
