import {useState, useEffect} from "react";

const ScoresForm = () => {

    var [charisma, setCharisma] = useState(0);
    var [wisdom, setWisdom] = useState(0);
    var [intelligence, setIntelligence] = useState(0);
    var [strength, seStrength] = useState(0);
    var [dexterity, setDexterity] = useState(0);
    var [constitution, setConstitution] = useState(0);

    var [firstPrior, setPrior] = useState("");
    var [secPrior, setSecPrior] = useState("");

    var ab = ["charisma", "wisdom", "intelligence", "strength", "dexterity", "constitution"];

    const handleStat1Change = (e) =>{
        setPrior(e.target.value);
    }

    const handleStat2Change = (e) =>{
        setSecPrior(e.target.value);
    }
    
    return(

        <>
            <h1>Ability Scores</h1>
            <form>
                <div>
                    <label>Add 1st Priority
                        <select onChange={handleStat1Change}>
                            <option value={firstPrior}>---- Select Stat ----</option>
                            {ab.map((stat) => <option key={stat} value={stat}>{stat}</option>)}
                        </select>
                    </label>

                    <label>Add 2nd Priority
                        <select onChange={handleStat2Change}>
                            <option value={secPrior}>---- Select Stat ----</option>
                            {ab.map((stat) => <option key={stat} value={stat}>{stat}</option>)}
                        </select>
                    </label>
                </div>

                <div>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                </div>
                <div>
                    <button>Roll</button>
                </div>
            </form>

            <div>
                <ul>
                    <li>
                        <span>Charisma: </span>
                        <span>{charisma}</span>
                    </li>
                    <li>
                        <span>Wisdom: </span>
                        <span>{wisdom}</span>
                    </li>
                    <li>
                        <span>Intelligence: </span>
                        <span>{intelligence}</span>
                    </li>
                    <li>
                        <span>Strength: </span>
                        <span>{strength}</span>
                    </li>
                    <li>
                        <span>Dexterity: </span>
                        <span>{dexterity}</span>
                    </li>
                    <li>
                        <span>Constitution: </span>
                        <span>{constitution}</span>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default ScoresForm;