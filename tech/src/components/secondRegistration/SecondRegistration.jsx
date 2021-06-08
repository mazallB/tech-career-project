import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./SecondRegistration.css";
import { Button, Input } from "antd";

export default class SecondRegistration extends React.Component {
  render() {
    return (
      <div>
        <br />
        <div className="second-step-btn">
            <label>Add profile pic</label>
          <Input type="file" name="file" className="profile"/>
          <label>Upload cv</label>
          <Input type="file" name="file" className="cv"/>
          {/* <Button type="primary" className="btn-profile-pic">Add profile pic</Button> */}
          {/* <Button type="primary" className="btn-cv">Upload cv</Button> */}
          <Button type="primary" className="btn-cv-pic-ok">
            Ok
          </Button>
        </div>
        <br />
        <br />

      </div>
      
    );
  }
}
