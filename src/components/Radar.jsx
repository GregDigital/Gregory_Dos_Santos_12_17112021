import React, { Component } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

class RadarGraph extends Component {
  render() {
    /**
     * @param {object} data
     *  @param {object} kind
     */

    const data = this.props.dataPerf.data;
    const kind = this.props.dataPerf.kind;
    console.log(kind);

    /**
     * @returns {array} userData array containing the values ​​subject, A, fullMark
     */
    let userData = [];

    // the loop below allows you to iterate over an object

    for (const prop in data) {
      userData.splice(0, 0, {
        subject: kind[data[prop].kind],
        A: data[prop].value,
        fullMark: 300,
      });
    }

    return (
      <div className="radarGraph">
        <ResponsiveContainer width="100%" height="100%" margin="5px">
          <RadarChart cx="50%" cy="50%" data={userData} outerRadius={"70%"}>
            <PolarGrid radialLines={false} />
            <PolarAngleAxis
              dataKey="subject"
              stroke="white"
              dy={4}
              tickLine={false}
              tick={{
                fontSize: 14,
                fontWeight: 500,
                margin: 5,
              }}
            />
            <Radar name="Mike" dataKey="A" fill="#FF0101" fillOpacity={0.7} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

RadarGraph.propTypes = {
  data: PropTypes.number,
  kind: PropTypes.object,
};

export default RadarGraph;
