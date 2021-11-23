import {Component} from 'react'
import Calorie from "../../assets/calories-icon.svg"
import Protein from "../../assets/protein-icon.svg"
import Carbs from  "../../assets/carbs-icon.svg"
import Fat from "../../assets/fat-icon.svg"

class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ddata: {"id":12,"userInfos":{"firstName":"Karl","lastName":"Dovineau","age":31},"todayScore":0.12,"keyData":{"calorieCount":1930,"proteinCount":155,"carbohydrateCount":290,"lipidCount":50}},
        }
    }
 
    componentDidMount() {
        const { id } = this.props.match.params
 
        fetch(`http://localhost:4000/user/?id=${id}`)
        .then((response) => response.json())
        .then((jsonResponse) => {
            this.setState({ ddata: jsonResponse.data })
        })
    }
 
    render() {
        const { ddata } = this.state
      
   const {id, userInfos, todayScore, keyData} = ddata
        
 
        return (
            <div className="userContent">
                <h1>Bonjour <span>{userInfos.firstName}</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
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
            </div>
        )
    }
}

  

export default User;

