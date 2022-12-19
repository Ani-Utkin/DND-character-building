import {useState} from "react";
import "./ScoresForm.css";
import AbilityScores from "./AbilityScores";

const ScoresForm = () => {

    var [firstPrior, setPrior] = useState("");
    var [secPrior, setSecPrior] = useState("");

    var ab = {
        "charisma": 0,
        "wisdom": 0,
        "intelligence": 0,
        "strength": 0,
        "dexterity": 0,
        "constitution": 0
    };

    // var dice_rolls = [
    //     "../../images/dice_sides_1.png",
    //     "../../images/dice_sides_2.png",
    //     "../../images/dice_sides_3.png",
    //     "../../images/dice_sides_4.png",
    //     "../../images/dice_sides_5.png",
    //     "../../images/dice_sides_6.png"
    // ];


    const diceDisplay = () =>{
        return (
            <>
                <span><img width={100} height={100} alt="side of a die" src={require("../../images/dice_sides_1.png")}/></span>
                <span><img width={100} height={100} alt="side of a die" src={require("../../images/dice_sides_1.png")}/></span>
                <span><img width={100} height={100} alt="side of a die" src={require("../../images/dice_sides_1.png")}/></span>
                <span><img width={100} height={100} alt="side of a die" src={require("../../images/dice_sides_1.png")}/></span>
            </>
        );
    }

    const handleStat1Change = (e) =>{
        setPrior(e.target.value);
    }

    const handleStat2Change = (e) =>{
        setSecPrior(e.target.value);
    }
    
    return(

        <>
            <h1>Ability Scores</h1>
            <section>
                <form>


                    <div className="priorities">

                        <label>Add 1st Priority
                            <select onChange={handleStat1Change}>
                                <option value={firstPrior}>---- Select Stat ----</option>
                                {Object.keys(ab).map((stat, value) => <option key={stat} value={stat}>{stat}</option>)}
                            </select>
                        </label>

                        <label style={{marginLeft:100}}>Add 2nd Priority
                            <select onChange={handleStat2Change}>
                                <option value={secPrior}>---- Select Stat ----</option>
                                {Object.keys(ab).map((stat, value) => <option key={stat} value={stat}>{stat}</option>)}
                            </select>
                        </label>
                    </div>

                    <div>
                        {diceDisplay()}
                    </div>


                    <div>
                        <button>Roll</button>
                    </div>


                </form>

                <AbilityScores />
                
            </section>
        </>
    );
}

export default ScoresForm;