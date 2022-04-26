import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Register.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import TopNav from "../Nav/Top/Nav";
import loginIcon from "../../images/userID.png";
import loginImg from "../../images/login-1.jpg";

export default class Register extends Component {
  render() {
    return (
      <>
        <TopNav />
        <Container className="mt-5">
          <h1 className="shadow-sm mt-5 p-3 rounded mb-5" id="heading">
            Regiser
          </h1>
          <Row>
            <Col className="col-4 mb-5">
              <Form className="mt-5 ">
                <Form.Group className="mb-5" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="1234567@student.birzeit.edu"
                  />
                  <Form.Text className="text-muted">
                    Please only use your university email to sign up. After
                    confirming your sign up, you'll be sent a confrimation email
                    soon. You will need to verify your email before completing
                    your registration.
                  </Form.Text>

                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <div className="mt-5 d-grid gap-2">
                  <Button
                    href="/student-dashboard"
                    variant="primary"
                    type="submit"
                  >
                    Confirm Sign Up
                  </Button>
                  <div className="text-center mt-3">
                    <a href="/reset-password">
                      <small class="reset">Reset Password</small>
                    </a>
                    <a href="/login">
                      <small class="sign-in">Sign In</small>
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
