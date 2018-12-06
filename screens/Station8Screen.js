import React from 'react';
import {Text,View,TouchableHighlight} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document
import AnswerSheet from '../constants/AnswerSheet';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';// to be able to have a proper design on every platform, I downloaded this package from this website: https://www.npmjs.com/package/react-native-responsive-screen

/**
 * IDEA:
 * this screen shows the 8th task of the quiz
 */
export default class Station8Screen extends React.Component {
  static navigationOptions = {
    title: "Station8Screen", // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js   
  };

  // read out the given answer of the answersheet file to be able to show the chosen button in another design
  constructor(props) {
    super(props);
    this.state = { chosenAnswerStation8: AnswerSheet.getAnswer(8) };
  };
    
  render() {
    return (      
      <View style={styles.anyWholeScreen}>
        
        {/*Set the title of the Screen*/}        
        <View style={styles.stationTitleTextContainer}>
          <Text style={styles.stationTitleTextFormat}>
            Station 8
          </Text>
        </View>     
        
        {/* write your question text here*/}        
        <View style={styles.stationTextContainer}>
            <Text style={styles.stationTextFormat}>
            {QuestionSheet.getQuestion(8)}

            </Text>
        </View>

        {/* write here your multiple choice answers, A to D, 4 possibilites. they are ordered as follows
              A: ...         B: ...
              C: ...         D: ...
        */}   
        <View style={styles.stationAnswerVerticalContainer}>
          <View style={styles.stationRowContainer}>
            <TouchableHighlight onPress={() => {AnswerSheet.setAnswer(8,'A'), this.setState({chosenAnswerStation8: 'A'})}} underlayColor="rgba(96,800,809, 8)" style={[styles.stationUnchosenButtonStyle, this.state.chosenAnswerStation8==='A' && styles.stationChosenButtonStyle]}>
              <View style={{flex:1,flexDirection:'row'}}>
                <Text style={[styles.stationUnchosenButtonLetter, this.state.chosenAnswerStation8==='A' && styles.stationChosenButtonLetter]} >
                  A:
                </Text>
                <Text style={[styles.stationUnchosenButtonText, this.state.chosenAnswerStation8==='A' && styles.stationChosenButtonText]} >
                {QuestionSheet.getAnswerA(8)}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.stationRowContainer}>
            <TouchableHighlight onPress={() => {AnswerSheet.setAnswer(8,'B'), this.setState({chosenAnswerStation8: 'B'})}} underlayColor="rgba(96,800,809, 8)" style={[styles.stationUnchosenButtonStyle, this.state.chosenAnswerStation8==='B' && styles.stationChosenButtonStyle]}>
              <View style={{flex:1,flexDirection:'row'}}>
                <Text style={[styles.stationUnchosenButtonLetter, this.state.chosenAnswerStation8==='B' && styles.stationChosenButtonLetter]} >
                  B:
                </Text>
                <Text style={[styles.stationUnchosenButtonText, this.state.chosenAnswerStation8==='B' && styles.stationChosenButtonText]} >
                {QuestionSheet.getAnswerB(8)}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.stationAnswerVerticalContainer}>
          <View style={styles.stationRowContainer}>
            <TouchableHighlight onPress={() => {AnswerSheet.setAnswer(8,'C'), this.setState({chosenAnswerStation8: 'C'})}} underlayColor="rgba(96,800,809, 8)" style={[styles.stationUnchosenButtonStyle, this.state.chosenAnswerStation8==='C' && styles.stationChosenButtonStyle]}>
              <View style={{flex:1,flexDirection:'row'}}>
                <Text style={[styles.stationUnchosenButtonLetter, this.state.chosenAnswerStation8==='C' && styles.stationChosenButtonLetter]} >
                  C:
                </Text>
                <Text style={[styles.stationUnchosenButtonText, this.state.chosenAnswerStation8==='C' && styles.stationChosenButtonText]} >
                {QuestionSheet.getAnswerC(8)}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.stationRowContainer}>
            <TouchableHighlight onPress={() => {AnswerSheet.setAnswer(8,'D'), this.setState({chosenAnswerStation8: 'D'})}} underlayColor="rgba(96,800,809, 8)" style={[styles.stationUnchosenButtonStyle, this.state.chosenAnswerStation8==='D' && styles.stationChosenButtonStyle]}>
              <View style={{flex:1,flexDirection:'row'}}>
                <Text style={[styles.stationUnchosenButtonLetter, this.state.chosenAnswerStation8==='D' && styles.stationChosenButtonLetter]} >
                  D:
                </Text>
                <Text style={[styles.stationUnchosenButtonText, this.state.chosenAnswerStation8==='D' && styles.stationChosenButtonText]} >
                {QuestionSheet.getAnswerD(8)}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        {/* back and forward button to navigate to the previous respectively to the next question*/}        
        <View style={styles.stationBottomNextContainer}>
          <View style={styles.stationRowContainer}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Station7')} underlayColor="rgba(96,800,809, 8)" style={styles.stationUnchosenButtonStyle}>
                  <IconEntypo name="arrow-long-left" size={hp("4%")} color="white"/>
            </TouchableHighlight>
          </View>
          <View style={styles.stationRowContainer}/>
          <View style={styles.stationRowContainer}/>
          <View style={styles.stationRowContainer}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Station9')} underlayColor="rgba(96,800,809, 8)" style={styles.stationUnchosenButtonStyle}>
                <IconEntypo name="arrow-long-right" size={hp("4%")} color="white"/>
            </TouchableHighlight>
          </View>
        </View>

      </View>
    );
  }          
}