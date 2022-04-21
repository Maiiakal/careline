import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Dashboard.css";
import {
  Nav,
  Navbar,
  Container,
  Card,
  CardGroup,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import TopNav from "../Nav/Nav";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <TopNav />
        <div className="container-fluid bg-light" id="viewport">
          <div className="row flex-nowrap">
            <Container className="col-auto col-md-3 col-xl-2 px-sm-2 bg-white">
              <Container className="sticky-top">
                <Navbar className="pt-5" expand="lg">
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="flex-column">
                      <Navbar.Brand id="navbar-brand" className="fw-bol">
                        <span class="text">Care</span>line
                      </Navbar.Brand>
                      <span className="mt-5 d-flex align-items-center text-white text-decoration-none">
                        <h6 className="fs-5 d-none d-sm-inline text-body ">
                          Settings
                        </h6>
                      </span>

                      <Nav.Link className="side-nav" href="#profile">
                        <svg
                          className="bi bi-person me-2 mb-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="black"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                        My Profile
                      </Nav.Link>

                      <Nav.Link className="side-nav" href="#profile">
                        <svg
                          className="bi bi-person me-2 mb-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="black"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                        My Profile
                      </Nav.Link>

                      <span className="mt-3 d-flex align-items-center text-white text-decoration-none">
                        <h6 className="fs-5 d-none d-sm-inline text-body ">
                          Session
                        </h6>
                      </span>
                      <Nav.Link className="side-nav" href="#my-session">
                        <svg
                          className="bi bi-calendar-week me-2 mb-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                        </svg>
                        My Schedule
                      </Nav.Link>

                      <span className="mt-3 d-flex align-items-center text-white text-decoration-none">
                        <h6 className="fs-5 d-none d-sm-inline text-body ">
                          Contact
                        </h6>
                      </span>
                      <Nav.Link className="side-nav" href="#create-ticket">
                        <svg
                          className="bi bi-chat-right-dots me-2 mb-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="21"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                          <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                        Ask Counselor
                      </Nav.Link>
                      <Nav.Link className="side-nav" href="#schedule-session">
                        <svg
                          className="bi bi-calendar me-2 mb-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                        </svg>
                        Schedule Session
                      </Nav.Link>
                      <Nav.Link className="side-nav" href="#emergency-session">
                        <svg
                          className="bi bi-bag-plus me-2 mb-2"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                          />
                          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg>
                        Emergency Session
                      </Nav.Link>
                      <Nav.Link className="side-nav" href="#help">
                        <svg
                          className="bi bi-info-circle me-2 mb-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                        Get Help
                      </Nav.Link>

                      <span className="mt-3 d-flex align-items-center text-white text-decoration-none">
                        <h6 className="fs-5 d-none d-sm-inline text-body ">
                          Announcements
                        </h6>
                      </span>
                      <Nav.Link className="side-nav" href="#my-announcements">
                        <svg
                          className="bi bi-bell me-2 mb-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                        </svg>
                        My Announcements
                      </Nav.Link>
                      <Nav.Link className="side-nav" href="#post-blog">
                        <svg
                          className="bi bi-pencil-square me-2 mb-1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                          />
                        </svg>
                        Post Blog
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </Container>
            </Container>
            <Container className="col m-4 py-3 text-body">
              <h1 className="shadow-sm mb-4 p-3 rounded bg-white">
                Activity Dashboard
              </h1>

              <Row>
                <Col className="col-9">
                  <CardGroup className="CardGroup mb-5 p-4 border-1 shadow">
                    <Card className="border-0">
                      <Card.Body className="mx-auto my-2 container-fluid">
                        <h3 className="mb-3 ms-5 ps-3">Upcoming Events</h3>
                        <Calendar className="rounded border-0 shadow" />
                      </Card.Body>
                    </Card>

                    <Card className="Card border-0">
                      <Card.Body>
                        <Row className="mt-4">
                          <Col>
                            <Card className="Card border-1 ">
                              <Card.Title className="mx-auto display-3 text-success">
                                0
                              </Card.Title>
                              <Card.Body className="mx-auto pt-2">
                                <Card.Text className="px-3">
                                  Sessions done
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>

                          <Col>
                            <Card className="Card border-1">
                              <Card.Title className="mx-auto display-3 text-info">
                                0
                              </Card.Title>
                              <Card.Body className="mx-auto pt-2">
                                <Card.Text>Tickets created</Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>

                        <Row className="mt-2">
                          <Col>
                            <Card className="Card border-1 ">
                              <Card.Title className="mx-auto text-muted display-3">
                                0
                              </Card.Title>
                              <Card.Body className="mx-auto pt-2">
                                <Card.Text>Sessions missed</Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>

                          <Col>
                            <Card className="Card border-1 ">
                              <Card.Title className="mx-auto display-3 text-danger">
                                0
                              </Card.Title>
                              <Card.Body className="mx-auto pt-2">
                                <Card.Text>Tickets rejected</Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </CardGroup>

                  <CardGroup className="CardGroup mt-5 p-5 border-1 shadow">
                    <Row className="mx-auto mb-5">
                      <Col>
                        <Card
                          className="Card me-5 shadow"
                          style={{ width: "18rem" }}
                        >
                          <svg
                            className="bi bi-bell mx-auto p-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="200"
                            height="200"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                          </svg>
                          <Card.Body>
                            <Card.Title>My Announcements</Card.Title>
                            <Card.Text className="text-muted">
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Visit Page</Button>
                          </Card.Body>
                          <Card.Footer>
                            <small className="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </Card.Footer>
                        </Card>
                      </Col>

                      <Col>
                        <Card
                          className="Card ms-5 shadow"
                          style={{ width: "18rem" }}
                        >
                          <svg
                            className="bi bi-pencil-square mx-auto p-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="200"
                            height="200"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                              fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                          <Card.Body>
                            <Card.Title>Post Blog</Card.Title>
                            <Card.Text className="text-muted">
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary"> Visit Page</Button>
                          </Card.Body>
                          <Card.Footer>
                            <small className="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </Card.Footer>
                        </Card>
                      </Col>
                    </Row>

                    <Row className="mx-auto">
                      <Col>
                        <Card
                          className="Card me-5 shadow"
                          style={{ width: "18rem" }}
                        >
                          <svg
                            className="bi bi-bell mx-auto p-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="200"
                            height="200"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                          </svg>
                          <Card.Body>
                            <Card.Title>My Announcements</Card.Title>
                            <Card.Text className="text-muted">
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Visit Page</Button>
                          </Card.Body>
                          <Card.Footer>
                            <small className="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </Card.Footer>
                        </Card>
                      </Col>

                      <Col>
                        <Card
                          className="Card ms-5 shadow"
                          style={{ width: "18rem" }}
                        >
                          <svg
                            className="bi bi-pencil-square mx-auto p-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="200"
                            height="200"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                              fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                            />
                          </svg>
                          <Card.Body>
                            <Card.Title>Post Blog</Card.Title>
                            <Card.Text className="text-muted">
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary"> Visit Page</Button>
                          </Card.Body>
                          <Card.Footer>
                            <small className="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </Card.Footer>
                        </Card>
                      </Col>
                    </Row>
                  </CardGroup>
                </Col>

                <Col className="col-3">
                  <Card className="Card mb-5 p-0 shadow" style={{ width: "" }}>
                    <Card.Body>
                      <Card.Title className="mx-auto">
                        <svg
                          className="bi bi-bell mx-auto me-2 my-3"
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                        </svg>
                        Notifications
                      </Card.Title>
                      <Card.Text className="text-muted">
                        This is your notification center.
                      </Card.Text>
                      <Button variant="primary"> Visit Page</Button>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </Card.Footer>
                  </Card>

                  <Card className="Card mb-5 p-0 shadow" style={{ width: "" }}>
                    <Card.Body>
                      <Card.Title className="mx-auto">
                        <svg
                          className="bi bi-clock mx-auto me-2 my-3"
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                        </svg>
                        Hours Spent
                      </Card.Title>

                      <Card.Text className="text-muted display-3 mb-4">
                        1.3
                      </Card.Text>
                      <Card.Text className="text-muted">
                        You can view the total hours spent on this website.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </Card.Footer>
                  </Card>

                  <Card className="Card mb-5 p-0 shadow" style={{ width: "" }}>
                    <Card.Body>
                      <Card.Title className="mx-auto">
                        <svg
                          className="bi bi-calendar2-check mx-auto me-2 my-3"
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                          <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
                        </svg>
                        Monthly Report
                      </Card.Title>
                      <Card.Text className="text-muted">
                        You are able to view their monthly auto generated
                        report.
                      </Card.Text>
                      <Button variant="primary"> Visit Page</Button>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </Card.Footer>
                  </Card>

                  <Card className="Card mb-5 p-0 shadow" style={{ width: "" }}>
                    <Card.Body>
                      <Card.Title className="mx-auto">
                        <svg
                          className="bi bi-clipboard-plus mx-auto me-2 my-3"
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"
                          />
                          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                        </svg>
                        Featured Posts
                      </Card.Title>
                      <Card.Text className="text-muted">
                        We picked the best posts for you. Enjoy!
                      </Card.Text>
                      <Button variant="primary"> Visit Page</Button>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </>
    );
  }
}
