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
 * this screen shows the first info text of the quiz
 */
export default class Station1Screen extends React.Component {
  static navigationOptions = {
    title: "Station1Screen", // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js   
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
                Station 1 - Info 
            </Text>
          </View>

          {/*Do a scrollview for the infotext in iOS*/}   
            <View style={styles.stationInfoTextContainer}>
                <ScrollView showsVerticalScrollIndicator={true}>
                    <Text style={styles.stationInfoTextIOS}>
                      {QuestionSheet.getInfo(1)}
                    </Text>
                </ScrollView>
            </View>

            {this.showAudioAndNextButton()}

          {/* show somewhere on the screen either finja the fox, dario the badger or both, only for design purpose*/}   
          <View style={styles.station1InfoFoxContainer}>
            <Image source={require('../assets/images/foxStation1Info.png')} style={styles.station1InfoFoxImageStyle}/>
          </View>

        </View>
      );
    }
    else {
      return(
        <View style={styles.anyWholeScreen}>
            
          {/*show the station title*/}
          <View style={styles.stationInfoTitleTextContainer}>
            <Text style={styles.stationInfoTitleTextFormat}>
                Station 1 - Info 
            </Text>
          </View>

          {/*Do a scrollview for the text in android*/}   
          <View style={styles.stationInfoTextContainer}>
                {/*fontsize in css for right size according to the screenheight use: https://stackoverflow.com/questions/16056591/font-scaling-based-on-width-of-container */}
                <WebView source={{ html: "<html><p style='text-align: justify; color:rgba(96,100,109, 1); font-size:6vw;'>"+
                                          QuestionSheet.getInfo(1)+
                                          "</p></html>"
                                  }} 
                style={styles.stationInfoTextAndroid}
                />
          </View>

          {this.showAudioAndNextButton()}

          {/* show somewhere on the screen either finja the fox, dario the badger or both, only for design purpose*/}   
          <View style={styles.station1InfoFoxContainer}>
            <Image source={require('../assets/images/foxStation1Info.png')} style={styles.station1InfoFoxImageStyle}/>
          </View>
    
        </View>
      );
    }
  } 
  
  /**
   * IDEA:
   * write this function for code reuse and if we alter something, do it only here and not in the ios AND android section
   */
  showAudioAndNextButton(){
    return(
      <View style={styles.stationInfoBottomContainer}>
        {/* show three buttons for the audio file: play, pause and stop*/}
        <View style={styles.stationInfoAudioContainer}>
            <TouchableHighlight onPress={() => {AudioFile.audioFunction('Station1Info','play')}} underlayColor="rgba(96,100,109, 1)" style={styles.stationInfoButtonAudioStyle}>
              <IconMaterialCommunityIcons name='play-circle-outline' size={hp('7%')} color='#C92732'/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {AudioFile.audioFunction('Station1Info','pause')}} underlayColor="rgba(96,100,109, 1)" style={styles.stationInfoButtonAudioStyle}>
              <IconMaterialCommunityIcons name='pause-circle-outline' size={hp('7%')} color='#C92732'/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {AudioFile.audioFunction('Station1Info','stop')}} underlayColor="rgba(96,100,109, 1)" style={styles.stationInfoButtonAudioStyle}>
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
                if(AudioFile.getAudioStatus('Station1Info')){
                  AudioFile.audioFunction('Station1Info','pause');
                  if(this.props.navigation.getParam('originScreenName')==='Result'){
                    this.props.navigation.navigate('Result');
                  }
                  else{
                  this.props.navigation.navigate('HowTo');
                  }
                }
                else{
                  if(this.props.navigation.getParam('originScreenName')==='Result'){
                    this.props.navigation.navigate('Result');
                  }
                  else{
                  this.props.navigation.navigate('HowTo');
                  }
                } 
              }} 
              underlayColor="rgba(96,100,109, 1)" 
              style={styles.stationInfoNextButtonStyle}> 
            <Text style={styles.stationInfoNextButtonText}>Zurück </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {
                  if(AudioFile.getAudioStatus('Station1Info')){
                    AudioFile.audioFunction('Station1Info','pause');
                    if(this.props.navigation.getParam('originScreenName')==='Result'){
                      this.props.navigation.navigate('SubmittedStation1');
                    }
                    else{
                      this.props.navigation.navigate('Station1Question');
                    }
                  }
                  else{
                    if(this.props.navigation.getParam('originScreenName')==='Result'){
                      this.props.navigation.navigate('SubmittedStation1');
                    }
                    else{
                      this.props.navigation.navigate('Station1Question');
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