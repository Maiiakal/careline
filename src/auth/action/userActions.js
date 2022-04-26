import axios from "axios";
import { sessionService } from "redux-react-session";

export const loginUser = (credentials, history, setSubmitting) => {};

export const signUpUser = (credentials, navigate, setSubmitting) => {
  axios
    .post("http://careline-bzu.herokuapp.com/login", credentials, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      const { data } = response;

      if (data.status === "SUCCESS") {
        const userData = data.data[0];

        const token = userData._id;

        sessionService.saveSession(token).then(() => {
          sessionService.saveUser(userData).then(() => {
            navigate("/dashboard");
          });
        });
      }

      // complete submission
      setSubmitting(false);
    });
};

export const logoutUser = (credentials, history, setSubmitting) => {};
