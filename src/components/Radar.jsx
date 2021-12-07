import React, { Component } from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import PropTypes from "prop-types";

class RadarGraph extends Component {
    render () {
        // get data and kind property from props by using destructuring to avoid to write this.props.performance

      const data = this.props.dataPerf.data
      const kind = this.props.dataPerf.kind
      console.log(this.props.dataPerf)
      let userData = [];
      /**
       * This loop allow us to format props data to new format
       */
for (const prop in data){
  console.log(data[prop])
  userData.splice(0,0, {
    subject: kind[data[prop].kind],
    A: data[prop].value,
    fullMark: 300
   
  })
  
}

console.log(userData)

        return (
          <div className="radarGraph">
            <ResponsiveContainer width="100%" height="100%" margin="5px" >
                <RadarChart 
                    cx="50%" 
                    cy="50%" 
                    data={userData}
                    outerRadius={"70%"}  
                >
                    <PolarGrid radialLines={false}/>
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
        )
    }
}

Performance.propTypes = {
    data: PropTypes.array,
    kind: PropTypes.object
}


export default RadarGraph;