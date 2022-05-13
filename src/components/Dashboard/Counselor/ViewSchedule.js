import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import TopNav from "../Nav/Nav";

// API
import axios from "axios";
import { useNavigate } from "react-router-dom";

class ViewSchedule extends Component {
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
        <Container className="mt-5">
          <h1
            className="shadow-sm mt-5 p-3 rounded"
            id="heading"
          >
            Upcoming Scheduled Events
          </h1>
          
        </Container>
      </>
    );
  }
}

export default ViewSchedule;
