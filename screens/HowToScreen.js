import React from 'react';
import {Text,View,TouchableHighlight,Platform,WebView} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document in /constants/Styles.js
import { ScrollView } from 'react-native-gesture-handler';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Audio} from 'expo';
import AudioFile from '../constants/AudioFile';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'; // to be able to have a proper design on every platform, I downloaded this package from  this website: https://www.npmjs.com/package/react-native-responsive-screen

/**
 * IDEA:
 * This screen should inform the user what the quiz is all about, how the whole process work and what 
 * he or she has to do to get a reward at the end of the quiz.
 */
export default class HowToScreen extends React.Component {
    static navigationOptions = {
    title: "HowToScreen",    // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js
    header: null, // do not show the navigation header, because the functions should not be available yet
  };

  constructor(props) {
    super(props);
    // create a new sound object
    this.howToTextSound = new Audio.Sound();
    this.state = {
      // if the flag is true, the play method should be invoked, else the replay method
      audioIsPaused : false, 
    }
  };

  /**
   * IDEA:
   * make that the sound is also playing on ios even if the phone is on silent mode
   * this is done by setting the playsInSilentModeIOS to true, for more information look in the 
   * definition of the modes. IMPORTANT: all modes have to be set, otherwise you get an error.
  */
  async prepareSound(){
    // 
    await Expo.Audio.setIsEnabledAsync(true);
    await Expo.Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      allowsRecordingIOS: false,
      interruptionModeIOS: Expo.Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      shouldDuckAndroid: false,
      interruptionModeAndroid: Expo.Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: false,
    });
  }

  /**
   * IDEA: 
   * if the component will mount, load the audio file into the sound object
   */
  async componentWillMount(){
    await this.howToTextSound.loadAsync(require('../assets/sounds/abc.mp3'));
  };

  /**
   * IDEA:
   * this method should continue to play the audio if the is paused flag is true, else
   * it should restart playing the audio from the beginning
   */
  async playFunction(){ 
    if(this.state.audioIsPaused){
      this.prepareSound();
      this.setState({audioIsPaused:false});
      await this.howToTextSound.playAsync();
    }   
    else{
      this.prepareSound();
      await this.howToTextSound.replayAsync();
    }
  };

  /**
   * IDEA:
   * this method pause the audio
   */
  async pauseFunction(){
    await this.howToTextSound.pauseAsync();
    this.setState({audioIsPaused:true});
  };

  /**
   * IDEA: 
   * this method stops the audio
   */
  async stopFunction(){
    await this.howToTextSound.stopAsync();
  };

  render() {
    // differ between iOS and Android since on Android the textAlign:justify is only available through the workaround over a webview
    if(Platform.OS === 'ios') {
      return (      
        <View style={styles.anyWholeScreen}>
          
          {/*Set the title of the Screen*/}        
          <View style={styles.howToTitleTextContainer}>
            <Text style={styles.howToTitleTextFormat}>
              Willkommen! 
            </Text>
          </View>  

          {/*Do a scrollview for the text in iOS*/}   
          <View style={styles.howToTextContainer}>
              <ScrollView showsVerticalScrollIndicator={true}>
                  <Text style={styles.howToTextFormat}>
                    Die Festung Fürigen ist ein unterirdischer Bunker, der 1941 – während des Zweiten Weltkrieges – 
                    für die militärische Verteidigung der Schweiz gebaut wurde. Dieser Krieg wütete zwischen den 
                    Jahren 1939 und 1945. Es waren alle Nachbarländer der Schweiz am Krieg beteiligt. Die Schweiz 
                    war wie eine kleine neutrale Insel inmitten Europas. 
                    {"\n"}{"\n"}
                    Obwohl die Schweiz nicht am Krieg beteiligt war, musste sie sich vor allfälligen Angriffen 
                    schützen. Aus diesem Grund wurden in den Schweizer Alpen viele Festungen gebaut. In der Festung 
                    Fürigen wohnten regelmässig Soldaten, um sich für den Ernstfall vorzubereiten. 
                    {"\n"}{"\n"}
                    Früher war die Festung streng geheim: Niemand, der davon wusste, durfte darüber reden. Heute 
                    gehört die Festung nicht mehr der Armee, sondern dient nur noch als Museum.   
                    {"\n"}{"\n"}
                    Inzwischen haben es sich die Füchsin Finja und der Dachs Dario in der Festung gemütlich gemacht. 
                    Sie werden euch beim Rundgang in der Festung begleiten. So werdet ihr gemeinsam die 
                    wichtigsten Sachen über den Alltag der Soldaten entdecken, die hier früher ihren Militärdienst 
                    geleistet haben.
                    {"\n"}{"\n"}
                    Viel Spass!
                  </Text>
              </ScrollView>
          </View>

          {/* show the right button depending if we still need to do the tutorial or not*/}   
          {this.toStationOrToTutorialButton()}
  
        </View>
      );
    } 
    else {
      return (      
        <View style={styles.anyWholeScreen}>
            
          {/*Set the title of the Screen*/}        
          <View style={styles.howToTitleTextContainer}>
            <Text style={styles.howToTitleTextFormat}>
              Willkommen!
            </Text>
          </View>  
                      
          {/*Do a scrollview for the text in android*/}   
          <View style={styles.howToTextContainer}>
                {/*fontsize in css for right size according to the screenheight use: https://stackoverflow.com/questions/16056591/font-scaling-based-on-width-of-container */}
                <WebView source={{ html: "<html><p style='text-align: justify; color:rgba(96,100,109, 1); font-size:6vw;'>"+

                  "Die Festung Fürigen ist ein unterirdischer Bunker, der 1941 – während des Zweiten Weltkrieges – "+
                  "für die militärische Verteidigung der Schweiz gebaut wurde. "+
                  "Dieser Krieg wütete zwischen den Jahren 1939 und 1945. Es waren alle Nachbarländer "+
                  "der Schweiz am Krieg beteiligt. Die Schweiz war wie eine kleine neutrale Insel inmitten Europas. "+
                  "<br>"+"<br>"+
                  "Obwohl die Schweiz nicht am Krieg beteiligt war, musste sie sich vor allfälligen Angriffen "+
                  "schützen. Aus diesem Grund wurden in den Schweizer Alpen viele Festungen gebaut. In der Festung "+
                  "Fürigen wohnten regelmässig Soldaten, um sich für den Ernstfall vorzubereiten. "+
                  "<br>"+"<br>"+
                  "Früher war die Festung streng geheim: Niemand, der davon wusste, durfte darüber reden. Heute "+
                  "gehört die Festung nicht mehr der Armee, sondern dient nur noch als Museum. "+
                  "<br>"+"<br>"+
                  "Inzwischen haben es sich die Füchsin Finja und der Dachs Dario in der Festung gemütlich gemacht. "+
                  "Sie werden euch beim Rundgang in der Festung begleiten. So werdet ihr gemeinsam die "+
                  "wichtigsten Sachen über den Alltag der Soldaten entdecken, die hier früher ihren Militärdienst "+
                  "geleistet haben."+
                  "<br>"+"<br>"+
                  "Viel Spass!"+

                "</p></html>"}} 
                style={styles.howToTextFormatAndroid}
                />
          </View>

          {/* show the right button depending if we still need to do the tutorial or not*/}   
          {this.toStationOrToTutorialButton()}
    
        </View>
      );
    }
  }

  /**
   * IDEA:
   * if the tutorialDone flag is true, the tutorial was already made and we navigate to the station 1 directly,
   * else we go through the tutorial
   */
  toStationOrToTutorialButton(){
    if(this.props.navigation.getParam('tutorialFlag') === 'true'){
      return (
        <View style={styles.howToBottomContainer}>
          {/* show three buttons for the audio file: play, pause and stop*/}
          <View style={styles.howToAudioContainer}>
            <TouchableHighlight onPress={() => {AudioFile.audioFunction('HowTo','play')}} underlayColor="rgba(96,100,109, 1)" style={styles.howToButtonAudioStyle}>
              <IconMaterialCommunityIcons name='play-circle-outline' size={hp('7%')} color='#C92732'/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {AudioFile.audioFunction('HowTo','pause')}} underlayColor="rgba(96,100,109, 1)" style={styles.howToButtonAudioStyle}>
              <IconMaterialCommunityIcons name='pause-circle-outline' size={hp('7%')} color='#C92732'/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {AudioFile.audioFunction('HowTo','stop')}} underlayColor="rgba(96,100,109, 1)" style={styles.howToButtonAudioStyle}>
              <IconMaterialCommunityIcons name='stop-circle-outline' size={hp('7%')} color='#C92732'/>
            </TouchableHighlight>
          </View>
          {/* show the navigation button to station 1 since the tutorialFlag is true*/}
          <View style={styles.howToNextScreenContainer}>
            <TouchableHighlight onPress={() => {AudioFile.audioFunction('HowTo','stop');this.props.navigation.navigate('Station1')}} underlayColor="rgba(96,100,109, 1)" style={styles.howToButtonStyle}>
              <Text style={styles.howToButtonText} numberOfLines={1}>
                zur Station 1 
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      );
    }
    else{
      return(
        <View style={styles.howToBottomContainer}>
          {/* show three buttons for the audio file: play, pause and stop*/}
          <View style={styles.howToAudioContainer}>
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
          {/* show the navigation button to tutorial1 since the tutorialFlag is false */}
          <View style={styles.howToNextScreenContainer}>
            <TouchableHighlight onPress={() => {this.stopFunction();this.props.navigation.navigate('Tutorial1')}} underlayColor="rgba(96,100,109, 1)" style={styles.howToButtonStyle}>
              <Text style={styles.howToButtonText} numberOfLines={1}>
                zum Tutorial 
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      );
    }
  }
}