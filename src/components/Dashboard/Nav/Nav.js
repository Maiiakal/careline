import React, { Component } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Nav.css";

export default class TopNav extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/" className="fw-bold">
              Careline
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <NavDropdown title="Announcements" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="announcements/blogs">
                    Blogs
                  </NavDropdown.Item>
                  <NavDropdown.Item href="announcements/learning-resources">
                    Learning Resources
                  </NavDropdown.Item>
                  <NavDropdown.Item href="announcements/podcasts">
                    Podcasts
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Events" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="events/group-therapy">
                    Group Therapy
                  </NavDropdown.Item>
                  <NavDropdown.Item href="events/volunteer">
                    Volunteer Work
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Session" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="session/reserve">
                    Reserve Session
                  </NavDropdown.Item>
                  <NavDropdown.Item href="session/create-ticket">
                    Create Ticket
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="session/counselor-schedule">
                    View Counselor's Schedule
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="/student-login">Logout</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
