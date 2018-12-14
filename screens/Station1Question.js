import React from 'react';
import {Text,View,TouchableHighlight,Image} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document
import AnswerSheet from '../constants/AnswerSheet';
import QuestionSheet from '../constants/QuestionSheet';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { ScrollView } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';// to be able to have a proper design on every platform, I downloaded this package from this website: https://www.npmjs.com/package/react-native-responsive-screen

/**
 * IDEA:
 * this screen shows the first task of the quiz
 */
export default class Station1QuestionScreen extends React.Component {
  static navigationOptions = {
    title: "Station1QuestionScreen", // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js   
  };

  constructor(props) {
    super(props);
    this.state = { 
      chosenAnswerStation1: AnswerSheet.getAnswer(1), // read out the given answer of the answersheet file to be able to show the chosen button in another design
    };
  };    

  render() {
    return (      
      <View style={styles.anyWholeScreen}>
        
        {/*Set the title of the Screen*/}        
        <View style={styles.stationTitleTextContainer}>
          <Text style={styles.stationTitleTextFormat}>Station 1 - Frage </Text>
        </View>     
        
        {/* write your question text here*/}        
        <View style={styles.stationTextContainer}>
          <ScrollView>
            <Text style={styles.stationTextFormat}>
              {QuestionSheet.getQuestion(1)}
            </Text>
          </ScrollView>
        </View>

        {/* write here your multiple choice answers, A to D, 4 possibilites. they are ordered as follows
                  BadgerImage
              A: ...
              B: ...
              C: ...         
              D: ...
        */}   
        <View style={styles.station1AnswerVerticalContainer}>
          <Image source={require('../assets/images/badgerQuestion1.png')} style={styles.station1BadgerImageStyle}/>
          <View style={styles.stationRowContainer}>
            <TouchableHighlight onPress={() => {AnswerSheet.setAnswer(1,'A'), this.setState({chosenAnswerStation1: 'A'})}} underlayColor="rgba(96,100,109, 1)" style={[styles.stationUnchosenButtonStyle, this.state.chosenAnswerStation1==='A' && styles.stationChosenButtonStyle]}>
              <View style={{flex:1,flexDirection:'row'}}>
                <Text style={[styles.stationUnchosenButtonLetter, this.state.chosenAnswerStation1==='A' && styles.stationChosenButtonLetter]}>
                  A
                </Text>
                <Text style={[styles.stationUnchosenButtonText, this.state.chosenAnswerStation1==='A' && styles.stationChosenButtonText]}>
                  {QuestionSheet.getAnswerA(1)}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.stationRowContainer}>
            <TouchableHighlight onPress={() => {AnswerSheet.setAnswer(1,'B'), this.setState({chosenAnswerStation1: 'B'})}} underlayColor="rgba(96,100,109, 1)" style={[styles.stationUnchosenButtonStyle, this.state.chosenAnswerStation1==='B' && styles.stationChosenButtonStyle]}>
              <View style={{flex:1,flexDirection:'row'}}>
                <Text style={[styles.stationUnchosenButtonLetter, this.state.chosenAnswerStation1==='B' && styles.stationChosenButtonLetter]} >
                  B
                </Text>
                <Text style={[styles.stationUnchosenButtonText, this.state.chosenAnswerStation1==='B' && styles.stationChosenButtonText]} >
                {QuestionSheet.getAnswerB(1)}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.stationRowContainer}>
            <TouchableHighlight onPress={() => {AnswerSheet.setAnswer(1,'C'), this.setState({chosenAnswerStation1: 'C'})}} underlayColor="rgba(96,100,109, 1)" style={[styles.stationUnchosenButtonStyle, this.state.chosenAnswerStation1==='C' && styles.stationChosenButtonStyle]}>
              <View style={{flex:1,flexDirection:'row'}}>
                <Text style={[styles.stationUnchosenButtonLetter, this.state.chosenAnswerStation1==='C' && styles.stationChosenButtonLetter]} >
                  C
                </Text>
                <Text style={[styles.stationUnchosenButtonText, this.state.chosenAnswerStation1==='C' && styles.stationChosenButtonText]} >
                {QuestionSheet.getAnswerC(1)}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.stationRowContainer}>
            <TouchableHighlight onPress={() => {AnswerSheet.setAnswer(1,'D'), this.setState({chosenAnswerStation1: 'D'})}} underlayColor="rgba(96,100,109, 1)" style={[styles.stationUnchosenButtonStyle, this.state.chosenAnswerStation1==='D' && styles.stationChosenButtonStyle]}>
              <View style={{flex:1,flexDirection:'row'}}>
                <Text style={[styles.stationUnchosenButtonLetter, this.state.chosenAnswerStation1==='D' && styles.stationChosenButtonLetter]} >
                  D
                </Text>
                <Text style={[styles.stationUnchosenButtonText, this.state.chosenAnswerStation1==='D' && styles.stationChosenButtonText]} >
                {QuestionSheet.getAnswerD(1)}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        {/* back and forward button to navigate to the previous respectively to the next question*/}        
        <View style={styles.stationBottomNextContainer}>
          <View style={styles.stationRowContainer}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Station1',{tutorialFlag: 'true'})} underlayColor="rgba(96,100,109, 1)" style={styles.stationUnchosenButtonStyle}>
                  <IconEntypo name="arrow-long-left" size={hp("4%")} color="white"/>
            </TouchableHighlight>
          </View>
          <View style={styles.stationRowContainer}/>
          <View style={styles.stationRowContainer}/>
          <View style={styles.stationRowContainer}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Station2')} underlayColor="rgba(96,100,109, 1)" style={styles.stationUnchosenButtonStyle}>
                <IconEntypo name="arrow-long-right" size={hp("4%")} color="white"/>
            </TouchableHighlight>
          </View>
        </View>

      </View>
    );
  }          
}