import React from 'react';
import {Text,View,TouchableHighlight} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document

import AnswerSheet from '../constants/AnswerSheet';
import IconEntypo from 'react-native-vector-icons/Entypo'
// to be able to have a proper design on every platform, I downloaded this package from 
// this website: https://www.npmjs.com/package/react-native-responsive-screen
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Station8Screen extends React.Component {
      // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js
      static navigationOptions = {
        title: "Station8Screen",    
      };

      constructor(props) {
        super(props);
        this.state = { chosenAnswerStation8: AnswerSheet.getAnswer(8) };
      };
    
      render() {
        return (      
          <View style={styles.anyWholeScreen}>
            
            {/*Set the title of the Screen*/}        
            <View style={styles.stationTitleTextContainer}>
              <Text style={styles.anyTitleTextFormat}>
                Station 8
              </Text>
            </View>     
            
            <View style={styles.stationTextContainer}>
                <Text style={styles.stationTextFormat}>
                  Dies ist eine Testfrage. Wähle A,B,C oder D.
                </Text>
            </View>

            <View style={styles.stationAnswerVerticalContainer}>
              <View style={styles.stationRowContainer}>
                <TouchableHighlight onPress={() => {AnswerSheet.setAnswer(8,'A'), this.setState({chosenAnswerStation8: 'A'})}} underlayColor="rgba(96,100,109, 1)" style={[styles.unchosenButtonStyle, this.state.chosenAnswerStation8==='A' && styles.chosenButtonStyle]}>
                    <Text style={[styles.anyButtonText, this.state.chosenAnswerStation8==='A' && styles.chosenButtonText]}>
                      A
                    </Text>
                </TouchableHighlight>
              </View>
              <View style={styles.stationRowContainer}>
                <TouchableHighlight onPress={() => {AnswerSheet.setAnswer(8,'B'), this.setState({chosenAnswerStation8: 'B'})}} underlayColor="rgba(96,100,109, 1)" style={[styles.unchosenButtonStyle, this.state.chosenAnswerStation8==='B' && styles.chosenButtonStyle]}>
                    <Text style={[styles.anyButtonText, this.state.chosenAnswerStation8==='B' && styles.chosenButtonText]}>
                      B
                    </Text>
                </TouchableHighlight>
              </View>
            </View>

            <View style={styles.stationAnswerVerticalContainer}>
              <View style={styles.stationRowContainer}>
                <TouchableHighlight onPress={() => {AnswerSheet.setAnswer(8,'C'), this.setState({chosenAnswerStation8: 'C'})}} underlayColor="rgba(96,100,109, 1)" style={[styles.unchosenButtonStyle, this.state.chosenAnswerStation8==='C' && styles.chosenButtonStyle]}>
                    <Text style={[styles.anyButtonText, this.state.chosenAnswerStation8==='C' && styles.chosenButtonText]}>
                      C
                    </Text>
                </TouchableHighlight>
              </View>
              <View style={styles.stationRowContainer}>
                <TouchableHighlight onPress={() => {AnswerSheet.setAnswer(8,'D'), this.setState({chosenAnswerStation8: 'D'})}} underlayColor="rgba(96,100,109, 1)" style={[styles.unchosenButtonStyle, this.state.chosenAnswerStation8==='D' && styles.chosenButtonStyle]}>
                    <Text style={[styles.anyButtonText, this.state.chosenAnswerStation8==='D' && styles.chosenButtonText]}>
                      D
                    </Text>
                </TouchableHighlight>
              </View>
            </View>

            <View style={styles.stationBottomNextContainer}>
              <View style={styles.stationRowContainer}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Station7')} underlayColor="rgba(96,100,109, 1)" style={styles.unchosenButtonStyle}>
                      <IconEntypo name="arrow-bold-left" size={hp("3%")} color="white"/>
                </TouchableHighlight>
              </View>
              <View style={styles.stationRowContainer}/>
              <View style={styles.stationRowContainer}/>
              <View style={styles.stationRowContainer}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Station9')} underlayColor="rgba(96,100,109, 1)" style={styles.unchosenButtonStyle}>
                    <IconEntypo name="arrow-bold-right" size={hp("3%")} color="white"/>
                </TouchableHighlight>
              </View>
            </View>

          </View>

   
        );
      }          
}