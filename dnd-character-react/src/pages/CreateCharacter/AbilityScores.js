import React, { Component } from 'react';

class AbilityScores extends Component{

    modifierAdjuster = (score) => {

        if(score === 0 || score === undefined) return 0;
        
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
        let {str, dex, con, int, wis, char, strMod, dexMod, conMod, intMod, wisMod, charMod, } = this.props;
        return(
            <>
                <div className='ability-scores'>

                <div className='scores'><h4>Strength</h4><span>{str}</span>{" "}<span>{strMod}</span></div>
                <div className='scores'><h4>Dexterity</h4><span>{dex}</span>{" "}<span>{dexMod}</span></div>
                <div className='scores'><h4>Constitution</h4><span>{con}</span>{" "}<span>{conMod}</span></div>
                <div className='scores'><h4>Intelligence</h4><span>{int}</span>{" "}<span>{intMod}</span></div>
                <div className='scores'><h4>Wisdom</h4><span>{wis}</span>{" "}<span>{wisMod}</span></div>
                <div className='scores'><h4>Charisma</h4><span>{char}</span>{" "}<span>{charMod}</span></div>

                </div>
            </>
        );
    }
}

AbilityScores.defaultProps = {
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


export default AbilityScores;
