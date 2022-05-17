import React from "react";
import ReactDom from "react-dom";
import { useState, useEffect } from "react";
import styles from "./TicketForm.module.css";
import axios from "axios";
const TicketForm = (props) => {
  const [ticketBody, setTicketBody] = useState({
    title: "",
    content: "",
    priority: "",
  });
  const [ticketID, setTicketId] = useState();

  const getTicket = () => {
    //here sned api with ticke info to backend to it can be fetched in the counslor side
    // const ticketBody = { title: ticketBody.title, content: ticketBody.content, priority: ticketBody.priority };
    axios
      .get("https://reqres.in/api/articles", ticketBody)
      .then((response) => setTicketId(response.data.id));

    // const requestOption = {
    //     method: 'POST',
    //     headers: { 'Content-Type': "application/json" },
    //     body: JSON.stringify({ title: ticketBody.title, content: ticketBody.content, priority: ticketBody.priority })
    // };
    // fetch('url here', requestOption)
    //     .then(response => response.json())
    //     .then(data =>)
  };
  useEffect(() => {
    getTicket();
  }, []);
  const replyToTicket = () => {};
  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        {/* <label>University Id */}
        <label
          type="text"
          id="title"
          className={styles.input}
          name="title"
          readonly
        >
          {ticketBody.title}title from backend
        </label>
        {/* </label> */}
        {/* <label>University Id */}
        <label
          type="text"
          id="content"
          className={styles.input}
          name="content"
          readonly
        >
          {ticketBody.content}message from backend
        </label>
        {/* </label> */}
        {/* <label>University Id */}
        <label
          type="text"
          id="priority"
          className={styles.input}
          name="priority"
          readonly
        >
          priority{ticketBody.priority}
        </label>
        {/* </label> */}

        <div className={styles.footer}>
          <button className={styles.saveBtn} onClick={replyToTicket}>
            reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketForm;
