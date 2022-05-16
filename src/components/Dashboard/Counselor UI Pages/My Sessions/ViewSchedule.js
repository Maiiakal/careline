import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import TopNav from "../../Nav/Nav";
import { Container } from "react-bootstrap";
import LeftPanel from "../LeftPanel/LeftPanel";
import Calendar from "react-calendar";

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
        <div className="container-fluid bg-light">
          <div className="row flex-nowrap">
            <LeftPanel />

            <Container className="col m-4 py-3 text-body container-fluid">
              <h1 className="shadow-sm mb-4 p-3 rounded bg-white">
                Upcoming Scheduled Events
              </h1>
              <Calendar className="rounded border-0 shadow mx-auto my-5" />
            </Container>
          </div>
        </div>
      </>
    );
  }
}

export default ViewSchedule;
