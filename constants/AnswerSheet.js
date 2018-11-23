import React from 'react';

export class AnswerSheetClass extends React.Component{
    Answers = {
                Station1: '',
                Station2: '',
                Station3: '',
                Station4: '',
                Station5: '',
                Station6: '',
                Station7: '',
                Station8: '',
                Station9: '',
                Station10: '',
                Station11: '',
                Station12: '',
            };
    
    // this function is here to be able reading out the answer everytime and from everywhere in the app
    getAnswer(StationNumber){
        switch(StationNumber){
            case 1:
                return this.Answers.Station1;
            case 2:
                return this.Answers.Station2;
            case 3:
                return this.Answers.Station3;
            case 4:
                return this.Answers.Station4;
            case 5:
                return this.Answers.Station5;
            case 6:
                return this.Answers.Station6;
            case 7:
                return this.Answers.Station7;
            case 8:
                return this.Answers.Station8;
            case 9:
                return this.Answers.Station9;
            case 10:
                return this.Answers.Station10;
            case 11:
                return this.Answers.Station11;
            case 12:
                return this.Answers.Station12;
            default:
                return 'This stationnumber does not exist!'
        }
    }

    // this function is here to be able settin the answers everytime and from everywhere in the app
    setAnswer(StationNumber,Answer){
        switch(StationNumber){
            case 1:
                this.Answers.Station1=Answer;
                break;
            case 2:
                this.Answers.Station2=Answer;
                break;
            case 3:
                this.Answers.Station3=Answer;
                break;
            case 4:
                this.Answers.Station4=Answer;
                break;
            case 5:
                this.Answers.Station5=Answer;
                break;
            case 6:
                this.Answers.Station6=Answer;
                break;
            case 7:
                this.Answers.Station7=Answer;
                break;
            case 8:
                this.Answers.Station8=Answer;
                break;
            case 9:
                this.Answers.Station9=Answer;
                break;
            case 10:
                this.Answers.Station10=Answer;
                break;
            case 11:
                this.Answers.Station11=Answer;
                break;
            case 12:
                this.Answers.Station12=Answer;
                break;
            default:
                return 'This stationnumber does not exist!'
        }
    }
}

const AnswerSheet = new AnswerSheetClass();

export default AnswerSheet;
