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
 * this screen shows the 6th task of the quiz
 */
export default class Station6Screen extends React.Component {
      // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js
      static navigationOptions = {
        title: "Station6Screen",    
      };

      constructor(props) {
        super(props);
        this.state = { chosenAnswerStation6: AnswerSheet.getAnswer(6) };
      };
    
      render() {
        return (      
          <View style={styles.anyWholeScreen}>
            
            {/*Set the title of the Screen*/}        
            <View style={styles.stationTitleTextContainer}>
              <Text style={styles.anyTitleTextFormat}>
                Station 6
              </Text>
            </View>     
            
            <View style={styles.stationTextContainer}>
                <Text style={styles.stationTextFormat}>
                  Dies ist eine Testfrage. Wähle A,B,C oder D.
                </Text>
            </View>

            <View style={styles.stationAnswerVerticalContainer}>
              <View style={styles.stationRowContainer}>
                <TouchableHighlight onPress={() => {AnswerSheet.setAnswer(6,'A'), this.setState({chosenAnswerStation6: 'A'})}} underlayColor="rgba(96,100,109, 1)" style={[styles.unchosenButtonStyle, this.state.chosenAnswerStation6==='A' && styles.chosenButtonStyle]}>
                    <Text style={[styles.anyButtonText, this.state.chosenAnswerStation6==='A' && styles.chosenButtonText]}>
                      A
                    </Text>
                </TouchableHighlight>
              </View>
              <View style={styles.stationRowContainer}>
                <TouchableHighlight onPress={() => {AnswerSheet.setAnswer(6,'B'), this.setState({chosenAnswerStation6: 'B'})}} underlayColor="rgba(96,100,109, 1)" style={[styles.unchosenButtonStyle, this.state.chosenAnswerStation6==='B' && styles.chosenButtonStyle]}>
                    <Text style={[styles.anyButtonText, this.state.chosenAnswerStation6==='B' && styles.chosenButtonText]}>
                      B
                    </Text>
                </TouchableHighlight>
              </View>
            </View>

            <View style={styles.stationAnswerVerticalContainer}>
              <View style={styles.stationRowContainer}>
                <TouchableHighlight onPress={() => {AnswerSheet.setAnswer(6,'C'), this.setState({chosenAnswerStation6: 'C'})}} underlayColor="rgba(96,100,109, 1)" style={[styles.unchosenButtonStyle, this.state.chosenAnswerStation6==='C' && styles.chosenButtonStyle]}>
                    <Text style={[styles.anyButtonText, this.state.chosenAnswerStation6==='C' && styles.chosenButtonText]}>
                      C
                    </Text>
                </TouchableHighlight>
              </View>
              <View style={styles.stationRowContainer}>
                <TouchableHighlight onPress={() => {AnswerSheet.setAnswer(6,'D'), this.setState({chosenAnswerStation6: 'D'})}} underlayColor="rgba(96,100,109, 1)" style={[styles.unchosenButtonStyle, this.state.chosenAnswerStation6==='D' && styles.chosenButtonStyle]}>
                    <Text style={[styles.anyButtonText, this.state.chosenAnswerStation6==='D' && styles.chosenButtonText]}>
                      D
                    </Text>
                </TouchableHighlight>
              </View>
            </View>

            <View style={styles.stationBottomNextContainer}>
              <View style={styles.stationRowContainer}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Station5')} underlayColor="rgba(96,100,109, 1)" style={styles.unchosenButtonStyle}>
                      <IconEntypo name="arrow-bold-left" size={hp("3%")} color="white"/>
                </TouchableHighlight>
              </View>
              <View style={styles.stationRowContainer}/>
              <View style={styles.stationRowContainer}/>
              <View style={styles.stationRowContainer}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Station7')} underlayColor="rgba(96,100,109, 1)" style={styles.unchosenButtonStyle}>
                    <IconEntypo name="arrow-bold-right" size={hp("3%")} color="white"/>
                </TouchableHighlight>
              </View>
            </View>

          </View>

   
        );
      }          
}