import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Dashboard.css";
import TopNav from "../../Nav/Nav";

import "react-calendar/dist/Calendar.css";
import Homepage from "./Homepage";
import LeftPanel from "../../LeftPanel/LeftPanel";

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <TopNav />
        <div className="container-fluid bg-light">
          <div className="row flex-nowrap">
            <LeftPanel />
            <Homepage />
          </div>
        </div>
      </>
    );
  }
}
