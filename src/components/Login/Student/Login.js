import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Login.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import TopNav from "../../Nav/Top/Nav";
import loginIcon from "../../../images/userID.png";
import loginImg from "../../../images/login-1.jpg";

export default class Login extends Component {
  render() {
    return (
      <>
        <TopNav />
        <Container className="mt-5">
          <h1 className="shadow-sm mt-5 p-3 rounded" id="heading">
            Student Login
          </h1>
          <Row>
            <Col className="col-4">
              <img className="icon-img w-100" src={loginIcon} alt="icon" />
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    Please only use your student email to login.
                    <br></br>
                    For example: 1234567@student.birzeit.edu
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
                  <Button href="/student-dashboard" variant="primary" type="submit">
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
            <Col className="col-8">
              <img className="main-img " src={loginImg} alt="main-image" />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
