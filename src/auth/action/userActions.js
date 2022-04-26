
import axios from 'axios';


export const loginUser = (credentials, history, setSubmitting) => {};

export const signUpUser = (credentials, history, setSubmitting) => {

    axios.post("http://careline-bzu.herokuapp.com/login", credentials, {
      headers: {
        "Content-Type": "application/json",
      },
    });

};

export const logoutUser = (credentials, history, setSubmitting) => {};
