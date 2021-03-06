
/**
 * IDEA:
 * This class carries all the answers the user has given. Furthermore you can 
 * get and set the answers with the set and get methods.
 */
class AnswerSheetClass{

    /**
     * IDEA:
     * this variable holds all answers given by the user. They can be modified with the 
     * setAnswer() method and can be read with the getAnswer() method
     */
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
    };
    
    /**
     * IDEA:
     * this variable holds all solutions to the quizzes to be able to make a result screen
     */
    RightAnswers = {
        Station1: 'A',
        Station2: 'D',
        Station3: 'C',
        Station4: 'A',
        Station5: 'B',
        Station6: 'D',
        Station7: 'A',
        Station8: 'B',
        Station9: 'D',
        Station10: 'C',
    };

    /**
     * IDEA: 
     * this method is here to be able reading out the answer everytime and from everywhere in the app
     * @param {stationNumber is a integer between 1 and the number of Stations in the quiz} StationNumber 
     */
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
            default:
                return 'This stationnumber does not exist!'
        }
    };
    
    /**
     * IDEA:
     * this method is here to be able setting the answers everytime and from everywhere in the app 
     */
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
            default:
                return 'This stationnumber does not exist!'
        }
    };

    /**
     * IDEA: 
     * this method is here to be able reading out the right answer everytime and from everywhere in the app
     * @param {stationNumber is a integer between 1 and the number of Stations in the quiz} StationNumber 
     */
    getRightAnswer(StationNumber){
        switch(StationNumber){
            case 1:
                return this.RightAnswers.Station1;
            case 2:
                return this.RightAnswers.Station2;
            case 3:
                return this.RightAnswers.Station3;
            case 4:
                return this.RightAnswers.Station4;
            case 5:
                return this.RightAnswers.Station5;
            case 6:
                return this.RightAnswers.Station6;
            case 7:
                return this.RightAnswers.Station7;
            case 8:
                return this.RightAnswers.Station8;
            case 9:
                return this.RightAnswers.Station9;
            case 10:
                return this.RightAnswers.Station10;
            default:
                return 'This stationnumber does not exist!'
        }
    };

    /**
     * IDEA:
     * this variable is here to save the number of right answers given by the user
     */
    numberOfRightAnswers = 0;

    /**
     * IDEA:
     * set method for the variable 'numberOfRightAnswers'
     * @param {integer which is the number of right answers given by the user} nora 
     */
    setNumberOfRightAnswers(nora){
        this.numberOfRightAnswers = nora;
    };

    /**
     * IDEA:
     * get method for the variable 'numberOfRightAnswers'
     */
    getNumberOfRightAnswers(){
        return this.numberOfRightAnswers;
    };
}

/**
 * IDEA:
 * Make an instance of this class such that we can export this for an easier access 
 * from all screens without creating always an instance to get access to the methods and values
 */
const AnswerSheet = new AnswerSheetClass();

// export this instance to reuse the methods from other classes and files
export default AnswerSheet;
