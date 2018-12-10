import React from 'react';
import {Text,View,TouchableHighlight,ScrollView,Alert} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document in /constants/Styles.js
import AnswerSheet from '../constants/AnswerSheet';  // to get access to the users given answers


/**
 * IDEA:
 * This screen should help the users to get around in the quiz world. Firstly, they should get an overview of all
 * quizzes, secondly they should be able to see which stations they already did and which they still have to do.
 * Thirdly, if two or more users solve the quizzes, they have a short way to compare their answers with the help of 
 * this overview screen.
 */
export default class OverviewScreen extends React.Component {
    static navigationOptions = {
    title: "OverviewScreen", // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js
    header: null, // do not show the header, else there is a problem for the hint screen because then we do not
                    // know from which screen we are coming hence we would have the wrong hint rendered
    };
    
    render() {
        return (      
            <View style={styles.anyWholeScreen}>
            
                {/*Set the title of the Screen*/}        
                <View style={styles.overviewTopContainer}>
                    <Text style={styles.overviewTitleTextFormat}>
                        Übersicht
                    </Text>
                </View>     

                {/* this section shows the buttons of the different stations and their state solved/unsolved. Moreover
                    the user can scroll up and down due to the ScrollView */}     
                <View style={styles.overviewMiddleContainer}>                
                    <ScrollView>
                        <View style={styles.overviewRowButtonContainer}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('Station1')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText} numberOfLines={1}>
                                    Station 1
                                </Text>
                            </TouchableHighlight>
                            {this.showDoneOrTodoButton(1)}                            
                        </View>
                        <View style={styles.overviewRowButtonContainer}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('Station2')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText} numberOfLines={1}>
                                    Station 2
                                </Text>
                            </TouchableHighlight>
                            {this.showDoneOrTodoButton(2)}
                        </View>
                        <View style={styles.overviewRowButtonContainer}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('Station3')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText} numberOfLines={1}>
                                    Station 3
                                </Text>
                            </TouchableHighlight>
                            {this.showDoneOrTodoButton(3)}
                        </View>
                        <View style={styles.overviewRowButtonContainer}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('Station4')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText} numberOfLines={1}>
                                    Station 4
                                </Text>
                            </TouchableHighlight>
                            {this.showDoneOrTodoButton(4)}
                        </View>
                        <View style={styles.overviewRowButtonContainer}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('Station5')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText} numberOfLines={1}>
                                    Station 5
                                </Text>
                            </TouchableHighlight>
                            {this.showDoneOrTodoButton(5)}
                        </View>
                        <View style={styles.overviewRowButtonContainer}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('Station6')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText} numberOfLines={1}>
                                    Station 6
                                </Text>
                            </TouchableHighlight>
                            {this.showDoneOrTodoButton(6)}
                        </View>
                        <View style={styles.overviewRowButtonContainer}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('Station7')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText} numberOfLines={1}>
                                    Station 7
                                </Text>
                            </TouchableHighlight>
                            {this.showDoneOrTodoButton(7)}
                        </View>
                        <View style={styles.overviewRowButtonContainer}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('Station8')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText} numberOfLines={1}>
                                    Station 8
                                </Text>
                            </TouchableHighlight>
                            {this.showDoneOrTodoButton(8)}
                        </View>
                        <View style={styles.overviewRowButtonContainer}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('Station9')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText} numberOfLines={1}>
                                    Station 9
                                </Text>
                            </TouchableHighlight>
                            {this.showDoneOrTodoButton(9)}
                        </View>                        
                        <View style={styles.overviewRowButtonContainer}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('Station10')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText} numberOfLines={1}>
                                    Station 10
                                </Text>
                            </TouchableHighlight>
                            {this.showDoneOrTodoButton(10)}
                        </View>
                    </ScrollView>
                </View>

                {/* show at the bottom two buttons, one to get back and one to submit your answers if and only if all quizzes has ben solved. */}        
                <View style={styles.overviewBottomContainer}>
                    <View style={styles.overviewRowButtonContainer}>
                        <TouchableHighlight onPress={() => this.props.navigation.goBack()} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                            <Text style={styles.overviewButtonText} numberOfLines={1}>
                                Zurück
                            </Text>
                        </TouchableHighlight>                        
                        {this.showSubmitButton()}
                    </View>
                </View>

            </View>
        );
    }

    /**
     * IDEA:
     * If the particular quiz has been solved, show the answer which was given
     * else show a ToDo statement, such that the user knows which quiz he still has
     * to solve.
     * @param {the stationNumber is an integer between 1 and the number of stations the app has} stationNumber 
     */
    showDoneOrTodoButton(stationNumber){
        if(AnswerSheet.getAnswer(stationNumber) === ''){
            return (
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Station' + stationNumber)} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                    <Text style={styles.overviewButtonText}>
                        zur Frage
                    </Text>
                </TouchableHighlight>
            );
        }
        else{
            return(
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Station' + stationNumber)} underlayColor="white" style={styles.overviewButtonStyleDone}>
                    <Text style={styles.overviewChosenButtonText}>
                        {AnswerSheet.getAnswer(stationNumber)}
                    </Text>
                </TouchableHighlight>                
            );
        }        
    }

    /**
     * IDEA:
     * This function tests if all quizzes has been solved, if so then this function returns true, if not, this function
     * returns false.
     */
    testAllTasksDone(){
        for(i=1;i<=10;++i){
            if(AnswerSheet.getAnswer(i) === ''){
                return false;
            }
        }
        return true;        
    }

    /**
     * IDEA: 
     * If not all questions has been answered, make an alert and do not go to the submit screen until all answers
     * are given. To highlight this behavior show the submit button in another color, such that one could assume that
     * this button is not ready to touch unless you did all the quizzes. 
     */
    showSubmitButton(){
        if (this.testAllTasksDone()){
            return (           
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Result')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                    <Text style={styles.overviewButtonText} numberOfLines={1}>
                        Abgabe
                    </Text>
                </TouchableHighlight>
            );            
        }
        else{
            return(
                <TouchableHighlight onPress={() => Alert.alert('Achtung',"Mache zuerst alle Aufgaben!")} underlayColor="rgb(211, 211, 211)" style={styles.overviewButtonToDoStyleNotSubmitable}>
                    <Text style={styles.overviewButtonText} numberOfLines={1}>
                        Abgabe
                    </Text>
                </TouchableHighlight>
            );

        }
    }
}