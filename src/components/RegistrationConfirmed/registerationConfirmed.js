import { Component } from "react";
import { Container } from "react-bootstrap";
import TopNav from "../Nav/Top/Nav";

class Confirmation extends Component {
  state = {};
  render() {
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
}

export default Confirmation;
