import React from 'react';
import {Text,View,TouchableHighlight,Platform,WebView} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document in /constants/Styles.js
import { ScrollView } from 'react-native-gesture-handler';

import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Constants, Audio } from 'expo';
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
    this.howToTextSound = new Audio.Sound();
    this.state = {
      audioIsPaused : false,
    }
  };

  async componentWillMount(){
    await this.howToTextSound.loadAsync(require('../assets/sounds/abc.mp3'));
  }

  async playFunction(){ 
    if(this.state.audioIsPaused){
      this.setState({audioIsPaused:false});
      await this.howToTextSound.playAsync();
    }   
    else{
      await this.howToTextSound.replayAsync();
    }
  }

  async pauseFunction(){
    await this.howToTextSound.pauseAsync();
    this.setState({audioIsPaused:true});
  }

  async stopFunction(){
    await this.howToTextSound.stopAsync();
  }


  render() {
    // differ between iOS and Android since on Android the textAlign:justify is only available through the workaround over a webview
    if(Platform.OS === 'ios') {
      return (      
        <View style={styles.anyWholeScreen}>
          
          {/*Set the title of the Screen*/}        
          <View style={styles.howToTitleTextContainer}>
            <Text style={styles.howToTitleTextFormat}>
              So geht's! 
            </Text>
          </View>  

          {/*Do a scrollview for the text in iOS*/}   
          <View style={styles.howToTextContainer}>
              <ScrollView showsVerticalScrollIndicator={true}>
                  <Text style={styles.howToTextFormat}>
                      Bei jeder Station gilt es etwas herauszufinden. Wenn Du alle Rätsel richtig gelöst
                      hast, kannst Du am Ende einen Preis abholen. Falls Dir ein paar Fehler unterlaufen 
                      sollten, musst Du nicht traurig sein. Denn es gibt für jeden, der sich in das Abenteuer 
                      gestürzt hat, eine kleine Belohnung.
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
              So geht's!
            </Text>
          </View>  
                      
          {/*Do a scrollview for the text in android*/}   
          <View style={styles.howToTextContainer}>
                {/*fontsize in css for right size according to the screenheight use: https://stackoverflow.com/questions/16056591/font-scaling-based-on-width-of-container */}
                <WebView source={{ html: "<html><p style='text-align: justify; color:rgba(96,100,109, 1); font-size:6vw;'>"+

                "Bei jeder Station gilt es etwas herauszufinden. Wenn Du alle Rätsel richtig gelöst "+
                "hast, kannst Du am Ende einen Preis abholen. Falls Dir ein paar Fehler unterlaufen "+
                "sollten, musst Du nicht traurig sein. Denn es gibt für jeden, der sich in das Abenteuer "+
                "gestürzt hat, eine kleine Belohnung."+

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
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Station1')} underlayColor="rgba(96,100,109, 1)" style={styles.howToButtonStyle}>
            <Text style={styles.howToButtonText} numberOfLines={1}>
              zur Station 1
            </Text>
          </TouchableHighlight>
        </View>
      );
    }
    else{
      return(
        <View style={styles.howToBottomContainer}>
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
          <View style={styles.howToNextScreenContainer}>
            <TouchableHighlight onPress={() => {this.props.navigation.navigate('Tutorial1')}} underlayColor="rgba(96,100,109, 1)" style={styles.howToButtonStyle}>
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