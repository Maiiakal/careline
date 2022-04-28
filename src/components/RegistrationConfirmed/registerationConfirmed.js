import { Component } from "react";
import { Container } from "react-bootstrap";
import TopNav from "../Nav/Top/Nav";

import axios from "axios";
import { useSearchParams } from "react-router-dom";

function ConfrimRegisteration() {

const [searchParams, setSearchParams] = useSearchParams();
searchParams.get("token");
alert(searchParams);

  axios
    .get(
      "https://cors-anywhere.herokuapp.com/https://careline-bzu.herokuapp.com/registration/confrim/"
    )
    .then((response) => {
      //res.status.includes('SUCCESS')

      console.log(response);

      if (response.data.status === "SUCCESS") {
        alert("Registration form completed successfully.");
        this.setState({ isSubmitted: true });
      } else if (
        response.data.message === "Email is already in use.: Invalid_Email"
      ) {
        alert("Email is already in use. Please try a diagain.");
        this.setState({ isSubmitted: false });
      }
    });
}

export default ConfrimRegisteration;