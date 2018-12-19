import React from 'react';
import {Text,View,TouchableHighlight,Image} from 'react-native';
import styles from '../constants/Styles';
import AnswerSheet from '../constants/AnswerSheet';
import QuestionSheet from '../constants/QuestionSheet';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { ScrollView } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import OverviewScreen from './OverviewScreen';

/**
 * IDEA:
 * this screen shows the second question of the quiz
 */
export default class Station2QuestionScreen extends React.Component {
  static navigationOptions = {
    title: "Station2QuestionScreen", // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js   
  };

  constructor(props) {
    super(props);
    this.state = { 
      chosenAnswerStation2: AnswerSheet.getAnswer(2), // read out the given answer of the answersheet file to be able to show the chosen button in another design
    };
  };    


  render() {
    return (      
      <View style={styles.anyWholeScreen}>
        
        {/*Set the title of the Screen*/}        
        <View style={styles.stationTitleTextContainer}>
          <Text style={styles.stationTitleTextFormat}>Station 2 - Frage </Text>
        </View>     
        
        {/* show your question text here*/}        
        <View style={styles.stationTextContainer}>
          <ScrollView>
            <Text style={styles.stationTextFormat}>
              {QuestionSheet.getQuestion(2)}
            </Text>
          </ScrollView>
        </View>

        {/* write here your multiple choice answers, A to D, 4 possibilites. they are ordered as follows
              A: ...
              B: ...
              C: ...         
              D: ...
              if the user chooses an answer the design of the button should change, such that the user knows that his 
              answer was accepted...
        */}   
        <View style={styles.station2AnswerVerticalContainer}>
          <View style={styles.stationRowContainer}>
            <TouchableHighlight onPress={() => {AnswerSheet.setAnswer(2,'A'), this.setState({chosenAnswerStation2: 'A'})}} underlayColor="rgba(96,100,109, 1)" style={[styles.stationUnchosenButtonStyle, this.state.chosenAnswerStation2==='A' && styles.stationChosenButtonStyle]}>
              <View style={{flex:1,flexDirection:'row'}}>
                <Text style={[styles.stationUnchosenButtonLetter, this.state.chosenAnswerStation2==='A' && styles.stationChosenButtonLetter]}>
                  A
                </Text>
                <Text style={[styles.stationUnchosenButtonText, this.state.chosenAnswerStation2==='A' && styles.stationChosenButtonText]}>
                  {QuestionSheet.getAnswerA(2)}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.stationRowContainer}>
            <TouchableHighlight onPress={() => {AnswerSheet.setAnswer(2,'B'), this.setState({chosenAnswerStation2: 'B'})}} underlayColor="rgba(96,100,109, 1)" style={[styles.stationUnchosenButtonStyle, this.state.chosenAnswerStation2==='B' && styles.stationChosenButtonStyle]}>
              <View style={{flex:1,flexDirection:'row'}}>
                <Text style={[styles.stationUnchosenButtonLetter, this.state.chosenAnswerStation2==='B' && styles.stationChosenButtonLetter]} >
                  B
                </Text>
                <Text style={[styles.stationUnchosenButtonText, this.state.chosenAnswerStation2==='B' && styles.stationChosenButtonText]} >
                {QuestionSheet.getAnswerB(2)}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.stationRowContainer}>
            <TouchableHighlight onPress={() => {AnswerSheet.setAnswer(2,'C'), this.setState({chosenAnswerStation2: 'C'})}} underlayColor="rgba(96,100,109, 1)" style={[styles.stationUnchosenButtonStyle, this.state.chosenAnswerStation2==='C' && styles.stationChosenButtonStyle]}>
              <View style={{flex:1,flexDirection:'row'}}>
                <Text style={[styles.stationUnchosenButtonLetter, this.state.chosenAnswerStation2==='C' && styles.stationChosenButtonLetter]} >
                  C
                </Text>
                <Text style={[styles.stationUnchosenButtonText, this.state.chosenAnswerStation2==='C' && styles.stationChosenButtonText]} >
                {QuestionSheet.getAnswerC(2)}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.stationRowContainer}>
            <TouchableHighlight onPress={() => {AnswerSheet.setAnswer(2,'D'), this.setState({chosenAnswerStation2: 'D'})}} underlayColor="rgba(96,100,109, 1)" style={[styles.stationUnchosenButtonStyle, this.state.chosenAnswerStation2==='D' && styles.stationChosenButtonStyle]}>
              <View style={{flex:1,flexDirection:'row'}}>
                <Text style={[styles.stationUnchosenButtonLetter, this.state.chosenAnswerStation2==='D' && styles.stationChosenButtonLetter]} >
                  D
                </Text>
                <Text style={[styles.stationUnchosenButtonText, this.state.chosenAnswerStation2==='D' && styles.stationChosenButtonText]} >
                {QuestionSheet.getAnswerD(2)}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        {/* back and forward button to navigate to the previous respectively to the next question*/}        
        <View style={styles.stationBottomNextContainer}>
          <View style={styles.stationRowContainer}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Station2',{tutorialFlag: 'true'})} underlayColor="rgba(96,100,109, 1)" style={styles.stationUnchosenButtonStyle}>
                  <IconEntypo name="arrow-long-left" size={hp("4%")} color="white"/>
            </TouchableHighlight>
          </View>
          <View style={styles.stationRowContainer}/>
          <View style={styles.stationRowContainer}>
          </View>
          <View style={styles.stationRowContainer}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Station3')} underlayColor="rgba(96,100,109, 1)" style={styles.stationUnchosenButtonStyle}>
                <IconEntypo name="arrow-long-right" size={hp("4%")} color="white"/>
            </TouchableHighlight>
          </View>
        </View>      

        {/* show somewhere on the screen either finja the fox, dario the badger or both, only for design purpose*/}   
        <View style={styles.station2QuestionFoxContainer}>
          <Image source={require('../assets/images/foxQuestion2.png')} style={styles.station2FoxImageStyle}/>
        </View>

      </View>
    );
  }          
}