import React from 'react';
import {Text,View,TouchableHighlight,Image} from 'react-native';
import styles from '../constants/Styles';
import AnswerSheet from '../constants/AnswerSheet';
import QuestionSheet from '../constants/QuestionSheet';


/**
 * IDEA:
 * this screen shows the 5th task of the quiz with solution
 */
export default class SubmittedStation5Screen extends React.Component {
  static navigationOptions = {
    title: "SubmittedStation5Screen", // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js   
    header: null,
  };

  // read out the given answer of the answersheet file to be able to show the chosen button in another design
  constructor(props) {
    super(props);
    this.state = { 
        chosenAnswerStation5: AnswerSheet.getAnswer(5),
        rightAnswerStation5: AnswerSheet.getRightAnswer(5),
    };
  };
    
  render() {
    return (      
      <View style={styles.anyWholeScreen}>
        
        {/*Set the title of the Screen*/}        
        <View style={styles.submittedStationTitleTextContainer}>
          <Text style={styles.submittedStationTitleTextFormat}>
          Station 5{"\n"}Resultat
          </Text>
        </View>     
        
        {/* show your question text here*/}        
        <View style={styles.submittedStationTextContainer}>

            <Text style={styles.submittedStationTextFormat}>
            {QuestionSheet.getQuestion(5)}
            </Text>
            
            {/* show somewhere on the screen either finja the fox, dario the badger or both, only for design purpose*/} 
            <Image source={require('../assets/images/badgerQuestion1.png')} style={styles.submittedStationImageStyle1}/>
            <Image source={require('../assets/images/foxQuestion2.png')} style={styles.submittedStationImageStyle2}/>
            
        </View>
        
        {/* write here your multiple choice answers, A to D, 4 possibilites. they are allocated as follows
              A: ...
              B: ...
              C: ...         
              D: ...
              we have four cases for the design of an answer button:
                1) chosen and right   -> chosen style and green border (grey text, white background, green border)
                2) chosen and wrong   -> chosen style (grey border and text, white background)
                3) unchosen and wrong -> unchosen style (grey background and border, white text)
                4) unchosen and right -> unchosen style and green border (grey background, white text, green border)
        */}    
        <View style={styles.submittedStationAnswerVerticalContainer}>
          <View style={styles.submittedStationRowContainer}>
          <TouchableHighlight 
                onPress={() => {}} underlayColor="rgba(96,100,109, 1)" 
                style={[styles.submittedStationUnchosenButtonStyle, 
                                (this.state.chosenAnswerStation5===this.state.rightAnswerStation5 && this.state.chosenAnswerStation5==='A') && styles.submittedStationChosenAndRightButtonStyle,
                                (this.state.chosenAnswerStation5!=this.state.rightAnswerStation5 && this.state.chosenAnswerStation5==='A') && styles.submittedStationChosenButtonStyle,
                                (this.state.chosenAnswerStation5!=this.state.rightAnswerStation5 && this.state.rightAnswerStation5==='A') && styles.submittedStationUnchosenAndRightButtonStyle,
                            ]}>
            <View style={{flex:1,flexDirection:'row'}}>
                <Text style={[styles.submittedStationUnchosenButtonLetter, 
                                (this.state.chosenAnswerStation5===this.state.rightAnswerStation5 && this.state.chosenAnswerStation5==='A') && styles.submittedStationChosenButtonLetter,
                                (this.state.chosenAnswerStation5!=this.state.rightAnswerStation5 && this.state.chosenAnswerStation5==='A') && styles.submittedStationChosenButtonLetter,
                                (this.state.chosenAnswerStation5!=this.state.rightAnswerStation5 && this.state.rightAnswerStation5==='A') && styles.submittedStationUnchosenButtonLetter,
                            ]}>
                  A
                </Text>
                <Text style={[styles.submittedStationUnchosenButtonText, 
                            (this.state.chosenAnswerStation5===this.state.rightAnswerStation5 && this.state.chosenAnswerStation5==='A') && styles.submittedStationChosenButtonText,
                            (this.state.chosenAnswerStation5!=this.state.rightAnswerStation5 && this.state.chosenAnswerStation5==='A') && styles.submittedStationChosenButtonText,
                            (this.state.chosenAnswerStation5!=this.state.rightAnswerStation5 && this.state.rightAnswerStation5==='A') && styles.submittedStationUnchosenButtonText,
                            ]}>
                  {QuestionSheet.getAnswerA(5)}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.submittedStationRowContainer}>
          <TouchableHighlight 
                onPress={() => {}} underlayColor="rgba(96,100,109, 1)" 
                style={[styles.submittedStationUnchosenButtonStyle, 
                                (this.state.chosenAnswerStation5===this.state.rightAnswerStation5 && this.state.chosenAnswerStation5==='B') && styles.submittedStationChosenAndRightButtonStyle,
                                (this.state.chosenAnswerStation5!=this.state.rightAnswerStation5 && this.state.chosenAnswerStation5==='B') && styles.submittedStationChosenButtonStyle,
                                (this.state.chosenAnswerStation5!=this.state.rightAnswerStation5 && this.state.rightAnswerStation5==='B') && styles.submittedStationUnchosenAndRightButtonStyle,
                            ]}>
            <View style={{flex:1,flexDirection:'row'}}>
                <Text style={[styles.submittedStationUnchosenButtonLetter, 
                                (this.state.chosenAnswerStation5===this.state.rightAnswerStation5 && this.state.chosenAnswerStation5==='B') && styles.submittedStationChosenButtonLetter,
                                (this.state.chosenAnswerStation5!=this.state.rightAnswerStation5 && this.state.chosenAnswerStation5==='B') && styles.submittedStationChosenButtonLetter,
                                (this.state.chosenAnswerStation5!=this.state.rightAnswerStation5 && this.state.rightAnswerStation5==='B') && styles.submittedStationUnchosenButtonLetter,
                            ]}>
                  B
                </Text>
                <Text style={[styles.submittedStationUnchosenButtonText, 
                            (this.state.chosenAnswerStation5===this.state.rightAnswerStation5 && this.state.chosenAnswerStation5==='B') && styles.submittedStationChosenButtonText,
                            (this.state.chosenAnswerStation5!=this.state.rightAnswerStation5 && this.state.chosenAnswerStation5==='B') && styles.submittedStationChosenButtonText,
                            (this.state.chosenAnswerStation5!=this.state.rightAnswerStation5 && this.state.rightAnswerStation5==='B') && styles.submittedStationUnchosenButtonText,
                            ]}>
                  {QuestionSheet.getAnswerB(5)}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.submittedStationRowContainer}>
          <TouchableHighlight 
                onPress={() => {}} underlayColor="rgba(96,100,109, 1)" 
                style={[styles.submittedStationUnchosenButtonStyle, 
                                (this.state.chosenAnswerStation5===this.state.rightAnswerStation5 && this.state.chosenAnswerStation5==='C') && styles.submittedStationChosenAndRightButtonStyle,
                                (this.state.chosenAnswerStation5!=this.state.rightAnswerStation5 && this.state.chosenAnswerStation5==='C') && styles.submittedStationChosenButtonStyle,
                                (this.state.chosenAnswerStation5!=this.state.rightAnswerStation5 && this.state.rightAnswerStation5==='C') && styles.submittedStationUnchosenAndRightButtonStyle,
                            ]}>
              <View style={{flex:1,flexDirection:'row'}}>
                <Text style={[styles.submittedStationUnchosenButtonLetter, 
                                (this.state.chosenAnswerStation5===this.state.rightAnswerStation5 && this.state.chosenAnswerStation5==='C') && styles.submittedStationChosenButtonLetter,
                                (this.state.chosenAnswerStation5!=this.state.rightAnswerStation5 && this.state.chosenAnswerStation5==='C') && styles.submittedStationChosenButtonLetter,
                                (this.state.chosenAnswerStation5!=this.state.rightAnswerStation5 && this.state.rightAnswerStation5==='C') && styles.submittedStationUnchosenButtonLetter,
                            ]} >
                  C
                </Text>
                <Text style={[styles.submittedStationUnchosenButtonText, 
                            (this.state.chosenAnswerStation5===this.state.rightAnswerStation5 && this.state.chosenAnswerStation5==='C') && styles.submittedStationChosenButtonText,
                            (this.state.chosenAnswerStation5!=this.state.rightAnswerStation5 && this.state.chosenAnswerStation5==='C') && styles.submittedStationChosenButtonText,
                            (this.state.chosenAnswerStation5!=this.state.rightAnswerStation5 && this.state.rightAnswerStation5==='C') && styles.submittedStationUnchosenButtonText,
                            ]} >
                  {QuestionSheet.getAnswerC(5)}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.submittedStationRowContainer}>
            <TouchableHighlight 
                onPress={() => {}} underlayColor="rgba(96,100,109, 1)" 
                style={[styles.submittedStationUnchosenButtonStyle, 
                                (this.state.chosenAnswerStation5===this.state.rightAnswerStation5 && this.state.chosenAnswerStation5==='D') && styles.submittedStationChosenAndRightButtonStyle,
                                (this.state.chosenAnswerStation5!=this.state.rightAnswerStation5 && this.state.chosenAnswerStation5==='D') && styles.submittedStationChosenButtonStyle,
                                (this.state.chosenAnswerStation5!=this.state.rightAnswerStation5 && this.state.rightAnswerStation5==='D') && styles.submittedStationUnchosenAndRightButtonStyle,
                            ]}>
              <View style={{flex:1,flexDirection:'row'}}>
                <Text style={[styles.submittedStationUnchosenButtonLetter, 
                                (this.state.chosenAnswerStation5===this.state.rightAnswerStation5 && this.state.chosenAnswerStation5==='D') && styles.submittedStationChosenButtonLetter,
                                (this.state.chosenAnswerStation5!=this.state.rightAnswerStation5 && this.state.chosenAnswerStation5==='D') && styles.submittedStationChosenButtonLetter,
                                (this.state.chosenAnswerStation5!=this.state.rightAnswerStation5 && this.state.rightAnswerStation5==='D') && styles.submittedStationUnchosenButtonLetter,
                            ]} >
                  D
                </Text>
                <Text style={[styles.submittedStationUnchosenButtonText, 
                            (this.state.chosenAnswerStation5===this.state.rightAnswerStation5 && this.state.chosenAnswerStation5==='D') && styles.submittedStationChosenButtonText,
                            (this.state.chosenAnswerStation5!=this.state.rightAnswerStation5 && this.state.chosenAnswerStation5==='D') && styles.submittedStationChosenButtonText,
                            (this.state.chosenAnswerStation5!=this.state.rightAnswerStation5 && this.state.rightAnswerStation5==='D') && styles.submittedStationUnchosenButtonText,
                            ]} >
                  {QuestionSheet.getAnswerD(5)}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        {/* button to navigate back to the result sheet */}        
        <View style={styles.submitStationBottomContainer}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Result')} underlayColor="rgba(96,100,109, 1)" style={styles.submittedStationBackButtonStyle}>
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
    if(AnswerSheet.getAnswer(5)===AnswerSheet.getRightAnswer(5)){
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