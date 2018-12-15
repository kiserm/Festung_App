import React from 'react';
import {Text,View,TouchableHighlight,Platform,WebView,Image} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document in /constants/Styles.js
import { ScrollView } from 'react-native-gesture-handler';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Audio} from 'expo';
import AudioFile from '../constants/AudioFile';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'; // to be able to have a proper design on every platform, I downloaded this package from  this website: https://www.npmjs.com/package/react-native-responsive-screen
import QuestionSheet from '../constants/QuestionSheet';

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
                    {QuestionSheet.getInfo(0)}
                  </Text>
              </ScrollView>
          </View>

          {/* show the right button depending if we still need to do the tutorial or not*/}   
          {this.toStationAndAudioButtons()}

          <View style={styles.howToBadgersContainer}>
            <Image source={require('../assets/images/badgerHowTo.png')} style={styles.howToBadgerImageStyle}/>
          </View>
  
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
                  QuestionSheet.getInfo(0) +
                "</p></html>"}} 
                style={styles.howToTextFormatAndroid}
                />
          </View>

          {/* show the right button depending if we still need to do the tutorial or not*/}   
          {this.toStationAndAudioButtons()}

          <View style={styles.howToBadgersContainer}>
            <Image source={require('../assets/images/badgerHowTo.png')} style={styles.howToBadgerImageStyle}/>
          </View>
    
        </View>
      );
    }
  }

  /**
   * IDEA:
   * show start button and the three audio buttons. method here to have it written once and not twice once for 
   * android and once for ios
   */
  toStationAndAudioButtons(){
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
          <TouchableHighlight onPress={() => {
              if(AudioFile.getAudioStatus('HowTo')){
                AudioFile.audioFunction('HowTo','pause');
                this.props.navigation.navigate('Station1');
              }
              else{
                this.props.navigation.navigate('Station1');
              } 
            }} 
            underlayColor="rgba(96,100,109, 1)" 
            style={styles.howToButtonStyle}>
            <Text style={styles.howToButtonText} numberOfLines={1}>
              Los gehts! 
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}