import React from 'react';
import {Text,View,TouchableHighlight,Platform,WebView,Image} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document
import QuestionSheet from '../constants/QuestionSheet';
import { ScrollView } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';// to be able to have a proper design on every platform, I downloaded this package from this website: https://www.npmjs.com/package/react-native-responsive-screen
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AudioFile from '../constants/AudioFile';
import OwnElement from '../constants/OwnElements';

/**
 * IDEA:
 * this screen shows the first info text of the quiz
 */
export default class Station3Screen extends React.Component {
  static navigationOptions = {
    title: "Station3Screen", // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js   
  };   

  render() {
    // differ between ios and android since the scrollview is not implemented in android so far. there we need
    // a workaround over the webview to have a scrollable text
    if(Platform.OS === 'ios'){
      return (      
        <View style={styles.anyWholeScreen}>
          
          {OwnElement.showStationInfoTitle(3)}
          
          {/*Do a scrollview for the infotext in iOS*/}   
          <View style={styles.stationInfoTextContainer}>
              <ScrollView showsVerticalScrollIndicator={true}>
                  <Text style={styles.stationInfoTextIOS}>
                    {QuestionSheet.getInfo(3)}
                  </Text>
              </ScrollView>
          </View>

          {this.showStationInfoAudioAndNextButton()}

          {/* show somewhere on the screen either finja the fox, dario the badger or both, only for design purpose*/} 
          <Image source={require('../assets/images/badgerQuestion4.png')} style={styles.station3InfoImageStyle}/>

        </View>
      );
    }
    else {
      return(
        <View style={styles.anyWholeScreen}>
            
          {OwnElement.showStationInfoTitle(3)}
                      
          {/*Do a scrollview for the text in android with the help of a webview*/}   
          <View style={styles.stationInfoTextContainer}>
            {/*fontsize in css for right size according to the screenheight use: https://stackoverflow.com/questions/16056591/font-scaling-based-on-width-of-container */}
            <WebView source={{ html: "<html><p style='text-align: justify; color:rgba(96,100,109, 1); font-size:6vw;'>"+
                                      QuestionSheet.getInfo(3)+
                                      "</p></html>"
                              }} 
            style={styles.stationInfoTextAndroid}
            />
          </View>

          {this.showStationInfoAudioAndNextButton()}

          {/* show somewhere on the screen either finja the fox, dario the badger or both, only for design purpose*/} 
          <Image source={require('../assets/images/badgerQuestion4.png')} style={styles.station3InfoImageStyle}/>

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
            <TouchableHighlight onPress={() => {AudioFile.audioFunction('Station3Info','play')}} underlayColor="rgba(96,100,109, 1)" style={styles.stationInfoButtonAudioStyle}>
              <IconMaterialCommunityIcons name='play-circle-outline' size={hp('7%')} color='#C92732'/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {AudioFile.audioFunction('Station3Info','pause')}} underlayColor="rgba(96,100,109, 1)" style={styles.stationInfoButtonAudioStyle}>
              <IconMaterialCommunityIcons name='pause-circle-outline' size={hp('7%')} color='#C92732'/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {AudioFile.audioFunction('Station3Info','stop')}} underlayColor="rgba(96,100,109, 1)" style={styles.stationInfoButtonAudioStyle}>
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
                if(AudioFile.getAudioStatus('Station3Info')){
                  AudioFile.audioFunction('Station3Info','pause');
                  if(this.props.navigation.getParam('originScreenName')==='Result'){
                    this.props.navigation.navigate('Result');
                  }
                  else{
                  this.props.navigation.navigate('Station2Question');
                  }
                }
                else{
                  if(this.props.navigation.getParam('originScreenName')==='Result'){
                    this.props.navigation.navigate('Result');
                  }
                  else{
                  this.props.navigation.navigate('Station2Question');
                  }
                } 
              }} 
              underlayColor="rgba(96,100,109, 1)" 
              style={styles.stationInfoNextButtonStyle}> 
            <Text style={styles.stationInfoNextButtonText}>Zurück </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {
                  if(AudioFile.getAudioStatus('Station3Info')){
                    AudioFile.audioFunction('Station3Info','pause');
                    if(this.props.navigation.getParam('originScreenName')==='Result'){
                      this.props.navigation.navigate('SubmittedStation3');
                    }
                    else{
                      this.props.navigation.navigate('Station3Question');
                    }
                  }
                  else{
                    if(this.props.navigation.getParam('originScreenName')==='Result'){
                      this.props.navigation.navigate('SubmittedStation3');
                    }
                    else{
                      this.props.navigation.navigate('Station3Question');
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