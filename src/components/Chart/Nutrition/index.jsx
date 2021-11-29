
import { Component } from "react"
import Calorie from "../../../assets/calories-icon.svg"
import Protein from "../../../assets/protein-icon.svg"
import Carbs from  "../../../assets/carbs-icon.svg"
import Fat from "../../../assets/fat-icon.svg"



class Nutrition extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: {},


        }
    }
 

 
    render() {
        console.log("render")
        const {userInfos,id} = this.props.data

         console.log(this.props.data)
        const firstName = userInfos ? userInfos.firstName:"h"
        console.log("Name : " + firstName)

         
 
        return (
            <div className="nutrition">
            hello{id}
        </div>
        )
    }
}

  

export default Nutrition;