import React from 'react';
import {Text,View,TouchableHighlight,Image} from 'react-native';
import styles from '../constants/Styles';
import AnswerSheet from '../constants/AnswerSheet';
import QuestionSheet from '../constants/QuestionSheet';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { ScrollView } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

/**
 * IDEA:
 * this screen shows the 4th question of the quiz
 */
export default class Station4QuestionScreen extends React.Component {
  static navigationOptions = {
    title: "Station4QuestionScreen", // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js   
  };

  constructor(props) {
    super(props);
    this.state = { 
      chosenAnswerStation4: AnswerSheet.getAnswer(4), // read out the given answer of the answersheet file to be able to show the chosen button in another design
    };
  };    

  render() {
    return (      
      <View style={styles.anyWholeScreen}>
        
        {/*Set the title of the Screen*/}        
        <View style={styles.stationTitleTextContainer}>
          <Text style={styles.stationTitleTextFormat}>Station 4 - Frage </Text>
        </View>     
        
        {/* write your question text here*/}        
        <View style={styles.stationTextContainer}>
          <ScrollView>
            <Text style={styles.stationTextFormat}>
              {QuestionSheet.getQuestion(4)}
            </Text>
          </ScrollView>
        </View>

        {/* write here your multiple choice answers, A to D, 4 possibilites. they are ordered as follows
              BadgerImage
          A: ...
          B: ...
          C: ...         
          D: ...
          if the user chooses an answer the design of the button should change, such that the user knows that his 
          answer was accepted...
        */}   
        <View style={styles.station4AnswerVerticalContainer}>
          <Image source={require('../assets/images/badgerQuestion4.png')} style={styles.station4BadgerImageStyle}/>
          <View style={styles.stationRowContainer}>
            <TouchableHighlight onPress={() => {AnswerSheet.setAnswer(4,'A'), this.setState({chosenAnswerStation4: 'A'})}} underlayColor="rgba(96,100,109, 1)" style={[styles.stationUnchosenButtonStyle, this.state.chosenAnswerStation4==='A' && styles.stationChosenButtonStyle]}>
              <View style={{flex:1,flexDirection:'row'}}>
                <Text style={[styles.stationUnchosenButtonLetter, this.state.chosenAnswerStation4==='A' && styles.stationChosenButtonLetter]}>
                  A
                </Text>
                <Text style={[styles.stationUnchosenButtonText, this.state.chosenAnswerStation4==='A' && styles.stationChosenButtonText]}>
                  {QuestionSheet.getAnswerA(4)}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.stationRowContainer}>
            <TouchableHighlight onPress={() => {AnswerSheet.setAnswer(4,'B'), this.setState({chosenAnswerStation4: 'B'})}} underlayColor="rgba(96,100,109, 1)" style={[styles.stationUnchosenButtonStyle, this.state.chosenAnswerStation4==='B' && styles.stationChosenButtonStyle]}>
              <View style={{flex:1,flexDirection:'row'}}>
                <Text style={[styles.stationUnchosenButtonLetter, this.state.chosenAnswerStation4==='B' && styles.stationChosenButtonLetter]} >
                  B
                </Text>
                <Text style={[styles.stationUnchosenButtonText, this.state.chosenAnswerStation4==='B' && styles.stationChosenButtonText]} >
                {QuestionSheet.getAnswerB(4)}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.stationRowContainer}>
            <TouchableHighlight onPress={() => {AnswerSheet.setAnswer(4,'C'), this.setState({chosenAnswerStation4: 'C'})}} underlayColor="rgba(96,100,109, 1)" style={[styles.stationUnchosenButtonStyle, this.state.chosenAnswerStation4==='C' && styles.stationChosenButtonStyle]}>
              <View style={{flex:1,flexDirection:'row'}}>
                <Text style={[styles.stationUnchosenButtonLetter, this.state.chosenAnswerStation4==='C' && styles.stationChosenButtonLetter]} >
                  C
                </Text>
                <Text style={[styles.stationUnchosenButtonText, this.state.chosenAnswerStation4==='C' && styles.stationChosenButtonText]} >
                {QuestionSheet.getAnswerC(4)}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.stationRowContainer}>
            <TouchableHighlight onPress={() => {AnswerSheet.setAnswer(4,'D'), this.setState({chosenAnswerStation4: 'D'})}} underlayColor="rgba(96,100,109, 1)" style={[styles.stationUnchosenButtonStyle, this.state.chosenAnswerStation4==='D' && styles.stationChosenButtonStyle]}>
              <View style={{flex:1,flexDirection:'row'}}>
                <Text style={[styles.stationUnchosenButtonLetter, this.state.chosenAnswerStation4==='D' && styles.stationChosenButtonLetter]} >
                  D
                </Text>
                <Text style={[styles.stationUnchosenButtonText, this.state.chosenAnswerStation4==='D' && styles.stationChosenButtonText]} >
                {QuestionSheet.getAnswerD(4)}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        {/* back and forward button to navigate to the previous respectively to the next question*/}        
        <View style={styles.stationBottomNextContainer}>
          <View style={styles.stationRowContainer}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Station4',{tutorialFlag: 'true'})} underlayColor="rgba(96,100,109, 1)" style={styles.stationUnchosenButtonStyle}>
                  <IconEntypo name="arrow-long-left" size={hp("4%")} color="white"/>
            </TouchableHighlight>
          </View>
          <View style={styles.stationRowContainer}/>
          <View style={styles.stationRowContainer}/>
          <View style={styles.stationRowContainer}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Station5')} underlayColor="rgba(96,100,109, 1)" style={styles.stationUnchosenButtonStyle}>
                <IconEntypo name="arrow-long-right" size={hp("4%")} color="white"/>
            </TouchableHighlight>
          </View>
        </View>      

      </View>
    );
  }          
}