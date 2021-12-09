

import Nutrition from "../components/Nutrition"
import { Component } from "react"

import Score from "../components/Score";
import Radar from "../components/Radar"
import Activity from "../components/Activity"
import AverageActivity from "../components/AverageActivity";


class User extends Component {
    constructor(props) {
        super(props)
        this.state = {


        }
    }
 

 
    render() {
       
       
        const {userInfos} = this.props.data
        const firstName = userInfos ? userInfos.firstName:"h"
  
 
        return (
            <div className="userContent">
                <div className="userContentTitle">
                <h1>Bonjour <span>{firstName}</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                <div className="userContent_activity_nutrition">
                <Activity  activity={this.props.activity} />
                <Nutrition data={this.props.data} />
              
                </div>
                <div className="userContent_score">
                <AverageActivity session={this.props.session} />
                <Radar dataPerf={this.props.dataPerf}/>
                <Score data={this.props.data}/>
                </div>
            </div>
        )
    }
}

  

export default User;

