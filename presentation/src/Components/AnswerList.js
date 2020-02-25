import React from "react";
import Answer from "./Answer";

import { Grid } from "@material-ui/core";


import "./studentregistration.css";

/**
 * Student Registration card for the student user.
 * Includes logic to send/receive requests to the flask server
 */

//https://codepen.io/Daanist/pen/LjLoWV

class AnswerList extends React.Component {
  render = () => {
    var answers = []
    for (let i = 0; i < this.props.question.answers.length; i++) {
      answers.push(<Answer choice={i} handler={this.props.handler} answer={this.props.question.answers[i]} key={i}/>) //key 
    }
    return(
      // <div>
        <Grid item xs={12} className="answer_grid">
        {answers}
        </Grid>
      // </div>
    )
  }
  
}
export default AnswerList;