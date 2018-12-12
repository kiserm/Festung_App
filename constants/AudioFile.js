import React from 'react';
import {Audio} from 'expo';

/**
 * IDEA:
 * This class carries all the audio files in it and all the function to play them.
 */
export class AudioFile extends React.Component{
  constructor(props) {
      super(props);
      // create a new sound object
      this.howToTextSound = new Audio.Sound();
      this.Station1InfoSound = new Audio.Sound();
      this.Station2InfoSound = new Audio.Sound();
      this.Station3InfoSound = new Audio.Sound();
      this.Station4InfoSound = new Audio.Sound();
      this.Station5InfoSound = new Audio.Sound();
      this.Station6InfoSound = new Audio.Sound();
      this.Station7InfoSound = new Audio.Sound();
      this.Station8InfoSound = new Audio.Sound();
      this.Station9InfoSound = new Audio.Sound();
      this.Station10InfoSound = new Audio.Sound();
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
     * 
     */
    async audioFunction(target,mode){
      switch(target) {
        case 'HowTo':
        {
          await this.howToTextSound.loadAsync(require('../assets/sounds/abc.mp3'));
          if(mode==='play'){
            if(this.state.audioIsPaused){
              this.prepareSound();
              this.setState({audioIsPaused:false});
              await this.howToTextSound.playAsync();
            }   
            else{
              this.prepareSound();
              await this.howToTextSound.replayAsync();
            }
          }
          else if (mode==='pause'){
            await this.howToTextSound.pauseAsync();
            this.setState({audioIsPaused:true});
          }
          else if (mode==='stop'){
            await this.howToTextSound.stopAsync();
          }
          else{
            // error
          }
          
          break;
        }
        case 'Station1Info':
        {
          
          break;
        }
        case 'Station2Info':
        {
          
          break;
        }
        case 'Station3Info':
        {
          
          break;
        }
        case 'Station4Info':
        {
          
          break;
        }
        case 'Station5Info':
        {
          
          break;
        }
        case 'Station6Info':
        {
          
          break;
        }
        case 'Station7Info':
        {
          
          break;
        }
        case 'Station8Info':
        {
          
          break;
        }
        case 'Station9Info':
        {
          
          break;
        }
        case 'Station10Info':
        {
          
          break;
        }
      };
    };
  }

  AudioFile = new AudioFile();

  export default AudioFile;