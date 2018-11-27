import React from 'react';
import {Image,StyleSheet,Text,View,TouchableHighlight,Button,Linking,TextInput} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document
import AnswerSheet from '../constants/AnswerSheet';

import AnswerSheet from '../constants/AnswerSheet';
import IconEntypo from 'react-native-vector-icons/Entypo'
// to be able to have a proper design on every platform, I downloaded this package from 
// this website: https://www.npmjs.com/package/react-native-responsive-screen
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Station5Screen extends React.Component {
      // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js
      static navigationOptions = {
        title: "Station5Screen",    
      };
 
      constructor(props) {
        super(props);
        this.state = { chosenAnswerStation1: '' };
      };
    
      render() {
        return (      
          <View style={styles.anyWholeScreen}>
            
            {/*Set the title of the Screen*/}        
            <View style={styles.stationTitleTextContainer}>
              <Text style={styles.anyTitleTextFormat}>
                Station 1
              </Text>
            </View>     
            
            <View style={styles.stationTextContainer}>
                <Text style={styles.anyTextFormat}>
                  Dies ist eine Testfrage. Wähle A,B,C oder D.
                </Text>
            </View>

            <View style={styles.stationAnswerVerticalContainer}>
              <View style={styles.stationRowContainer}>
                <TouchableHighlight onPress={() => {AnswerSheet.setAnswer(1,'A'), this.setState({chosenAnswerStation1: 'A'})}} underlayColor="rgba(96,100,109, 1)" style={[styles.unchosenButtonStyle, this.state.chosenAnswerStation1==='A' && styles.chosenButtonStyle]}>
                    <Text style={[styles.anyButtonText, this.state.chosenAnswerStation1==='A' && styles.chosenButtonText]} numberOfLines={1}>
                      A
                    </Text>
                </TouchableHighlight>
              </View>
              <View style={styles.stationRowContainer}>
                <TouchableHighlight onPress={() => {AnswerSheet.setAnswer(1,'B'), this.setState({chosenAnswerStation1: 'B'})}} underlayColor="rgba(96,100,109, 1)" style={[styles.unchosenButtonStyle, this.state.chosenAnswerStation1==='B' && styles.chosenButtonStyle]}>
                    <Text style={[styles.anyButtonText, this.state.chosenAnswerStation1==='B' && styles.chosenButtonText]} numberOfLines={1}>
                      B
                    </Text>
                </TouchableHighlight>
              </View>
            </View>

            <View style={styles.stationAnswerVerticalContainer}>
              <View style={styles.stationRowContainer}>
                <TouchableHighlight onPress={() => {AnswerSheet.setAnswer(1,'C'), this.setState({chosenAnswerStation1: 'C'})}} underlayColor="rgba(96,100,109, 1)" style={[styles.unchosenButtonStyle, this.state.chosenAnswerStation1==='C' && styles.chosenButtonStyle]}>
                    <Text style={[styles.anyButtonText, this.state.chosenAnswerStation1==='C' && styles.chosenButtonText]} numberOfLines={1}>
                      C
                    </Text>
                </TouchableHighlight>
              </View>
              <View style={styles.stationRowContainer}>
                <TouchableHighlight onPress={() => {AnswerSheet.setAnswer(1,'D'), this.setState({chosenAnswerStation1: 'D'})}} underlayColor="rgba(96,100,109, 1)" style={[styles.unchosenButtonStyle, this.state.chosenAnswerStation1==='D' && styles.chosenButtonStyle]}>
                    <Text style={[styles.anyButtonText, this.state.chosenAnswerStation1==='D' && styles.chosenButtonText]} numberOfLines={1}>
                      D
                    </Text>
                </TouchableHighlight>
              </View>
            </View>

            <View style={styles.stationBottomNextContainer}>
              <View style={styles.stationRowContainer}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('HowTo')} underlayColor="rgba(96,100,109, 1)" style={styles.unchosenButtonStyle}>
                    <Text style={styles.anyButtonText} numberOfLines={1}>
                      <IconEntypo name="arrow-bold-left" size={hp("3%")} color="white"/>
                    </Text>
                </TouchableHighlight>
              </View>
              <View style={styles.stationRowContainer}/>
              <View style={styles.stationRowContainer}/>
              <View style={styles.stationRowContainer}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Station2')} underlayColor="rgba(96,100,109, 1)" style={styles.unchosenButtonStyle}>
                    <IconEntypo name="arrow-bold-right" size={hp("3%")} color="white"/>
                </TouchableHighlight>
              </View>
            </View>

          </View>

   
        );
      }          
}