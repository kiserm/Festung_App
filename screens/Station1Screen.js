import React from 'react';
import {Text,View,TouchableHighlight} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document
import AnswerSheet from '../constants/AnswerSheet';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';// to be able to have a proper design on every platform, I downloaded this package from this website: https://www.npmjs.com/package/react-native-responsive-screen

/**
 * IDEA:
 * this screen shows the first task of the quiz
 */
export default class Station1Screen extends React.Component {
  static navigationOptions = {
    title: "Station1Screen", // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js   
  };

  // read out the given answer of the answersheet file to be able to show the chosen button in another design
  constructor(props) {
    super(props);
    this.state = { chosenAnswerStation1: AnswerSheet.getAnswer(1) };
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
        
        <View style={styles.stationTextContainer}>
            <Text style={styles.stationTextFormat}>
              Dies ist eine Testfrage. {"\n"}
              Wie viel Einwohner hat die Stadt Luzern?
            </Text>
        </View>

        <View style={styles.stationAnswerVerticalContainer}>
          <View style={styles.stationRowContainer}>
            <TouchableHighlight onPress={() => {AnswerSheet.setAnswer(1,'A'), this.setState({chosenAnswerStation1: 'A'})}} underlayColor="rgba(96,100,109, 1)" style={[styles.unchosenButtonStyle, this.state.chosenAnswerStation1==='A' && styles.chosenButtonStyle]}>
              <View style={{flex:1,flexDirection:'row'}}>
                <Text style={[styles.stationButtonLetter, this.state.chosenAnswerStation1==='A' && styles.chosenButtonText]} >
                  A
                </Text>
                <Text style={[styles.stationButtonText, this.state.chosenAnswerStation1==='A' && styles.chosenButtonText]} >
                  89'005
                </Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.stationRowContainer}>
            <TouchableHighlight onPress={() => {AnswerSheet.setAnswer(1,'B'), this.setState({chosenAnswerStation1: 'B'})}} underlayColor="rgba(96,100,109, 1)" style={[styles.unchosenButtonStyle, this.state.chosenAnswerStation1==='B' && styles.chosenButtonStyle]}>
              <View style={{flex:1,flexDirection:'row'}}>
                <Text style={[styles.stationButtonLetter, this.state.chosenAnswerStation1==='B' && styles.chosenButtonText]} >
                  B
                </Text>
                <Text style={[styles.stationButtonText, this.state.chosenAnswerStation1==='B' && styles.chosenButtonText]} >
                  103'005
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <View style={styles.stationAnswerVerticalContainer}>
          <View style={styles.stationRowContainer}>
            <TouchableHighlight onPress={() => {AnswerSheet.setAnswer(1,'C'), this.setState({chosenAnswerStation1: 'C'})}} underlayColor="rgba(96,100,109, 1)" style={[styles.unchosenButtonStyle, this.state.chosenAnswerStation1==='C' && styles.chosenButtonStyle]}>
              <View style={{flex:1,flexDirection:'row'}}>
                <Text style={[styles.stationButtonLetter, this.state.chosenAnswerStation1==='C' && styles.chosenButtonText]} >
                  C
                </Text>
                <Text style={[styles.stationButtonText, this.state.chosenAnswerStation1==='C' && styles.chosenButtonText]} >
                  56'005
                </Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.stationRowContainer}>
            <TouchableHighlight onPress={() => {AnswerSheet.setAnswer(1,'D'), this.setState({chosenAnswerStation1: 'D'})}} underlayColor="rgba(96,100,109, 1)" style={[styles.unchosenButtonStyle, this.state.chosenAnswerStation1==='D' && styles.chosenButtonStyle]}>
              <View style={{flex:1,flexDirection:'row'}}>
                <Text style={[styles.stationButtonLetter, this.state.chosenAnswerStation1==='D' && styles.chosenButtonText]} >
                  D
                </Text>
                <Text style={[styles.stationButtonText, this.state.chosenAnswerStation1==='D' && styles.chosenButtonText]} >
                  81’592
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <View style={styles.stationBottomNextContainer}>
          <View style={styles.stationRowContainer}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('HowTo',{tutorialFlag: 'true'})} underlayColor="rgba(96,100,109, 1)" style={styles.unchosenButtonStyle}>
                  <IconEntypo name="arrow-bold-left" size={hp("4%")} color="white"/>
            </TouchableHighlight>
          </View>
          <View style={styles.stationRowContainer}/>
          <View style={styles.stationRowContainer}/>
          <View style={styles.stationRowContainer}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Station2')} underlayColor="rgba(96,100,109, 1)" style={styles.unchosenButtonStyle}>
                <IconEntypo name="arrow-bold-right" size={hp("4%")} color="white"/>
            </TouchableHighlight>
          </View>
        </View>

      </View>


    );
  }          
}