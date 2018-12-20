import React from 'react';
import {Text,View,TouchableHighlight,Platform,WebView,Image} from 'react-native';
import styles from '../constants/Styles';
import QuestionSheet from '../constants/QuestionSheet';
import { ScrollView } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AudioFile from '../constants/AudioFile';

/**
 * IDEA:
 * this screen shows the 10th info text of the quiz
 */
export default class Station10Screen extends React.Component {
  static navigationOptions = {
    title: "Station10Screen", // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js   
  };   

  render() {
    // differ between ios and android since the scrollview is not implemented in android so far. there we need
    // a workaround over the webview to have a scrollable text
    if(Platform.OS === 'ios'){
      return (      
        <View style={styles.anyWholeScreen}>
          
          {/*show the station title*/}
          <View style={styles.stationInfoTitleTextContainer}>
            <Text style={styles.stationInfoTitleTextFormat}>
                Station 10- Info 
            </Text>
          </View>

          {/*Do a scrollview for the infotext in iOS*/}   
          <View style={styles.stationInfoTextContainer}>
              <ScrollView showsVerticalScrollIndicator={true}>
                  <Text style={styles.stationInfoTextIOS}>
                    {QuestionSheet.getInfo(10)}
                  </Text>
              </ScrollView>
          </View>

          {this.showStationInfoAudioAndNextButton()}

          {/* show somewhere on the screen either finja the fox, dario the badger or both, only for design purpose*/} 
          <Image source={require('../assets/images/badgerQuestion1.png')} style={styles.station10InfoImageStyle1}/>
          <Image source={require('../assets/images/foxQuestion2.png')} style={styles.station10InfoImageStyle2}/>

        </View>
      );
    }
    else {
      return(
        <View style={styles.anyWholeScreen}>
            
          {OwnElement.showStationInfoTitle(10)}
                      
          {/*Do a scrollview for the text in android with the help of a webview*/}   
          <View style={styles.stationInfoTextContainer}>
            {/*fontsize in css for right size according to the screenheight use: https://stackoverflow.com/questions/16056591/font-scaling-based-on-width-of-container */}
            <WebView source={{ html: "<html><p style='text-align: justify; color:rgba(96,100,109, 1); font-size:6vw;'>"+
                                      QuestionSheet.getInfo(10)+
                                      "</p></html>"
                              }} 
            style={styles.stationInfoTextAndroid}
            />
          </View>

          {this.showStationInfoAudioAndNextButton()}

          {/* show somewhere on the screen either finja the fox, dario the badger or both, only for design purpose*/} 
          <Image source={require('../assets/images/badgerQuestion1.png')} style={styles.station10InfoImageStyle1}/>
          <Image source={require('../assets/images/foxQuestion2.png')} style={styles.station10InfoImageStyle2}/>

        </View>
      );
    }
  } 

  /**
   * IDEA:
   * write this function for code reuse and if we alter something, do it only here and not in the ios AND android section
   */
  showStationInfoAudioAndNextButton(){      
    return(
      <View style={styles.stationInfoBottomContainer}>
        {/* show three buttons for the audio file: play, pause and stop*/}
        <View style={styles.stationInfoAudioContainer}>
            <TouchableHighlight onPress={() => {AudioFile.audioFunction('Station10Info','play',false)}} underlayColor="rgba(96,100,109, 1)" style={styles.stationInfoButtonAudioStyle}>
              <IconMaterialCommunityIcons name='play-circle-outline' size={hp('7%')} color='#C92732'/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {AudioFile.audioFunction('Station10Info','pause',true)}} underlayColor="rgba(96,100,109, 1)" style={styles.stationInfoButtonAudioStyle}>
              <IconMaterialCommunityIcons name='pause-circle-outline' size={hp('7%')} color='#C92732'/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {AudioFile.audioFunction('Station10Info','stop',false)}} underlayColor="rgba(96,100,109, 1)" style={styles.stationInfoButtonAudioStyle}>
              <IconMaterialCommunityIcons name='stop-circle-outline' size={hp('7%')} color='#C92732'/>
            </TouchableHighlight>
        </View>

        {/* back and forward button to navigate to the previous respectively to the next question
            if the audio is playing when the user wants to leave the screen, then the audio should be paused
            if the user comes from the result screen, he should navigate to the submittedStation and no more to the question
            if the user comes from the result screen, he should navigate BACK to the result screen and not to the previous question 
        */}    
        <View style={styles.stationInfoBottomNextContainer}>
        <TouchableHighlight onPress={() => {
                if(AudioFile.getAudioStatus('Station10Info')){
                  AudioFile.audioFunction('Station10Info','pause');
                  if(this.props.navigation.getParam('originScreenName')==='Result'){
                    this.props.navigation.navigate('Result');
                  }
                  else{
                  this.props.navigation.navigate('Station9Question');
                  }
                }
                else{
                  if(this.props.navigation.getParam('originScreenName')==='Result'){
                    this.props.navigation.navigate('Result');
                  }
                  else{
                  this.props.navigation.navigate('Station9Question');
                  }
                } 
              }} 
              underlayColor="rgba(96,100,109, 1)" 
              style={styles.stationInfoNextButtonStyle}> 
            <Text style={styles.stationInfoNextButtonText}>Zurück </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {
                  if(AudioFile.getAudioStatus('Station10Info')){
                    AudioFile.audioFunction('Station10Info','pause');
                    if(this.props.navigation.getParam('originScreenName')==='Result'){
                      this.props.navigation.navigate('SubmittedStation10');
                    }
                    else{
                      this.props.navigation.navigate('Station10Question');
                    }
                  }
                  else{
                    if(this.props.navigation.getParam('originScreenName')==='Result'){
                      this.props.navigation.navigate('SubmittedStation10');
                    }
                    else{
                      this.props.navigation.navigate('Station10Question');
                    }
                  } 
                }} 
                underlayColor="rgba(96,100,109, 1)" 
                style={styles.stationInfoNextButtonStyle}> 
              <Text style={styles.stationInfoNextButtonText}>Zur Frage </Text>
            </TouchableHighlight>
        </View>
      </View>
    );
  }
}