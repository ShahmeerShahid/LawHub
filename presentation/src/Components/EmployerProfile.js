import React from "react";
import Button from "./Button";
import profilePic from "../Images/lawhub.png";

import { TextField } from "@material-ui/core";

import "../Styles/employerprofile.css";

/**
 * Employer Profile card for employer profile customization.
 * Includes logic to send/receive requests to the flask server
 */
class EmployerProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "userId",
      sessId: "sessId",
      company: "Pearson-Spectre-Litt",
      title: "Fraudulent Intern",
      bio: "We fun",
      profilePicturePath: "",
      submitted: false,
      error: false,
    };
  }

  updateProfilePicturePath() { //TODO
    alert("Just kidding, you can't upload pictures yet!")
  }

  submitEmployerProfileUpdates = async () => {
    console.log("Attempting to update employer profile");
    const response = fetch("http://104.196.152.154:5000/api/v1/editProfile/recruiter", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
  }).then(result => {
      console.log(result)
  });

    if (response.ok) {
      this.setState({ submitted: true }); // change this later
      console.log("Successfully updated employer profile");
    } else {
      //TODO: add different error cases
        //400 BAD REQUEST if request body formatted incorrectly, string too long
        //500 INTERNAL SERVER ERROR for internal error (db down)
      this.setState({ error: true });
      console.log("Failed to update employer profile");
    }
    console.log(this.state);
  };

  render = () => {

    return (
      <div className="employerprofile_container">
        <div className="card">
            <div className="subtitle">Customize Your Employer Profile </div>
          
            { this.state.submitted && <div>Your changes have been saved.</div> }
            { this.state.error && <div>Your changes could not be saved. Please try again</div> }

            <div className = "center">
                <img src={profilePic} alt="your pic here" style={{ width: "150px", height: "150px" }} />
                <Button text = "Upload Picture" 
                    onClick = {this.updateProfilePicturePath}
                />
            </div>
                
        <TextField
            id="company"
            label="Company"
            value={this.state.company}
            margin="normal"
            fullWidth
            variant="outlined"
            onChange={e => this.setState({ company: e.target.value })}
        />
    
    
        <TextField
            id="title"
            label="Title"
            value={this.state.title}
            margin="normal"
            fullWidth
            variant="outlined"
            onChange={e => this.setState({ title: e.target.value })}
        />

        <TextField
        id="bio"
        label="About Us"
        helperText="Feel free to enter your company description here"
        value={this.state.bio}
        margin="normal"
        fullWidth
        variant="outlined"
        onChange={e => this.setState({ bio: e.target.value })}
        />


          <div className="centerdiv">
            <Button
              className="btn_blue"
              text="Save Changes"
              onClick={this.submitEmployerProfileUpdates}
            />
          </div>
        </div>
      </div>
    );
  };
}

export default EmployerProfile;
