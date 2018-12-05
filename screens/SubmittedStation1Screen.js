import React from 'react';
import {Text,View,TouchableHighlight} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document
import AnswerSheet from '../constants/AnswerSheet';


/**
 * IDEA:
 * this screen shows the first task of the quiz with solution
 */
export default class SubmittedStation1Screen extends React.Component {
  static navigationOptions = {
    title: "SubmittedStation1Screen", // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js   
  };

  // read out the given answer of the answersheet file to be able to show the chosen button in another design
  constructor(props) {
    super(props);
    this.state = { 
        chosenAnswerStation1: AnswerSheet.getAnswer(1),
        rightAnswerStation1: AnswerSheet.getRightAnswer(1),
    };
  };
    
  render() {
    return (      
      <View style={styles.anyWholeScreen}>
        
        {/*Set the title of the Screen*/}        
        <View style={styles.submittedStationTitleTextContainer}>
          <Text style={styles.submittedStationTitleTextFormat}>
            Station 1
          </Text>
        </View>     
        
        {/* write your question text here*/}        
        <View style={styles.submittedStationTextContainer}>
            <Text style={styles.submittedStationTextFormat}>
              Dies ist eine Testfrage. {"\n"}
              Wie viel Einwohner hat die Stadt Luzern?
            </Text>
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
                                (this.state.chosenAnswerStation1===this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='A') && styles.submittedStationChosenAndRightButtonStyle,
                                (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='A') && styles.submittedStationChosenButtonStyle,
                                (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.rightAnswerStation1==='A') && styles.submittedStationUnchosenAndRightButtonStyle,
                            ]}>
            <View style={{flex:1,flexDirection:'row'}}>
                <Text style={[styles.submittedStationUnchosenButtonLetter, 
                                (this.state.chosenAnswerStation1===this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='A') && styles.submittedStationChosenButtonLetter,
                                (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='A') && styles.submittedStationChosenButtonLetter,
                                (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.rightAnswerStation1==='A') && styles.submittedStationUnchosenButtonLetter,
                            ]}>
                  A:
                </Text>
                <Text style={[styles.submittedStationUnchosenButtonText, 
                            (this.state.chosenAnswerStation1===this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='A') && styles.submittedStationChosenButtonText,
                            (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='A') && styles.submittedStationChosenButtonText,
                            (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.rightAnswerStation1==='A') && styles.submittedStationUnchosenButtonText,
                            ]}>
                    89'005
                </Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.submittedStationRowContainer}>
          <TouchableHighlight 
                onPress={() => {}} underlayColor="rgba(96,100,109, 1)" 
                style={[styles.submittedStationUnchosenButtonStyle, 
                                (this.state.chosenAnswerStation1===this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='B') && styles.submittedStationChosenAndRightButtonStyle,
                                (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='B') && styles.submittedStationChosenButtonStyle,
                                (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.rightAnswerStation1==='B') && styles.submittedStationUnchosenAndRightButtonStyle,
                            ]}>
            <View style={{flex:1,flexDirection:'row'}}>
                <Text style={[styles.submittedStationUnchosenButtonLetter, 
                                (this.state.chosenAnswerStation1===this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='B') && styles.submittedStationChosenButtonLetter,
                                (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='B') && styles.submittedStationChosenButtonLetter,
                                (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.rightAnswerStation1==='B') && styles.submittedStationUnchosenButtonLetter,
                            ]}>
                  B:
                </Text>
                <Text style={[styles.submittedStationUnchosenButtonText, 
                            (this.state.chosenAnswerStation1===this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='B') && styles.submittedStationChosenButtonText,
                            (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='B') && styles.submittedStationChosenButtonText,
                            (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.rightAnswerStation1==='B') && styles.submittedStationUnchosenButtonText,
                            ]}>
                    103'005
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.submittedStationAnswerVerticalContainer}>
          <View style={styles.submittedStationRowContainer}>
          <TouchableHighlight 
                onPress={() => {}} underlayColor="rgba(96,100,109, 1)" 
                style={[styles.submittedStationUnchosenButtonStyle, 
                                (this.state.chosenAnswerStation1===this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='C') && styles.submittedStationChosenAndRightButtonStyle,
                                (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='C') && styles.submittedStationChosenButtonStyle,
                                (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.rightAnswerStation1==='C') && styles.submittedStationUnchosenAndRightButtonStyle,
                            ]}>
              <View style={{flex:1,flexDirection:'row'}}>
                <Text style={[styles.submittedStationUnchosenButtonLetter, 
                                (this.state.chosenAnswerStation1===this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='C') && styles.submittedStationChosenButtonLetter,
                                (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='C') && styles.submittedStationChosenButtonLetter,
                                (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.rightAnswerStation1==='C') && styles.submittedStationUnchosenButtonLetter,
                            ]} >
                  C:
                </Text>
                <Text style={[styles.submittedStationUnchosenButtonText, 
                            (this.state.chosenAnswerStation1===this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='C') && styles.submittedStationChosenButtonText,
                            (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='C') && styles.submittedStationChosenButtonText,
                            (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.rightAnswerStation1==='C') && styles.submittedStationUnchosenButtonText,
                            ]} >
                  56'005
                </Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.submittedStationRowContainer}>
            <TouchableHighlight 
                onPress={() => {}} underlayColor="rgba(96,100,109, 1)" 
                style={[styles.submittedStationUnchosenButtonStyle, 
                                (this.state.chosenAnswerStation1===this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='D') && styles.submittedStationChosenAndRightButtonStyle,
                                (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='D') && styles.submittedStationChosenButtonStyle,
                                (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.rightAnswerStation1==='D') && styles.submittedStationUnchosenAndRightButtonStyle,
                            ]}>
              <View style={{flex:1,flexDirection:'row'}}>
                <Text style={[styles.submittedStationUnchosenButtonLetter, 
                                (this.state.chosenAnswerStation1===this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='D') && styles.submittedStationChosenButtonLetter,
                                (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='D') && styles.submittedStationChosenButtonLetter,
                                (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.rightAnswerStation1==='D') && styles.submittedStationUnchosenButtonLetter,
                            ]} >
                  D:
                </Text>
                <Text style={[styles.submittedStationUnchosenButtonText, 
                            (this.state.chosenAnswerStation1===this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='D') && styles.submittedStationChosenButtonText,
                            (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='D') && styles.submittedStationChosenButtonText,
                            (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.rightAnswerStation1==='D') && styles.submittedStationUnchosenButtonText,
                            ]} >
                    81’592
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        {/* button to navigate back to the result sheet */}        
        <View style={styles.submitStationBottomContainer}>
            <TouchableHighlight onPress={() => this.props.navigation.goBack()} underlayColor="rgba(96,100,109, 1)" style={styles.SubmitStationBackButtonStyle}>
                <Text style={styles.submittedStationUnchosenButtonText} numberOfLines={1}>
                  Zurück
                </Text>
            </TouchableHighlight>
        </View>

      </View>
    );
  }          
}