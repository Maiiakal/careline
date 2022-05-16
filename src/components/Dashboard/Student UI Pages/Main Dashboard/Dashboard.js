import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Dashboard.css";
import {
  Nav,
  Navbar,
  Container,
  Card,
  CardGroup,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import TopNav from "../../Nav/Nav";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import LeftPanel from "../Left Panel/LeftPanel";
import Homepage from "./Homepage";

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <TopNav />
        <div className="container-fluid bg-light" id="viewport">
          <div className="row flex-nowrap">
            <LeftPanel />
            <Homepage />
          </div>
        </div>
      </>
    );
  }
}
