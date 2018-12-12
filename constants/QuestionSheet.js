import React from 'react';

/**
 * IDEA:
 * This class carries all the questions and alll multiple choices. Furthermore you can 
 * get the questions and the  multiple choices with get methods.
 */
export class QuestionSheetClass extends React.Component{

    /**
     * IDEA:
     * this variable holds all the informations to the stations
     */
    Infos = {
        Station1: 'Die Festung war während 50 Jahren – von 1941 bis 1991 – streng geheim damit niemand einen Angriff auf diese planen konnte. Inzwischen weiss man, dass viele Bewohner der Region und sogar manche Touristen darüber Bescheid wussten oder zumindest die Präsenz «von etwas Militärischem» vermuteten. Es sagte aber Niemand etwas, weil sie nichts über die Verteidigungsstrategie der Schweiz verraten wollten. Um die Festung möglichst geheim zu behalten, hat die Armee die Scharten, die ansonsten von der Strasse aus ersichtlich sind, verdeckt und beim Eingang der Festung ein Tarnhaus angebracht.',
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
     * this variable holds all questions set by the administrator. They can be modified here and it get
     * automatically adjusted in the StationScreens and SubmittedStationScreens
     */
    Questions = {
                Station1: 'Aus welchem Grund war es besonders schwer den Standort der Festung während des Zweiten Weltkriegs geheim zu behalten? Weil...',
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
     * this variable holds all solutions multiple choices for A
     */
    AnswersA = {
        Station1: "sich ein Hotelbetrieb und ein Seebad in der Nähe befanden.",
        Station2: 'Kopp',
        Station3: 'Bangkok',
        Station4: '1.43cm',
        Station5: '20',
        Station6: 'Golf',
        Station7: '1903',
        Station8: '252cm',
        Station9: '10',
        Station10: "35'899",
    };

    /**
     * IDEA:
     * this variable holds all solutions multiple choices for B
     */
    AnswersB = {
        Station1: "sich viele Ausländer in der Region aufhielten.",
        Station2: 'Calmy-Rey',
        Station3: 'Taipeh',
        Station4: '1.65cm',
        Station5: '8',
        Station6: 'Cricket',
        Station7: '1882',
        Station8: '272cm',
        Station9: '7',
        Station10: "721'985",
    };

    /**
     * IDEA:
     * this variable holds all solutions multiple choices for C
     */
    AnswersC = {
        Station1: "ein englischer Spion die Festung entdeckt hatte.",
        Station2: 'Dreifuss',
        Station3: 'Jakarta',
        Station4: '2.54cm',
        Station5: '11.25',
        Station6: 'Polo',
        Station7: '1913',
        Station8: '247cm',
        Station9: '13',
        Station10: "1'001'582",
    };

    /**
     * IDEA:
     * this variable holds all solutions multiple choices for D
     */
    AnswersD = {
        Station1: "die Festung direkt an einer Strasse liegt.",
        Station2: 'Metzler',
        Station3: 'Kingston',
        Station4: '6.37cm',
        Station5: '6',
        Station6: 'Schach',
        Station7: '1856',
        Station8: '280cm',
        Station9: '20',
        Station10: "101'312",
    };

    /**
     * IDEA: 
     * this function is here to be able reading out the multiple Choice of A everytime and from everywhere in the app
     * @param {stationNumber is a integer between 1 and the number of Stations in the quiz} StationNumber 
     */
    getAnswerA(StationNumber){
        switch(StationNumber){
            case 1:
                return this.AnswersA.Station1;
            case 2:
                return this.AnswersA.Station2;
            case 3:
                return this.AnswersA.Station3;
            case 4:
                return this.AnswersA.Station4;
            case 5:
                return this.AnswersA.Station5;
            case 6:
                return this.AnswersA.Station6;
            case 7:
                return this.AnswersA.Station7;
            case 8:
                return this.AnswersA.Station8;
            case 9:
                return this.AnswersA.Station9;
            case 10:
                return this.AnswersA.Station10;
            default:
                return 'This stationnumber does not exist!'
        }
    };

     /**
     * IDEA: 
     * this function is here to be able reading out the multiple Choice of B everytime and from everywhere in the app
     * @param {stationNumber is a integer between 1 and the number of Stations in the quiz} StationNumber 
     */
    getAnswerB(StationNumber){
        switch(StationNumber){
            case 1:
                return this.AnswersB.Station1;
            case 2:
                return this.AnswersB.Station2;
            case 3:
                return this.AnswersB.Station3;
            case 4:
                return this.AnswersB.Station4;
            case 5:
                return this.AnswersB.Station5;
            case 6:
                return this.AnswersB.Station6;
            case 7:
                return this.AnswersB.Station7;
            case 8:
                return this.AnswersB.Station8;
            case 9:
                return this.AnswersB.Station9;
            case 10:
                return this.AnswersB.Station10;
            default:
                return 'This stationnumber does not exist!'
        }
    };

     /**
     * IDEA: 
     * this function is here to be able reading out the multiple Choice of C everytime and from everywhere in the app
     * @param {stationNumber is a integer between 1 and the number of Stations in the quiz} StationNumber 
     */
    getAnswerC(StationNumber){
        switch(StationNumber){
            case 1:
                return this.AnswersC.Station1;
            case 2:
                return this.AnswersC.Station2;
            case 3:
                return this.AnswersC.Station3;
            case 4:
                return this.AnswersC.Station4;
            case 5:
                return this.AnswersC.Station5;
            case 6:
                return this.AnswersC.Station6;
            case 7:
                return this.AnswersC.Station7;
            case 8:
                return this.AnswersC.Station8;
            case 9:
                return this.AnswersC.Station9;
            case 10:
                return this.AnswersC.Station10;
            default:
                return 'This stationnumber does not exist!'
        }
    };


     /**
     * IDEA: 
     * this function is here to be able reading out the multiple Choice of D everytime and from everywhere in the app
     * @param {stationNumber is a integer between 1 and the number of Stations in the quiz} StationNumber 
     */
    getAnswerD(StationNumber){
        switch(StationNumber){
            case 1:
                return this.AnswersD.Station1;
            case 2:
                return this.AnswersD.Station2;
            case 3:
                return this.AnswersD.Station3;
            case 4:
                return this.AnswersD.Station4;
            case 5:
                return this.AnswersD.Station5;
            case 6:
                return this.AnswersD.Station6;
            case 7:
                return this.AnswersD.Station7;
            case 8:
                return this.AnswersD.Station8;
            case 9:
                return this.AnswersD.Station9;
            case 10:
                return this.AnswersD.Station10;
            default:
                return 'This stationnumber does not exist!'
        }
    };

    /**
     * IDEA: 
     * this function is here to be able reading out the questions everytime and from everywhere in the app
     * @param {stationNumber is a integer between 1 and the number of Stations in the quiz} StationNumber 
     */
    getQuestion(StationNumber){
        switch(StationNumber){
            case 1:
                return this.Questions.Station1;
            case 2:
                return this.Questions.Station2;
            case 3:
                return this.Questions.Station3;
            case 4:
                return this.Questions.Station4;
            case 5:
                return this.Questions.Station5;
            case 6:
                return this.Questions.Station6;
            case 7:
                return this.Questions.Station7;
            case 8:
                return this.Questions.Station8;
            case 9:
                return this.Questions.Station9;
            case 10:
                return this.Questions.Station10;
            default:
                return 'This stationnumber does not exist!'
        }
    };

    /**
     * IDEA: 
     * this function is here to be able reading out the info texts everytime and from everywhere in the app
     * @param {stationNumber is a integer between 1 and the number of Stations in the quiz} StationNumber 
     */
    getInfo(StationNumber){
        switch(StationNumber){
            case 1:
                return this.Infos.Station1;
            case 2:
                return this.Infos.Station2;
            case 3:
                return this.Infos.Station3;
            case 4:
                return this.Infos.Station4;
            case 5:
                return this.Infos.Station5;
            case 6:
                return this.Infos.Station6;
            case 7:
                return this.Infos.Station7;
            case 8:
                return this.Infos.Station8;
            case 9:
                return this.Infos.Station9;
            case 10:
                return this.Infos.Station10;
            default:
                return 'This stationnumber does not exist!'
        }
    };
}

/**
 * IDEA:
 * Make an instance of this class such that we can export this for an easier access from all screens without creating always an instance to get access to the methods and values
 */
const QuestionSheet = new QuestionSheetClass();

// export this instance to reuse the methods from other classes and files
export default QuestionSheet;
