import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/components/_score.scss";
import { PieChart, Pie, Cell } from "recharts";

class Score extends Component {
  render() {
    const { todayScore } = this.props.data;
    const pieData = [{ value: todayScore }, { value: 1 - todayScore }];
    return (
      <div className="divScore" position="relative">
        <h3 id="title_score" position="absolute">
          Score
        </h3>
        <PieChart width={240} height={240} className="pieChart">
          <Pie
            className="pie"
            data={pieData}
            cx={"45%"}
            cy={"45%"}
            fill="red !important"
            paddingAngle={2}
            dataKey="value"
            innerRadius={68}
            outerRadius={75}
            startAngle={100}
            endAngle={460}
          >
            <Cell className="cell" fill={"#ff0101"} cornerRadius="60%" />
            <Cell
              className="cell"
              fill={"transparent"}
              cornerRadius="60%"
              margin={{
                top: 50,
                bottom: 50,
              }}
            />
          </Pie>
        </PieChart>

        <div className="text-PieChart">
          <div id="score">
            <div id="box-content">
              <p>
                <span id="percentage">{todayScore * 100}%</span>
                <br /> de votre objectif
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Score.propTypes = {
  todayScore: PropTypes.number,
};

export default Score;
