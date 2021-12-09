
import { Component } from "react"
import Calorie from "../assets/calories-icon.svg"
import Protein from "../assets/protein-icon.svg"
import Carbs from  "../assets/carbs-icon.svg"
import Fat from "../assets/fat-icon.svg"
import PropTypes from "prop-types";
class Nutrition extends Component {
    
 

 
    render() {
  
        const {keyData} = this.props.data
      
        const calorieCount= keyData ? keyData.calorieCount:"#"
        const proteinCount = keyData ? keyData.proteinCount:"#"
        const carbohydrateCount = keyData ? keyData.carbohydrateCount:"#"
        const lipidCount = keyData ? keyData.lipidCount:"#"
        
 
        return (
            <div className="nutrition">
           <div className="calories contentNutri">
                     <img src={Calorie} alt="logo calorie"/>
                     <div className="infosNutri">
                      <p>{calorieCount}kCal</p>   
                      <span>Calories</span>
                     </div>
                    </div>
                    <div className="proteines contentNutri">
                    <img src={Protein} alt="logo proteine"/>
                    <div className="infosNutri">
                    <p>{proteinCount}g</p>
                    <span>Proteine</span>
                    </div>
                    </div>
                    <div className="glucides contentNutri">
                    <img src={Carbs} alt="logo glucides"/>
                    <div className="infosNutri">
                    <p>{carbohydrateCount}g</p>
                    <span>Glucides</span>
                    </div>
                    </div>
                    <div className="lipides contentNutri">
                    <img src={Fat} alt="logo lipides"/>
                    <div className="infosNutri">
                    <p>{lipidCount}g</p>
                    <span>Lipides</span>
                    </div>

                    </div>
        </div>
        )
    }
}

Nutrition.propTypes = {
    keyData: PropTypes.object
}

export default Nutrition;