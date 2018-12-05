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
        <View style={styles.stationTitleTextContainer}>
          <Text style={styles.stationTitleTextFormat}>
            Station 1
          </Text>
        </View>     
        
        {/* write your question text here*/}        
        <View style={styles.stationTextContainer}>
            <Text style={styles.stationTextFormat}>
              Dies ist eine Testfrage. {"\n"}
              Wie viel Einwohner hat die Stadt Luzern?
            </Text>
        </View>

        {/* write here your multiple choice answers, A to D, 4 possibilites. they are ordered as follows
              A: ...         B: ...
              C: ...         D: ...
        */}   
        <View style={styles.stationAnswerVerticalContainer}>
          <View style={styles.stationRowContainer}>
          <TouchableHighlight 
                onPress={() => {}} underlayColor="rgba(96,100,109, 1)" 
                style={[styles.stationUnchosenButtonStyle, 
                                (this.state.chosenAnswerStation1===this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='A') && styles.stationChosenAndRightButtonStyle,
                                (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='A') && styles.stationChosenButtonStyle,
                                (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.rightAnswerStation1==='A') && styles.stationUnchosenAndRightButtonStyle,
                            ]}>
            <View style={{flex:1,flexDirection:'row'}}>
                <Text style={[styles.stationUnchosenButtonLetter, 
                                (this.state.chosenAnswerStation1===this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='A') && styles.stationChosenButtonLetter,
                                (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='A') && styles.stationChosenButtonLetter,
                                (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.rightAnswerStation1==='A') && styles.stationUnchosenButtonLetter,
                            ]}>
                  A:
                </Text>
                <Text style={[styles.stationUnchosenButtonText, 
                            (this.state.chosenAnswerStation1===this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='A') && styles.stationChosenButtonText,
                            (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='A') && styles.stationChosenButtonText,
                            (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.rightAnswerStation1==='A') && styles.stationUnchosenButtonText,
                            ]}>
                    89'005
                </Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.stationRowContainer}>
          <TouchableHighlight 
                onPress={() => {}} underlayColor="rgba(96,100,109, 1)" 
                style={[styles.stationUnchosenButtonStyle, 
                                (this.state.chosenAnswerStation1===this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='B') && styles.stationChosenAndRightButtonStyle,
                                (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='B') && styles.stationChosenButtonStyle,
                                (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.rightAnswerStation1==='B') && styles.stationUnchosenAndRightButtonStyle,
                            ]}>
            <View style={{flex:1,flexDirection:'row'}}>
                <Text style={[styles.stationUnchosenButtonLetter, 
                                (this.state.chosenAnswerStation1===this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='B') && styles.stationChosenButtonLetter,
                                (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='B') && styles.stationChosenButtonLetter,
                                (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.rightAnswerStation1==='B') && styles.stationUnchosenButtonLetter,
                            ]}>
                  B:
                </Text>
                <Text style={[styles.stationUnchosenButtonText, 
                            (this.state.chosenAnswerStation1===this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='B') && styles.stationChosenButtonText,
                            (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='B') && styles.stationChosenButtonText,
                            (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.rightAnswerStation1==='B') && styles.stationUnchosenButtonText,
                            ]}>
                    103'005
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.stationAnswerVerticalContainer}>
          <View style={styles.stationRowContainer}>
          <TouchableHighlight 
                onPress={() => {}} underlayColor="rgba(96,100,109, 1)" 
                style={[styles.stationUnchosenButtonStyle, 
                                (this.state.chosenAnswerStation1===this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='C') && styles.stationChosenAndRightButtonStyle,
                                (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='C') && styles.stationChosenButtonStyle,
                                (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.rightAnswerStation1==='C') && styles.stationUnchosenAndRightButtonStyle,
                            ]}>
              <View style={{flex:1,flexDirection:'row'}}>
                <Text style={[styles.stationUnchosenButtonLetter, 
                                (this.state.chosenAnswerStation1===this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='C') && styles.stationChosenButtonLetter,
                                (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='C') && styles.stationChosenButtonLetter,
                                (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.rightAnswerStation1==='C') && styles.stationUnchosenButtonLetter,
                            ]} >
                  C:
                </Text>
                <Text style={[styles.stationUnchosenButtonText, 
                            (this.state.chosenAnswerStation1===this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='C') && styles.stationChosenButtonText,
                            (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='C') && styles.stationChosenButtonText,
                            (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.rightAnswerStation1==='C') && styles.stationUnchosenButtonText,
                            ]} >
                  56'005
                </Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.stationRowContainer}>
            <TouchableHighlight 
                onPress={() => {}} underlayColor="rgba(96,100,109, 1)" 
                style={[styles.stationUnchosenButtonStyle, 
                                (this.state.chosenAnswerStation1===this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='D') && styles.stationChosenAndRightButtonStyle,
                                (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='D') && styles.stationChosenButtonStyle,
                                (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.rightAnswerStation1==='D') && styles.stationUnchosenAndRightButtonStyle,
                            ]}>
              <View style={{flex:1,flexDirection:'row'}}>
                <Text style={[styles.stationUnchosenButtonLetter, 
                                (this.state.chosenAnswerStation1===this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='D') && styles.stationChosenButtonLetter,
                                (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='D') && styles.stationChosenButtonLetter,
                                (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.rightAnswerStation1==='D') && styles.stationUnchosenButtonLetter,
                            ]} >
                  D:
                </Text>
                <Text style={[styles.stationUnchosenButtonText, 
                            (this.state.chosenAnswerStation1===this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='D') && styles.stationChosenButtonText,
                            (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.chosenAnswerStation1==='D') && styles.stationChosenButtonText,
                            (this.state.chosenAnswerStation1!=this.state.rightAnswerStation1 && this.state.rightAnswerStation1==='D') && styles.stationUnchosenButtonText,
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
                <Text style={styles.stationUnchosenButtonText} numberOfLines={1}>
                  Zurück
                </Text>
            </TouchableHighlight>
        </View>

      </View>
    );
  }          
}