import React from 'react';

/**
 * IDEA:
 * This class carries all the questions and alll multiple choices. Furthermore you can 
 * get the questions and the multiple choices with get methods.
 */
export class QuestionSheetClass extends React.Component{

    /**
     * IDEA:
     * this variable holds all the information texts to the stations
     */
    Infos = {
        HowTo: 'Die Festung Fürigen ist ein unterirdischer Bunker, der für die militärische Verteidigung der Schweiz 1941 – während des Zweiten Weltkrieges – gebaut wurde. Dieser Krieg wütete zwischen den Jahren 1939 und 1945. Es waren alle Nachbarländer der Schweiz am Krieg beteiligt. Die Schweiz war wie eine kleine neutrale Insel inmitten Europas. Obwohl die Schweiz nicht am Krieg beteiligt war, musste sie sich vor allfälligen Angriffen schützen. Aus diesem Grund wurden in den Schweizer Alpen viele Festungen gebaut. In der Festung Fürigen wohnten regelmässig Soldaten, um sich für den Ernstfall vorzubereiten. Heute gehört die Festung nicht mehr der Armee und dient als Museum. \n\nInzwischen haben es sich die Füchsin Finja und der Dachs Dario in der Festung gemütlich gemacht. Sie werden euch auf einen Rundgang in der Festung begleiten. So werdet ihr gemeinsam die wichtigsten Sachen über den Alltag der Soldaten entdecken, die hier früher ihren Militärdienst gemacht haben. \n\nViel Spass! ',
        Station1: 'Die Festung war 50 Jahre lang streng geheim, damit niemand einen Angriff auf diese planen konnte. Inzwischen weiss man, dass viele Bewohner der Region die Anwesenheit von «etwas Militärischem» vermuteten. Es sagte aber niemand etwas, weil sie nichts über die Verteidigungsstrategie der Schweiz verraten wollten. Um die Festung möglichst geheim zu behalten, hat die Armee die Scharten, die ansonsten von der Strasse aus ersichtlich sind, verdeckt. Beim Eingang der Festung hat man ein Tarnhaus gebaut. Auch Finja und Dario schützen den Eingang ihres Baus – zum Beispiel mit Laub. ',
        Station2: 'Hier seht ihr den Funkraum der Festung. Dieser diente zur Kommunikation zwischen der Festung und der Aussenwelt. Der Soldat, der hier arbeitete, leitete die von Aussen per Funk erhaltenen Informationen und Befehle an die Telefonzentrale bei der Truppenunterkunft weiter. Von der Telefonzentrale aus konnten wiederum diverse Räume der Festung erreicht werden. Für Dario und Finja ist die Kommunikation mit der Aussenwelt nicht so einfach. Wenn sie mit jemandem spielen wollen, müssen sie nach draussen gehen. ',
        Station3: 'In dieser Festung gibt es zwei Kanonen. Genauer gesagt handelt es sich um Befestigungskanonen aus dem Jahr 1939, die bis zu 12 km weit schiessen konnten. Das Geschosskaliber beträgt 7,5 cm. Es konnten bis zu 14 Schüsse pro Minute gefeuert werden. Die Aufgabe der Kanonen bestand darin, die Region zwischen der Enge von Stansstad bis zum Loppergrat zu bewachen und bei einem feindlichen Überfall zu verteidigen. Weil auf den Bergen immer mehr Leute wanderten, wurde der letzte Übungsschuss bereits 1947 – also vor über 70 Jahren – gefeuert. Finja und Dario kennen sich mit Kanonen nicht aus. Wenn sie sich verteidigen müssen, kämpfen sie nur mit ihren Zähnen und Krallen. ',
        Station4: 'Hier befindet ihr euch im ehemaligen Munitionsmagazin, das heute als Ausstellungsraum dient. Hier wurden alle Formen von Munition gelagert, die innerhalb der Festung benötigt wurden – von der Pistolenpatrone bis zum Kanonengeschoss. Die Munition wurde zu den Kampfständen mit Munitionskarren transportiert. ',
        Station5: 'Die grösste Herausforderung für das Leben innerhalb der Festung ist die Luftfeuchtigkeit, welche vor allem im Sommer sehr hoch ist. Feuchte Luft ist weder für die Soldaten noch für das Material innerhalb der Festung gut. Die Zufuhr von frischer Luft erfolgt über diesen Frischluftstollen. Im Hauptstollen der Festung befinden sich zahlreiche Wasserbecken. In diesen wird das Wasser, das durch die Luftfeuchtigkeit entsteht, eingesammelt und danach hinausgeführt. Finja und Dario macht die feuchte Luft nichts. ',
        Station6: 'Neben den zwei Kanonen verfügte die Festung über drei Maschinengewehrstände, welche der Nahverteidigung dienten. Die Maschinengewehre sind innerhalb der Festung so platziert, dass sie den Stollen vor Angriffen von der Strasse oder vom See aus schützen konnten. Das Militär baute Maschinengewehre aus dem Jahr 1911 ein, die bis zu 600 Schüsse pro Minute abfeuern konnten. Sie mussten mit Wasser gekühlt werden. ',
        Station7: 'Wenn ihr hinauf schaut, seht ihr einen Schacht, der zugleich als Notausgang und als auch als Zugang zum dritten Maschinengewehr, sowie zu einem Scheinwerfer diente. Der sogenannte Steigstollen ist 30 Meter lang. Drei Leitern führen nach oben. Der Scheinwerfer diente zur Nachtbeleuchtung von Zielen der Kanonen. Dario und Finja brauchen keine Beleuchtung. Denn sie können in der Nacht auch ohne Licht sehen. ',
        Station8: 'Hier befindet ihr euch im Herzen der Festung. In diesem Raum befinden sich der Luftentfeuchter und ein Filter, um die Luft von Kampfgas zu reinigen. Es gibt hier ebenfalls eine Werkstatt für kleine Reparaturen. Zudem seht ihr zwei sogenannte Notstromgruppen, die im Fall eines Stromausfalls zum Einsatz gekommen wären. Bei jeder Gruppe gibt es einen Dieselmotor, der den Strom erzeugte. Auch Generatoren stehen hier. Sie speicherten den Strom bis zum Gebrauch. Dario und Finja meiden den Maschinenraum. Sie ertragen den Krach nicht. ',
        Station9: 'Um die Wasserversorgung innerhalb der Festung jederzeit zu gewährleisten, wurde ein Wasserreservoir eingebaut, das sich oberhalb des Vorratsraumes befindet. Das Becken, das ihr auf dem Foto seht, kann bis zu 50’000 Liter Wasser fassen. Findet ihr auch, dass Finja und Dario einen traumhaften Swimmingpool haben? ',
        Station10: 'Auf diesem Stock haben die Soldaten und ihre Vorgesetzten geschlafen. Wusstet ihr, dass jeder Soldat seinen Schlafplatz mit einem seiner Kollegen teilen musste? Die Soldaten arbeiteten nämlich im Schichtbetrieb. Das heisst, dass jeweils ein Drittel der Soldaten auf Arbeit war, ein Drittel in Reserve und ein Drittel auf Ruhezeit. Um Platz zu sparen, wurden nur 52 Mannschaftsbetten eingebaut, sodass nur die Mannschaft schlafen konnte, die gerade auf Ruhezeit war. Dario und Finja schlafen am liebsten im Truppenraum. Dort können sie sich aneinander schmiegen, um sich gegenseitig warm zu geben. ',
    };

    /**
     * IDEA:
     * this variable holds all questions set by the administrator. They can be modified here and it get
     * automatically adjusted in the StationScreens and SubmittedStationScreens
     */
    Questions = {
                Station1: 'Aus welchem Grund war es besonders schwer, den Standort der Festung während des Zweiten Weltkriegs geheim zu behalten? ',
                Station2: 'Wieso befindet sich der Funkraum so nah am Eingang der Festung?',
                Station3: 'Welche Standorte befinden sich im Zielgebiet dieser Kanone?',
                Station4: 'Wieso wurde eine Druckschleuse zwischen dem Munitionsmagazin und der Truppenunterkunft gebaut?',
                Station5: 'Vor euch befindet sich ein Grobstaubfilter, der um 1960 – während des Kalten Krieges – eingebaut wurde. Wozu sollte dieser dienen?',
                Station6: 'Wieso wurde die Festung, die 1941 gebaut wurde, mit Maschinengewehren ausgerüstet, die zu diesem Zeitpunkt bereits 30 Jahre alt waren?',
                Station7: 'Wieso brauchte es zwangsläufig einen Notausgang?',
                Station8: 'Wozu dienen die Maschinen, die ihr in diesem Raum hört?',
                Station9: 'Woher stammte das Wasser für das Reservoir der Festung Fürigen?',
                Station10: 'Wie viele Betten gibt es insgesamt auf diesem Stock?',
    };
    
    /**
     * IDEA:
     * this variable holds all solutions multiple choices for A
     */
    AnswersA = {
        Station1: 'Ein Hotelbetrieb und ein Seebad befanden sich in der Nähe.',
        Station2: 'Weil hier ebenfalls die Ein- und Austritte der Soldaten kontrolliert wurden. ',
        Station3: 'Weggis und Rigi',
        Station4: 'wegen der Explosionsgefahr ',
        Station5: 'Um die Feuchtigkeit vom Berg aus der Frischluft herauszufiltern. ',
        Station6: 'Weil sich dieses Modell während des Ersten Weltkrieges besonders gut bewährt hatte. ',
        Station7: 'Für die Flucht im Fall eines Feuers oder Angriffes.',
        Station8: 'Sie generieren Strom für die Festung.',
        Station9: 'Vom Regenwasser, das eingesammelt wird. ',
        Station10: '52',
    };

    /**
     * IDEA:
     * this variable holds all solutions multiple choices for B
     */
    AnswersB = {
        Station1: 'Viele Ausländer hielten sich in der Region auf. ',
        Station2: 'Damit die Soldaten im Fall eines Innenbrandes weiterhin mit der Aussenwelt kommunizieren konnten.',
        Station3: 'Horw und Kastanienbaum',
        Station4: 'wegen der Überschwemmungsgefahr',
        Station5: 'Um allfällige Atompartikel aus der Frischluft herauszufiltern. ',
        Station6: 'Weil die Festungstruppen nur für dieses Modell geschult waren.',
        Station7: 'Als zweiten Eingang für die Besatzung.',
        Station8: 'Sie verteilen die Luft in die drei Bereiche der Festung.',
        Station9: 'Von einer Quelle, die sich oberhalb der Festung befindet. ',
        Station10: '100',
    };

    /**
     * IDEA:
     * this variable holds all solutions multiple choices for C
     */
    AnswersC = {
        Station1: 'Ein deutscher Spion hatte die Festung zufälligerweise entdeckt.',
        Station2: 'Damit der Funkraum im Ernstfall als erstes evakuiert werden konnte. ',
        Station3: 'Hergiswil und Pilatus',
        Station4: 'wegen der Luftfeuchtigkeit  ',
        Station5: 'Um den Zigarettenrauch innerhalb der Festung zu filtern. ',
        Station6: 'Weil dieses Modell für Festungen besonders gut geeignet war.',
        Station7: 'Für das Evakuieren von Verletzten.',
        Station8: 'Sie betreiben den Herd in der Küche.',
        Station9: 'Vom Kondenswasser, das durch die Luftfeuchtigkeit entsteht.',
        Station10: '66 ',
    };

    /**
     * IDEA:
     * this variable holds all solutions multiple choices for D
     */
    AnswersD = {
        Station1: 'Die Festung liegt sehr nah am Vierwaldstättersee.',
        Station2: 'Weil das Funksignal sonst nicht das Innere der Festung erreicht hätte.',
        Station3: 'Kehrsiten und Bürgenstock',
        Station4: 'wegen einer Rattenplage',
        Station5: 'Um den Geruch von Essen innerhalb der Festung zu filtern.',
        Station6: 'Weil die Schweizer Armee vom Zweiten Weltkrieg überrascht wurde und über kein moderneres Modell verfügte.',
        Station7: 'Wegen einer Überschwemmungsgefahr durch den Vierwaldstättersee.',
        Station8: 'Sie leiten das Abwasser in den Vierwaldstättersee.',
        Station9: 'Vom Vierwaldstättersee',
        Station10: '75',
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
            case 0:
                return this.Infos.HowTo;
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
 * Make an instance of this class such that we can export this for an easier access from all screens 
 * without creating always an instance to get access to the methods and values
 */
const QuestionSheet = new QuestionSheetClass();

// export this instance to reuse the methods from other classes and files
export default QuestionSheet;
