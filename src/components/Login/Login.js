import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Login.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import TopNav from "../Nav/Top/Nav";
import loginIcon from "../../images/userID.png";
import loginImg from "../../images/login-1.jpg";

// auth
import connect from "react-redux";
import loginUser from "./../../auth/action/userActions";

export default class Login extends Component {
  render() {
    return (
      <>
        <TopNav />
        <Container className="mt-5">
          <h1 className="shadow-sm mt-5 p-3 rounded" id="heading">
            Login
          </h1>
          <Row>
            <Col className="col-4">
              <img
                className="icon-img w-100"
                src={loginIcon}
                alt="student id card"
              />
              <Form className="needs-validation novalidate">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="1234567@student.birzeit.edu"
                    required
                  />
                  <Form.Text className="text-muted">
                    Please only use your university email to login.
                  </Form.Text>

                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                  />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                  <div className="text-center mt-3">
                    <a href="/reset-password">
                      <small class="reset">Reset Password</small>
                    </a>
                    <a href="/register">
                      <small class="sign-up">Sign Up</small>
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
