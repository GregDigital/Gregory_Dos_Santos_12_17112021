
import React, { Component } from 'react'

import PropTypes from "prop-types";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';





class AverageActivity extends Component {
    render () {
      // get averageSession property from props by using destructuring to avoid to write this.props
     console.log(this.props.session)
   
   


     const data = this.props.session.sessions
console.log(data)




     /**
      * This loop allow us to format props data to new format
      */


        return (
          <div className="average">
          <h3 className="averageTitle">Durée moyenne des sessions</h3>
          <ResponsiveContainer
            className="lineChart-container" 
            width="100%" 
            height="100%"
          >
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 10,
              bottom: 5,
            }}
          >
            <XAxis 
              dataKey="day" 
              stroke="rgba(255, 255, 255, 0.6)"
              tick={{ fontSize: 14, fill: "rgba(255, 255, 255, 0.5)"}}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
          domain={[0, "dataMax + 20"]}
              hide={true}
            />
            <Tooltip 
              content={<CustomTooltip />}
              className="tooltipLineChart"
              cursor={{
                stroke: "rgba(0, 0, 0, 0.1)",
                strokeWidth: 32,
              }}
            />
            <Line
              type="monotone" 
              dataKey="sessionLength" 
              stroke="rgba(255, 255, 255, 0.6)"
              width="500px"
              dot={false}
              activeDot={{ stroke: '#FFFFFF33', strokeWidth: 10, r: 5 }}
              strokeDashArray="4"
            />
          </LineChart>
        </ResponsiveContainer>
</div>
        )
    }
}



const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
};

export default AverageActivity