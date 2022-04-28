import { Component } from "react";
import { Container } from "react-bootstrap";
import TopNav from "../Nav/Top/Nav";

import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";


function ConfrimRegisteration() {
  const [searchParams, setSearchParams] = useSearchParams();
  searchParams.get("token");
  alert("hi" + searchParams);

  let navigate = useNavigate();

  // axios
  //   .get(
  //     "https://cors-anywhere.herokuapp.com/https://careline-bzu.herokuapp.com/registration/confrim/" +
  //       searchParams
  //   )
  //   .then((response) => {
  //     console.log(response);
  //     navigate("/login", { replace: true });
  //   });

    return (
      <>
        <TopNav />

        <Container className="mt-5">
          <h1 className="shadow-sm mt-5 p-3 rounded mb-5" id="heading">
            Thank you for confirming your email!
          </h1>

          <p className="">
            Please sign in again using your account information.
          </p>

          <a className="display-5" href="/login">
            Sign In
          </a>
        </Container>
      </>
    );
}

export default ConfrimRegisteration;
