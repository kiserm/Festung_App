import React from 'react';
import {Text,View,TouchableHighlight} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document
import AnswerSheet from '../constants/AnswerSheet';
import QuestionSheet from '../constants/QuestionSheet';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { ScrollView } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';// to be able to have a proper design on every platform, I downloaded this package from this website: https://www.npmjs.com/package/react-native-responsive-screen

/**
 * IDEA:
 * this screen shows the first info text of the quiz
 */
export default class Station1Screen extends React.Component {
  static navigationOptions = {
    title: "Station1Screen", // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js   
  };   

  render() {
    return (      
      <View style={styles.anyWholeScreen}>
        
        {/*Set the title of the Screen*/}        
        <View style={styles.stationInfoTitleTextContainer}>
          <Text style={styles.stationInfoTitleTextFormat}>
            Station 1
          </Text>
        </View>     
        
        {/*Do a scrollview for the infotext in iOS*/}   
          <View style={styles.howToTextContainer}>
              <ScrollView showsVerticalScrollIndicator={true}>
                  <Text style={styles.howToTextFormat}>
                    {QuestionSheet.getInfo(1)}
                  </Text>
              </ScrollView>
          </View>
        
        {/* show three buttons for the audio file: play, pause and stop*/}
        <View style={styles.StationAudioContainer}>
            <TouchableHighlight onPress={() => {this.playFunction()}} underlayColor="rgba(96,100,109, 1)" style={styles.howToButtonAudioStyle}>
              <IconMaterialCommunityIcons name='play-circle-outline' size={hp('7%')} color='#C92732'/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {this.pauseFunction()}} underlayColor="rgba(96,100,109, 1)" style={styles.howToButtonAudioStyle}>
              <IconMaterialCommunityIcons name='pause-circle-outline' size={hp('7%')} color='#C92732'/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {this.stopFunction()}} underlayColor="rgba(96,100,109, 1)" style={styles.howToButtonAudioStyle}>
              <IconMaterialCommunityIcons name='stop-circle-outline' size={hp('7%')} color='#C92732'/>
            </TouchableHighlight>
        </View>

        {/* back and forward button to navigate to the previous respectively to the next question*/}        
        <View style={styles.stationInfoBottomNextContainer}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Station1Question')} underlayColor="rgba(96,100,109, 1)" style={styles.homeButtonStyle}>
              <Text style={styles.homeButtonText}>zur Frage 1 </Text>
          </TouchableHighlight>
        </View>

      </View>
    );
  }          
}