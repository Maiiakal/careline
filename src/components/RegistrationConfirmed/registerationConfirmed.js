import { Component } from "react";
import { Container } from "react-bootstrap";
import TopNav from "../Nav/Top/Nav";
import axios from "axios";


class Confirmation extends Component {
  state = {};
  render() {
    //searchParams = useSearchParams();
    //searchParams.get("__firebase_request_key");

    axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://careline-bzu.herokuapp.com/registration/confirm/",
        {
          //token: this.state.username, extarct from url
          
        }
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
          alert(
            "Email is already in use. Please try a different email address."
          );
          this.setState({ isSubmitted: false });
        }
      });

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
