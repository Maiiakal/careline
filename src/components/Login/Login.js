import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Login.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import TopNav from "../Nav/Top/Nav";
import loginIcon from "../../images/userID.png";

// API
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: props.email,
      password: props.password,
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

    axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://careline-bzu.herokuapp.com/login",
        {
          email: this.state.email,
          password: this.state.password,
        }
      )
      .then((response) => {
        //res.status.includes('SUCCESS')

        alert(response);
        console.log(response);

        if (response.data.status === "SUCCESS") {
          alert("Login form completed successfully.");
          this.props.navigate("/profile");
        } else if (
          response.data.message === "Email is already in use.: Invalid_Email"
        ) {
          alert("Email is already in use. Please try a diagain.");
          this.setState({ isSubmitted: false });
        }
      })
      .catch((error) => {
        alert("Can't login or already confirmed.");
      });
  }

  render() {
    return (
      <>
        <TopNav />
        <Container className="mt-5">
          <h1
            className="shadow-sm mt-5 p-3 rounded"
            id="heading"
            onSubmit={this.handleSubmit}
          >
            Login
          </h1>
          <Row>
            <Col className="col-4 mt-5">
              <Form
                className="needs-validation novalidate mt-5"
                onSubmit={this.handleSubmit}
              >
                <Form.Group className="mb-3" controlId="formBasicEmail">
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
                    Please Enter Your Email:
                  </p>
                  <Form.Control
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder="1234567@student.birzeit.edu"
                    invalid-feedback="Please enter your university email."
                    required
                  />
                  <Form.Text className="text-muted">
                    Please only use your university email to login.
                  </Form.Text>

                  <Form.Text className="text-muted"></Form.Text>

                  <p className="text-dark mt-4">
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
                    Please Enter Your Password:
                  </p>
                  <Form.Control
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    placeholder="********"
                    invalid-feedback="Please enter your password."
                    required
                  />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                  <div className="text-center mt-3">
                    <a href="/reset-password">
                      <small className="reset">Reset Password</small>
                    </a>
                    <a href="/register">
                      <small className="sign-up">Sign Up</small>
                    </a>
                  </div>
                </div>
              </Form>
            </Col>
            <Col className="col-8">
              <img
                className="main-img "
                src={loginIcon}
                alt="student id card"
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

function Props(props) {
  let navigate = useNavigate();
  return <Login {...props} navigate={navigate} />;
}
