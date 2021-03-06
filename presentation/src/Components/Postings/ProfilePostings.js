import React from "react";
import Posting from "./Posting";
import { getRecruiterPostings } from "../../Util/Requests";

import { Grid } from "@material-ui/core";

import "../../Styles/posting.css";

class ProfilePostings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startQuiz: 0,
      postings: [],
      doneQuizzes: []
    };
  }
  componentDidMount() {
    getRecruiterPostings(this.props.uid).then(result => {
      if (result !== -1) {
        this.setState({ postings: result.postings });
      }
    });
    // getUserHistory(this.props.uid, 0).then(result => {
    //   var doneQuizzes = this.state.doneQuizzes;
    //   for (let i = 0; i < result.scores.length; i++) {
    //     doneQuizzes.push(result.scores[i].quizId);
    //   }
    
    // });
    // this.setState({ doneQuizzes: [17] });
    // this.setState({
    //   postings: [
    //     {
    //       postingId: 1,
    //       title: "Test Posting",
    //       recruiterName: "",
    //       description: "Get hired now!",
    //       stateOrProvince: "California",
    //       quizzes: [
    //         {
    //           quizId: 17,
    //           quizName: "3 Sample Bar Questions"
    //         }
    //       ]
    //     },
    //     {
    //       postingId: 2,
    //       title: "White & Case Legal Intern Fall 2020",
    //       recruiterName: "",
    //       description:
    //         "As a Legal Intern at White & Case you will work with the company's Deputy and General Counsel in many projects and will have a major impact on all departments company-wide.",
    //       stateOrProvince: "New York",
    //       quizzes: [
    //         {
    //           quizId: 17,
    //           quizName: "3 Sample Bar Questions"
    //         }
    //       ]
    //     }
    //   ]
    // });
  }
  renderPostings = () => {
    var postgrid = [];

    for (let i = 0; i < this.state.postings.length; i++) {
      postgrid.push(
        <Posting
          {...this.state.postings[i]}
          profile={true}
          doneQuizzes={this.state.doneQuizzes}
          clickRecruiter={this.clickRecruiter}
          clickStartQuiz={this.clickStartQuiz}
          updateQuizId={this.props.updateQuizId}
          updateProfileUid={this.props.updateProfileUid}
          size={12}
          key={i}
        />
      );
    }
    return postgrid;
  };

  render = () => {
    return (
      <div className="profile_stats">
        <Grid container item>
          {this.renderPostings()}
        </Grid>
      </div>
    );
  };
}

export default ProfilePostings;
