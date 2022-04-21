import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Login.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import TopNav from "../../Nav/Top/Nav";
import loginIcon from "../../../images/consultation.svg";
import loginImg from "../../../images/login-2.jpg";

export default class Login extends Component {
  render() {
    return (
      <>
        <TopNav />
        <Container className="mt-5">
          <h1 className="shadow-sm mt-5 p-3 rounded" id="heading">
            Counselor Login
          </h1>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <img className="icon-img" src={loginIcon} alt="icon" />
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    Please only use your university email to login.
                    <br></br>
                    For example: 1234567@birzeit.edu
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicCheckbox"
                ></Form.Group>
                <div className="d-grid gap-2">
                  <Button
                    href="/counselor-dashboard"
                    variant="primary"
                    type="submit"
                  >
                    Login
                  </Button>
                  <div className="text-center mt-3">
                    <a href="#">
                      <small class="reset">Reset Password</small>
                    </a>
                    <a href="#">
                      <small class="sign-up">Sign Up</small>
                    </a>
                  </div>
                </div>
              </Form>
            </Col>
            <Col lg={8} md={6} sm={12}>
              <img class="main-img-counselor" src={loginImg} alt="icon" />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
