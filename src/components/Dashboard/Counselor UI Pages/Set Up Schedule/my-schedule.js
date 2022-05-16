import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import TopNav from "../../Nav/Nav";
import { Container, Form, Button } from "react-bootstrap";
import LeftPanel from "../LeftPanel/LeftPanel";
import Calendar from "react-calendar";

// API
import axios from "axios";

class MySchedule extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
    event.preventDefault();

    const url =
      "https://cors-anywhere.herokuapp.com/https://careline-bzu.herokuapp.com/login";

    axios({
      method: "get",
      url: url,
      data: "username=" + this.state.email + "&password=" + this.state.password,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then((response) => {
        if (response.statusText === "OK") {
          alert("Login form completed successfully.");

          console.log(response);
          console.log("cookie", response.Cookies);
          const { navigate } = this.props;
          navigate("/student-dashboard");
        }
      })
      .catch((error) => {
        alert("Login form failed. Incorrect credentials");
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <TopNav />
        <div className="container-fluid bg-light">
          <div className="row flex-nowrap">
            <LeftPanel />

            <Container className="col m-4 py-3 text-body container-fluid">
              <h1 className="shadow-sm mb-4 p-3 rounded bg-white">
                Set Up Your Weekly Schedule
              </h1>

              <Form
                className="needs-validation novalidate mt-5"
                onSubmit={this.handleSubmit}
              >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <h2>Step 1: Name Your Event</h2>

                  <Form.Control
                    name="event"
                    className="w-50"
                    type="text"
                    //value={this.state.email}
                    //onChange={this.handleChange}
                    placeholder="Pscyhology Class"
                    invalid-feedback="Please enter your university email."
                    required
                  />

                  <Form.Text className="text-muted">
                    Please use descriptive words for your events.
                  </Form.Text>

                  <h2 className="my-3">Step 2: Pick Your Days</h2>
                  <Form.Control
                    name="event"
                    className="w-50"
                    type="text"
                    //value={this.state.email}
                    //onChange={this.handleChange}
                    placeholder="Pscyhology Class"
                    invalid-feedback="Please enter your university email."
                    required
                  />
                  <h2 className="my-3">Step 3: Time Range</h2>
                  <Form.Control
                    name="event"
                    className="w-50"
                    type="text"
                    //value={this.state.email}
                    //onChange={this.handleChange}
                    placeholder="Pscyhology Class"
                    invalid-feedback="Please enter your university email."
                    required
                  />
                  <h2 className="my-3">Step 4: Set Frequency</h2>
                  <Form.Control
                    name="event"
                    className="w-50"
                    type="text"
                    //value={this.state.email}
                    //onChange={this.handleChange}
                    placeholder="Pscyhology Class"
                    invalid-feedback="Please enter your university email."
                    required
                  />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button variant="primary w-25 mx-auto" type="submit">
                    Add Event
                  </Button>
                </div>
              </Form>
            </Container>
          </div>
        </div>
      </>
    );
  }
}

export default MySchedule;
