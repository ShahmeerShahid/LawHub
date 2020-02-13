import React from "react";
import Button from "./Button";
import {
  schools,
  studyLevels,
  countries,
  stateprovinces
} from "../Constants/registration";

import { TextField, MenuItem } from "@material-ui/core";
import { Redirect } from "react-router-dom";

import "./studentregistration.css";

/**
 * Student Registration card for the student user.
 * Includes logic to send/receive requests to the flask server
 */
class StudentRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      school: "",
      studylvl: "",
      country: "",
      stateOrProvince: "",
      password: "",
      verifyPassword: "",
      city: "toronto",
      submitted: false,
      sessId: -1
    };
  }

  submitRegistration = async () => {
    // grab state values here?? send to database

    console.log("Attempting to register");
    fetch("http://104.196.152.154:5000/api/v1/register/student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(result => {
      console.log(result);
      if (result.ok) {
        console.log("Successful registration");
        result.json().then(data => {
          console.log(data);
          // has a data.message
        });
      } else {
        console.log("Failed to register");
      }
    });
  };

  render = () => {
    if (this.state.submitted) {
      return <Redirect push to="/successfulRegistration" />;
    }

    return (
      <div className="registration_container">
        <div className="card">
          <div className="subtitle">LawHub Account Registration</div>

          <TextField
            id="firstname"
            label="First Name"
            margin="normal"
            fullWidth
            variant="outlined"
            onChange={e => this.setState({ firstName: e.target.value })}
          />
          <TextField
            id="lastname"
            label="Last Name"
            margin="normal"
            fullWidth
            variant="outlined"
            onChange={e => this.setState({ lastName: e.target.value })}
          />
          <TextField
            id="email"
            label="Email"
            margin="normal"
            fullWidth
            variant="outlined"
            onChange={e => this.setState({ email: e.target.value })}
            error={!this.state.email.includes("@") && this.state.email !== ""}
          />

          <div className="row">
            <div className="width-60">
              <TextField
                id="school"
                select
                margin="normal"
                label="Post-secondary Institution"
                value={this.state.school}
                onChange={e => this.setState({ school: e.target.value })}
                variant="outlined"
                fullWidth
              >
                {schools.map(school => (
                  <MenuItem key={school} value={school}>
                    {school}
                  </MenuItem>
                ))}
              </TextField>
            </div>

            <div className="width-40">
              <TextField
                id="studylvl"
                select
                margin="normal"
                label="Level of Study"
                value={this.state.studylvl}
                onChange={e => this.setState({ studylvl: e.target.value })}
                variant="outlined"
                fullWidth
              >
                {studyLevels.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </div>

          <div className="row">
            <div className="width-50">
              <TextField
                id="country"
                select
                margin="normal"
                label="Country"
                value={this.state.country}
                onChange={e => this.setState({ country: e.target.value })}
                variant="outlined"
                fullWidth
              >
                {countries.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </div>

            <div className="width-50">
              <TextField
                id="state-province"
                select
                margin="normal"
                label="State/Province"
                value={this.state.stateOrProvince}
                onChange={e =>
                  this.setState({ stateOrProvince: e.target.value })
                }
                variant="outlined"
                fullWidth
              >
                {stateprovinces.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>

            </div>
          </div>

          <TextField
            id="password"
            label="Password"
            helperText="Minimum 6 characters"
            margin="normal"
            fullWidth
            variant="outlined"
            type="password"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
            error={this.state.password.length < 6 && this.state.password !== ""}
          />

          <TextField
            id="verify-password"
            label="Confirm Password"
            margin="normal"
            fullWidth
            variant="outlined"
            type="password"
            value={this.state.verifyPassword}
            onChange={e => this.setState({ verifyPassword: e.target.value })}
            helperText={
              this.state.password !== this.state.verifyPassword &&
              this.state.verifyPassword !== ""
                ? "Passwords do not match"
                : ""
            }
            error={
              this.state.password !== this.state.verifyPassword &&
              this.state.verifyPassword !== ""
            }
          />

          <div className="centerdiv">
            {/* <Link to="/successfulRegistration"> */}
            <Button
              className="btn_blue"
              text="Submit"
              disabled={
                this.state.password.length > 6 &&
                this.state.password === this.state.verifyPassword
                  ? false
                  : true
              }
              onClick={this.submitRegistration}
            />
            {/* </Link> */}
          </div>
        </div>
      </div>
    );
  };
}

export default StudentRegistration;
