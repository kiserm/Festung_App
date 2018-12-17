import React from 'react';
import {Text,View,TouchableHighlight,Image} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document
import AnswerSheet from '../constants/AnswerSheet';
import QuestionSheet from '../constants/QuestionSheet';


/**
 * IDEA:
 * this screen shows the 10th task of the quiz with solution
 */
export default class SubmittedStation10Screen extends React.Component {
  static navigationOptions = {
    title: "SubmittedStation10Screen", // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js   
    header: null,
  };

  // read out the given answer of the answersheet file to be able to show the chosen button in another design
  constructor(props) {
    super(props);
    this.state = { 
        chosenAnswerStation10: AnswerSheet.getAnswer(10),
        rightAnswerStation10: AnswerSheet.getRightAnswer(10),
    };
  };
    
  render() {
    return (      
      <View style={styles.anyWholeScreen}>
        
        {/*Set the title of the Screen*/}        
        <View style={styles.submittedStationTitleTextContainer}>
          <Text style={styles.submittedStationTitleTextFormat}>
          Station 10{"\n"}Resultat
          </Text>
        </View>     
        
        {/* write your question text here*/}        
        <View style={styles.submittedStationTextContainer}>
            <Text style={styles.submittedStationTextFormat}>
            {QuestionSheet.getQuestion(10)}
            </Text>
            <Image source={require('../assets/images/badgerQuestion1.png')} style={styles.submittedStationImageStyle1}/>
            <Image source={require('../assets/images/foxQuestion2.png')} style={styles.submittedStationImageStyle2}/>
        </View>

        {/* write here your multiple choice answers, A to D, 4 possibilites. they are ordered as follows
              A: ...         B: ...
              C: ...         D: ...
        */}   
        <View style={styles.submittedStationAnswerVerticalContainer}>
          <View style={styles.submittedStationRowContainer}>
          <TouchableHighlight 
                onPress={() => {}} underlayColor="rgba(96,100,109, 1)" 
                style={[styles.submittedStationUnchosenButtonStyle, 
                                (this.state.chosenAnswerStation10===this.state.rightAnswerStation10 && this.state.chosenAnswerStation10==='A') && styles.submittedStationChosenAndRightButtonStyle,
                                (this.state.chosenAnswerStation10!=this.state.rightAnswerStation10 && this.state.chosenAnswerStation10==='A') && styles.submittedStationChosenButtonStyle,
                                (this.state.chosenAnswerStation10!=this.state.rightAnswerStation10 && this.state.rightAnswerStation10==='A') && styles.submittedStationUnchosenAndRightButtonStyle,
                            ]}>
            <View style={{flex:1,flexDirection:'row'}}>
                <Text style={[styles.submittedStationUnchosenButtonLetter, 
                                (this.state.chosenAnswerStation10===this.state.rightAnswerStation10 && this.state.chosenAnswerStation10==='A') && styles.submittedStationChosenButtonLetter,
                                (this.state.chosenAnswerStation10!=this.state.rightAnswerStation10 && this.state.chosenAnswerStation10==='A') && styles.submittedStationChosenButtonLetter,
                                (this.state.chosenAnswerStation10!=this.state.rightAnswerStation10 && this.state.rightAnswerStation10==='A') && styles.submittedStationUnchosenButtonLetter,
                            ]}>
                  A
                </Text>
                <Text style={[styles.submittedStationUnchosenButtonText, 
                            (this.state.chosenAnswerStation10===this.state.rightAnswerStation10 && this.state.chosenAnswerStation10==='A') && styles.submittedStationChosenButtonText,
                            (this.state.chosenAnswerStation10!=this.state.rightAnswerStation10 && this.state.chosenAnswerStation10==='A') && styles.submittedStationChosenButtonText,
                            (this.state.chosenAnswerStation10!=this.state.rightAnswerStation10 && this.state.rightAnswerStation10==='A') && styles.submittedStationUnchosenButtonText,
                            ]}>
                  {QuestionSheet.getAnswerA(10)}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.submittedStationRowContainer}>
          <TouchableHighlight 
                onPress={() => {}} underlayColor="rgba(96,100,109, 1)" 
                style={[styles.submittedStationUnchosenButtonStyle, 
                                (this.state.chosenAnswerStation10===this.state.rightAnswerStation10 && this.state.chosenAnswerStation10==='B') && styles.submittedStationChosenAndRightButtonStyle,
                                (this.state.chosenAnswerStation10!=this.state.rightAnswerStation10 && this.state.chosenAnswerStation10==='B') && styles.submittedStationChosenButtonStyle,
                                (this.state.chosenAnswerStation10!=this.state.rightAnswerStation10 && this.state.rightAnswerStation10==='B') && styles.submittedStationUnchosenAndRightButtonStyle,
                            ]}>
            <View style={{flex:1,flexDirection:'row'}}>
                <Text style={[styles.submittedStationUnchosenButtonLetter, 
                                (this.state.chosenAnswerStation10===this.state.rightAnswerStation10 && this.state.chosenAnswerStation10==='B') && styles.submittedStationChosenButtonLetter,
                                (this.state.chosenAnswerStation10!=this.state.rightAnswerStation10 && this.state.chosenAnswerStation10==='B') && styles.submittedStationChosenButtonLetter,
                                (this.state.chosenAnswerStation10!=this.state.rightAnswerStation10 && this.state.rightAnswerStation10==='B') && styles.submittedStationUnchosenButtonLetter,
                            ]}>
                  B
                </Text>
                <Text style={[styles.submittedStationUnchosenButtonText, 
                            (this.state.chosenAnswerStation10===this.state.rightAnswerStation10 && this.state.chosenAnswerStation10==='B') && styles.submittedStationChosenButtonText,
                            (this.state.chosenAnswerStation10!=this.state.rightAnswerStation10 && this.state.chosenAnswerStation10==='B') && styles.submittedStationChosenButtonText,
                            (this.state.chosenAnswerStation10!=this.state.rightAnswerStation10 && this.state.rightAnswerStation10==='B') && styles.submittedStationUnchosenButtonText,
                            ]}>
                  {QuestionSheet.getAnswerB(10)}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.submittedStationRowContainer}>
          <TouchableHighlight 
                onPress={() => {}} underlayColor="rgba(96,100,109, 1)" 
                style={[styles.submittedStationUnchosenButtonStyle, 
                                (this.state.chosenAnswerStation10===this.state.rightAnswerStation10 && this.state.chosenAnswerStation10==='C') && styles.submittedStationChosenAndRightButtonStyle,
                                (this.state.chosenAnswerStation10!=this.state.rightAnswerStation10 && this.state.chosenAnswerStation10==='C') && styles.submittedStationChosenButtonStyle,
                                (this.state.chosenAnswerStation10!=this.state.rightAnswerStation10 && this.state.rightAnswerStation10==='C') && styles.submittedStationUnchosenAndRightButtonStyle,
                            ]}>
              <View style={{flex:1,flexDirection:'row'}}>
                <Text style={[styles.submittedStationUnchosenButtonLetter, 
                                (this.state.chosenAnswerStation10===this.state.rightAnswerStation10 && this.state.chosenAnswerStation10==='C') && styles.submittedStationChosenButtonLetter,
                                (this.state.chosenAnswerStation10!=this.state.rightAnswerStation10 && this.state.chosenAnswerStation10==='C') && styles.submittedStationChosenButtonLetter,
                                (this.state.chosenAnswerStation10!=this.state.rightAnswerStation10 && this.state.rightAnswerStation10==='C') && styles.submittedStationUnchosenButtonLetter,
                            ]} >
                  C
                </Text>
                <Text style={[styles.submittedStationUnchosenButtonText, 
                            (this.state.chosenAnswerStation10===this.state.rightAnswerStation10 && this.state.chosenAnswerStation10==='C') && styles.submittedStationChosenButtonText,
                            (this.state.chosenAnswerStation10!=this.state.rightAnswerStation10 && this.state.chosenAnswerStation10==='C') && styles.submittedStationChosenButtonText,
                            (this.state.chosenAnswerStation10!=this.state.rightAnswerStation10 && this.state.rightAnswerStation10==='C') && styles.submittedStationUnchosenButtonText,
                            ]} >
                  {QuestionSheet.getAnswerC(10)}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.submittedStationRowContainer}>
            <TouchableHighlight 
                onPress={() => {}} underlayColor="rgba(96,100,109, 1)" 
                style={[styles.submittedStationUnchosenButtonStyle, 
                                (this.state.chosenAnswerStation10===this.state.rightAnswerStation10 && this.state.chosenAnswerStation10==='D') && styles.submittedStationChosenAndRightButtonStyle,
                                (this.state.chosenAnswerStation10!=this.state.rightAnswerStation10 && this.state.chosenAnswerStation10==='D') && styles.submittedStationChosenButtonStyle,
                                (this.state.chosenAnswerStation10!=this.state.rightAnswerStation10 && this.state.rightAnswerStation10==='D') && styles.submittedStationUnchosenAndRightButtonStyle,
                            ]}>
              <View style={{flex:1,flexDirection:'row'}}>
                <Text style={[styles.submittedStationUnchosenButtonLetter, 
                                (this.state.chosenAnswerStation10===this.state.rightAnswerStation10 && this.state.chosenAnswerStation10==='D') && styles.submittedStationChosenButtonLetter,
                                (this.state.chosenAnswerStation10!=this.state.rightAnswerStation10 && this.state.chosenAnswerStation10==='D') && styles.submittedStationChosenButtonLetter,
                                (this.state.chosenAnswerStation10!=this.state.rightAnswerStation10 && this.state.rightAnswerStation10==='D') && styles.submittedStationUnchosenButtonLetter,
                            ]} >
                  D
                </Text>
                <Text style={[styles.submittedStationUnchosenButtonText, 
                            (this.state.chosenAnswerStation10===this.state.rightAnswerStation10 && this.state.chosenAnswerStation10==='D') && styles.submittedStationChosenButtonText,
                            (this.state.chosenAnswerStation10!=this.state.rightAnswerStation10 && this.state.chosenAnswerStation10==='D') && styles.submittedStationChosenButtonText,
                            (this.state.chosenAnswerStation10!=this.state.rightAnswerStation10 && this.state.rightAnswerStation10==='D') && styles.submittedStationUnchosenButtonText,
                            ]} >
                  {QuestionSheet.getAnswerD(10)}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        {/* button to navigate back to the result sheet */}        
        <View style={styles.submitStationBottomContainer}>
            <TouchableHighlight onPress={() => this.props.navigation.goBack()} underlayColor="rgba(96,100,109, 1)" style={styles.submittedStationBackButtonStyle}>
                <Text style={styles.submittedStationBackButtonText} numberOfLines={1}> Zurück </Text>
            </TouchableHighlight>
        </View>

        {/* show a stamp such that the user sees right away if his or her answer was right or not */}  
        {this.showStamp()}

      </View>
    );
  }
  
  /**
   * IDEA:
   * this method shows a stamp with the text Richtig! in green if the answer given by the user was correct, 
   * else a red stamp shows up with the text Falsch!
   */
  showStamp(){
    if(AnswerSheet.getAnswer(10)===AnswerSheet.getRightAnswer(10)){
      return (
        <View style={styles.submittedStationStampContainer}>
          <Text style={styles.submittedStationStampTextRight} numberOfLines={1}>Richtig!</Text>
        </View>
      );
    }
    else{
      return (
        <View style={styles.submittedStationStampContainer}>
          <Text style={styles.submittedStationStampTextWrong} numberOfLines={1}>Falsch!</Text>
        </View>
      );
    }
  }
}