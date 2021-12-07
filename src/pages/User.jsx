

import Nutrition from "../components/Nutrition"
import { Component } from "react"
import Datas from "../service/Datas";
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
       
       
        console.log("render")
        const {userInfos,id} = this.props.data

         console.log(this.props.data)
        const firstName = userInfos ? userInfos.firstName:"h"
        console.log("Name : " + firstName)

        console.log(this.props.dataPerf)
 
        return (
            <div className="userContent">
                <h1>Bonjour <span>{firstName}</span></h1>
           
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                
                <AverageActivity session={this.props.session} />
                <Radar dataPerf={this.props.dataPerf}/>
                <Score data={this.props.data}/>
                <Nutrition data={this.props.data} />
            </div>
        )
    }
}

  

export default User;

/*
import {Component} from 'react'

import Calorie from "../../assets/calories-icon.svg"
import Protein from "../../assets/protein-icon.svg"
import Carbs from  "../../assets/carbs-icon.svg"
import Fat from "../../assets/fat-icon.svg"
import Radar from "../../components/Chart/ChartRadar"
import Session from "../../components/Chart/Session"

class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: {},


        }
    }
 
    componentDidMount() {
        const { id } = this.props.match.params
        const fetchData = async () => {
            const response = await fetch(`http://localhost:4000/user/${id}`)
            const jsonResponse = await response.json()
            if (jsonResponse && jsonResponse.data){
                console.log(jsonResponse.data)
             this.setState({ users: jsonResponse?.data })
        }
    }
    fetchData()
}
 
    render() {
        console.log("render")
        const{ userInfos, keyData,id} = this.state.users

         console.log("state : " + this.state)
        const firstName = userInfos ? userInfos.firstName:"h"
        console.log("Name : " + firstName)
 
        return (
            <div className="userContent">
               
                <h1>Bonjour<span>{this.props.firstName}</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          
               
                <Radar />
                <Session />
            </div>
        )
    }
}

  

export default User;
*/


/*
   <div className="nutrition">
                    <div className="calories">
                     <img src={Calorie} alt="logo calorie"/>
                     <div className="infosNutri">
                      <p>{keyData.calorieCount}kCal</p>   
                      <span>Calories</span>
                     </div>
                    </div>
                    <div className="proteines">
                    <img src={Protein} alt="logo proteine"/>
                    <div className="infosNutri">
                    <p>{keyData.proteinCount}g</p>
                    <span>Proteine</span>
                    </div>
                    </div>
                    <div className="glucides">
                    <img src={Carbs} alt="logo glucides"/>
                    <div className="infosNutri">
                    <p>{keyData.carbohydrateCount}g</p>
                    <span>Glucides</span>
                    </div>
                    </div>
                    <div className="lipides">
                    <img src={Fat} alt="logo lipides"/>
                    <div className="infosNutri">
                    <p>{keyData.lipidCount}g</p>
                    <span>Lipides</span>
                    </div>

                    </div>
                </div>
*/