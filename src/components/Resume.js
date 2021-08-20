import React, { Component } from "react";

import "../components/Resume.css";
import Resume1 from "../assets/priyanshu.pdf";
export default class Resume extends Component {
  render() {
    return (
      <div className="background">
        <iframe src={Resume1}></iframe>
      </div>
    );
  }
}
