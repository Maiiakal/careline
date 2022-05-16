import React from "react";
import ReactDom from "react-dom";
import { useState, useEffect } from "react";
import styles from "./TicketForm.module.css";
// import PropTypes from 'prop-types'; // ES6
// import { response } from "express";
import axios from "axios";
import { Dropdown } from "bootstrap";
import DropDown from "../../../../Common/DropDowns/DropDown";
import TopNav from "../../Nav//Nav";
import LeftPanel from "../Left Panel/LeftPanel";
import { Container } from "react-bootstrap";
const TicketForm = (props) => {
  const [ticketBody, setTicketBody] = useState({
    title: "",
    content: "",
    priority: "",
  });
  const [ticketID, setTicketId] = useState();
  // const [title, setTitle] = useState("");
  // const [message, setMessage] = useState();
  // const [levelOfUrgency, setLevelOfUrgency] = useState();

  const levelsArray = [
    { value: "Normal", label: "Normal" },
    { value: "Intermediate", label: "Intermediate" },
    { value: "Urgent", label: "Urgent" },
  ];
  const updatePriority = (event) => {
    ticketBody.priority = event.target.value;
  };
  const updateTitle = (event) => {
    ticketBody.title = event.target.value;
  };
  const updateContent = (event) => {
    ticketBody.content = event.target.value;
  };
  const sendTicket = () => {
    //here sned api with ticke info to backend to it can be fetched in the counslor side
    const ticketBody = {
      title: ticketBody.title,
      content: ticketBody.content,
      priority: ticketBody.priority,
    };
    axios
      .post("https://cors-anywhere.herokuapp.com/https://careline-bzu.herokuapp.com/ticket", ticketBody)
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
  return (
    <>
      <TopNav />
      <div className="container-fluid bg-light" id="viewport">
        <div className="row flex-nowrap">
          <LeftPanel />
          <Container className="col m-4 py-3 text-body">
            <h1 className="shadow-sm mb-4 p-3 rounded bg-white">
              Don't Hesistate to Reach Out!
            </h1>
            <div className={styles.modal}>
              <div className={styles.container}>
                <input
                  placeHolder="Title"
                  className={styles.input}
                  onChange={updateTitle}
                />

                <textarea onChange={updateContent} />
                <DropDown
                  optionsArray={levelsArray}
                  selectedOption={updatePriority}
                />

                <div className={styles.footer}>
                  <button className={styles.saveBtn} onClick={sendTicket}>
                    send
                  </button>
                  <button className={styles.closeBtn} onClick={props.onClose}>
                    cancel
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default TicketForm;
