import React from 'react';
import {Image,StyleSheet,Text,View,TouchableHighlight,Button,Linking,TextInput} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document
import AnswerSheet from '../constants/AnswerSheet';
import IconEntypo from 'react-native-vector-icons/Entypo'
// to be able to have a proper design on every platform, I downloaded this package from 
// this website: https://www.npmjs.com/package/react-native-responsive-screen
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

/**
 * IDEA:
 * this screen shows the 10th and last task of the quiz
 */
export default class Station10Screen extends React.Component {
  // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js
  static navigationOptions = {
    title: "Station10Screen",    
  };

  constructor(props) {
    super(props);
    this.state = { chosenAnswerStation10: AnswerSheet.getAnswer(10) };
  };

  render() {
    return (      
      <View style={styles.anyWholeScreen}>
        
        {/*Set the title of the Screen*/}        
        <View style={styles.stationTitleTextContainer}>
          <Text style={styles.anyTitleTextFormat}>
            Station 10
          </Text>
        </View>     
        
        <View style={styles.stationTextContainer}>
            <Text style={styles.stationTextFormat}>
              Dies ist eine Testfrage. Wähle A,B,C oder D.
            </Text>
        </View>

        <View style={styles.stationAnswerVerticalContainer}>
          <View style={styles.stationRowContainer}>
            <TouchableHighlight onPress={() => {AnswerSheet.setAnswer(10,'A'), this.setState({chosenAnswerStation10: 'A'})}} underlayColor="rgba(96,100,109, 1)" style={[styles.unchosenButtonStyle, this.state.chosenAnswerStation10==='A' && styles.chosenButtonStyle]}>
                <Text style={[styles.anyButtonText, this.state.chosenAnswerStation10==='A' && styles.chosenButtonText]}>
                  A
                </Text>
            </TouchableHighlight>
          </View>
          <View style={styles.stationRowContainer}>
            <TouchableHighlight onPress={() => {AnswerSheet.setAnswer(10,'B'), this.setState({chosenAnswerStation10: 'B'})}} underlayColor="rgba(96,100,109, 1)" style={[styles.unchosenButtonStyle, this.state.chosenAnswerStation10==='B' && styles.chosenButtonStyle]}>
                <Text style={[styles.anyButtonText, this.state.chosenAnswerStation10==='B' && styles.chosenButtonText]}>
                  B
                </Text>
            </TouchableHighlight>
          </View>
        </View>

        <View style={styles.stationAnswerVerticalContainer}>
          <View style={styles.stationRowContainer}>
            <TouchableHighlight onPress={() => {AnswerSheet.setAnswer(10,'C'), this.setState({chosenAnswerStation10: 'C'})}} underlayColor="rgba(96,100,109, 1)" style={[styles.unchosenButtonStyle, this.state.chosenAnswerStation10==='C' && styles.chosenButtonStyle]}>
                <Text style={[styles.anyButtonText, this.state.chosenAnswerStation10==='C' && styles.chosenButtonText]}>
                  C
                </Text>
            </TouchableHighlight>
          </View>
          <View style={styles.stationRowContainer}>
            <TouchableHighlight onPress={() => {AnswerSheet.setAnswer(10,'D'), this.setState({chosenAnswerStation10: 'D'})}} underlayColor="rgba(96,100,109, 1)" style={[styles.unchosenButtonStyle, this.state.chosenAnswerStation10==='D' && styles.chosenButtonStyle]}>
                <Text style={[styles.anyButtonText, this.state.chosenAnswerStation10==='D' && styles.chosenButtonText]}>
                  D
                </Text>
            </TouchableHighlight>
          </View>
        </View>

        <View style={styles.stationBottomNextContainer}>
          <View style={styles.stationRowContainer}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Station9')} underlayColor="rgba(96,100,109, 1)" style={styles.unchosenButtonStyle}>
                  <IconEntypo name="arrow-bold-left" size={hp("3%")} color="white"/>
            </TouchableHighlight>
          </View>
          <View style={styles.stationRowContainer}/>
          <View style={styles.stationRowContainer}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Overview')} underlayColor="rgb(211, 211, 211)" style={styles.unchosenButtonStyle}>
                <IconEntypo name="arrow-bold-right" size={hp("3%")} color="white"/>
            </TouchableHighlight>
          </View>
        </View>

      </View>
    );
    
  }   
}