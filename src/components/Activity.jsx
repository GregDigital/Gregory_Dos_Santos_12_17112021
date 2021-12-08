
import React, { Component } from 'react';
import PropTypes from "prop-types";
import {  BarChart, 
          Bar, 
          XAxis, 
          YAxis, 
          CartesianGrid, 
          Tooltip,
          ResponsiveContainer } from 'recharts';



class Activity extends Component {

  render() {
   
    const data = this.props.activity.sessions


    return (
      <div className="activity-chart-container">
        <div className="header-barChart">
        <h3 className="activityTitleh">Activité quotidienne</h3>
        <div className="legend">
          <div id="poids">
            <span className="point black"></span>
            <h4>Poids (kg)</h4>
          </div>
          <div id="calories">
            <span className="point red"></span>
            <h4>Calories brûlées (kCal)</h4>
          </div>
        </div>
        </div>
        <div className="activity">
      <ResponsiveContainer 
        width="100%"
        height="100%"
        >
        <BarChart
        className="barChart"
        margin={{
          top: 20, right: 0, bottom: 30, left: 0,
        }}
          legendType="circle"
          data={data}
          barGap={8}
        >
          <CartesianGrid
          vertical={false}
          strokeDasharray="3 3" />
          <XAxis 
            dy={20}
            dataKey="day" 
            tick={{ fontSize: 18, fill: '#74798c'}}
            tickLine={false}
          />
          <YAxis
            orientation="right" 
            axisLine={false}
            tick={{ fontSize: 18, fill: '#74798c', strokeWidth: 6}}
            tickLine={false}
            dx={20}
            interval="number"
              allowDecimals={false}
            dataKey="kilogram"
            domain={[0, "auto"]}
            yAxisId="kg"
            />
          <YAxis
           orientation="right"
            tick={{ fontSize: 18, fill: '#74798c', strokeWidth: 6}}
            tickLine={false}
            dataKey="calories"
            domain={[0, "auto"]}
            yAxisId="kCal"
            hide={true}
            />
          
          <Tooltip 
            cursor={{fill: "#C4C4C4", opacity:"0.5"}}
            content={<CustomTooltip />}
          />
          <Bar 
            dataKey="calories" 
            fill="#282D30" 
            radius={[10, 10, 0, 0]} 
            barSize={9}
            yAxisId="kCal"
            />
          <Bar 
            yAxisId="kg" // Link data to the proper YAxis
            dataKey="kilogram" 
            fill="#E60000" 
            radius={[10, 10, 0, 0]}
            barSize={9} 
            
          />
        </BarChart>
      </ResponsiveContainer>
      </div>
      </div>
    )
  }
}

Activity.propTypes = {
  sessions: PropTypes.object,
}



const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload) {
    return (
      <div className="custom-tooltip-activity">
        <p className="label">{`${payload[1].value} kg`}</p>
        <p className="label">{`${payload[0].value} Kcal`}</p>
      </div>
    );
  }

  return null;
};

export default Activity