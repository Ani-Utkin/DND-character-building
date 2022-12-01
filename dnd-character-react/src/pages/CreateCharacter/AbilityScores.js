import React from "react";

export default class AbilityScores extends React.Component{


    constructor(props){
        
        super(props);

        this.state = {
            str: 0,
            dex: 0,
            con: 0,
            int: 0,
            wis: 0,
            char: 0,

            strMod: 0,
            dexMod: 0,
            conMod: 0,
            intMod: 0,
            wisMod: 0,
            charMod: 0,
        };

        this.onSubmit = this.onSubmit.bind(this)
        this.modifierAdjuster = this.modifierAdjuster.bind(this);

        
    }

    onSubmit(event){

        event.preventDefault();

        this.setState({

            str: event.target[0].value,
            dex: event.target[1].value,
            con: event.target[2].value,
            int: event.target[3].value,
            wis: event.target[4].value,
            char: event.target[5].value,

        });

        this.setState({
            strMod: this.modifierAdjuster(event.target[0].value),
            dexMod: this.modifierAdjuster(event.target[1].value),
            conMod: this.modifierAdjuster(event.target[2].value),
            intMod: this.modifierAdjuster(event.target[3].value),
            wisMod: this.modifierAdjuster(event.target[4].value),
            charMod: this.modifierAdjuster(event.target[5].value),
        });

    }
       

    modifierAdjuster = (score) => {
        
        score = parseInt(score);

        switch(true){

            case (score === 1):
                return -5;

            case (score >= 2 && score <= 3):
                return -4;
                
            case (score >= 4 && score <= 5):
                return -3;

            case (score >= 6 && score <= 7):
                return -2;

            case (score >= 8 && score <= 9):
                return -1;

            case (score >= 10 && score <= 11):
                return 0;

            case (score >= 12 && score <= 13):
                return 1;

            case (score >= 14 && score <= 15):
                return 2;

            case (score >= 16 && score <= 17):
                return 3;

            case (score >= 18 && score <= 19):
                return 4;

            case (score >= 20 && score <= 21):
                return 5;

            case (score >= 22 && score <= 23):
                return 6;

            case (score >= 24 && score <= 25):
                return 7;
            
            case (score >= 26 && score <= 27):
                return 8;
            
            case (score >= 28 && score <= 29):
                return 9;

            default:
                return 10;
        }
    }

    render(){
        return(
            <>
                <h1>AbilityScores</h1>

                <form onSubmit={this.onSubmit}>
                    <label>
                        Strength:
                        <input name="str" type="number" defaultValue={this.state.str} />
                    </label>

                    <label>
                        Dexterity:
                        <input name="dex" type="number" defaultValue={this.state.dex} />
                    </label>

                    <label>
                        Constitution:
                        <input name="con" type="number" defaultValue={this.state.con} />
                    </label>

                    <label>
                        Intelligence:
                        <input name="int" type="number" defaultValue={this.state.int} />
                    </label>

                    <label>
                        Wisdom:
                        <input name="wis" type="number" defaultValue={this.state.wis} />
                    </label>
                    <label>
                        Charisma:
                        <input name="char" type="number" defaultValue={this.state.char}/>
                    </label>

                    <button type="submit">Submit</button>
                </form>

                <div><span>{this.state.str}</span>{" "}<span>{this.state.strMod}</span></div>
                <div><span>{this.state.dex}</span>{" "}<span>{this.state.dexMod}</span></div>
                <div><span>{this.state.con}</span>{" "}<span>{this.state.conMod}</span></div>
                <div><span>{this.state.int}</span>{" "}<span>{this.state.intMod}</span></div>
                <div><span>{this.state.wis}</span>{" "}<span>{this.state.wisMod}</span></div>
                <div><span>{this.state.char}</span>{" "}<span>{this.state.charMod}</span></div>

            </>
        );
    }

}