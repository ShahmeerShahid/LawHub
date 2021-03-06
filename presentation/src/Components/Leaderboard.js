import React from "react";
import LeaderboardChart from "./Stats/LeaderboardChart";

import { BarChart, Bar } from "recharts";

import "../Styles/leaderboard.css"; //TODO

const data = [
  {
    name: "John Smith",
    uv: 2500
  },
  {
    name: "Harry Gunther",
    uv: 4000
  },
  {
    name: "Amanda Lee",
    uv: 1500
  }
];

const LeaderboardBar = props => {
  const { fill, x, y, width, height, name } = props;

  return (
    <svg height="300" width="1200">

      <rect x={x} y={y + 50} width={width} height={height} fill={fill} />
      <text x={x + (width / 2)} y={y + 80}  fill="white" fontSize="28px" fontWeight="500" textAnchor="middle">
        {name.toUpperCase()}
      </text>
    </svg>
    // <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />
  );
};

class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: this.props.uid,
      sessId: this.props.sessId
    };
  }

  componentWillMount() {
    // fetch user history here
    // getUserHistory(this.props.sessId, this.props.uid).then(data => {
    // this.setState({
    // history: data
    // });
    // })
    this.setState({
      history: [
        {
          userName: "Harry Gunther",
          numQuizzes: 123,
          score: 0.84
        },
        {
          userName: "John Smith",
          numQuizzes: 156,
          score: 0.83
        },
        {
          userName: "Amanda Lee",
          numQuizzes: 120,
          score: 0.82
        },
        {
          userName: "Barry Gunther",
          numQuizzes: 133,
          score: 0.82
        },
        {
          userName: "Mandy Collins",
          numQuizzes: 101,
          score: 0.81
        }
      ]
    });
  }

  render = () => {
    return (
      <div className="leaderboard_container">
        <div className="lb_title">LawHub Leaderboard</div>

        <div className="center">
          <BarChart width={1100} height={300} data={data}>
            <Bar
              dataKey="uv"
              fill="#E49C2F"
              label={"Hi"}
              shape={<LeaderboardBar />}
            />
            {/* <Tooltip/> */}
          </BarChart>
        </div>

        <div>
          <LeaderboardChart
            col1="User"
            col2="Quizzes Attempted"
            col3="Average Score"
            data={this.state.history}
          />
        </div>
      </div>
    );
  };
}

export default Leaderboard;
