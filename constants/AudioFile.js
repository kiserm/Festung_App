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
      // variables to handle pause and play
      this.isPausedHowTo = true;
      this.isPausedStation1Info = true;
      this.isPausedStation2Info = true;
      this.isPausedStation3Info = true;
      this.isPausedStation4Info = true;
      this.isPausedStation5Info = true;
      this.isPausedStation6Info = true;
      this.isPausedStation7Info = true;
      this.isPausedStation8Info = true;
      this.isPausedStation9Info = true;
      this.isPausedStation10Info = true;
      // variables to handle not multiple loading of the audio files
      this.howToTextIsLoaded = false;
      this.station1InfoTextIsLoaded = false;
      this.station2nfoTextIsLoaded = false;
      this.station3InfoTextIsLoaded = false;
      this.station4InfoTextIsLoaded = false;
      this.station5InfoTextIsLoaded = false;
      this.station6InfoTextIsLoaded = false;
      this.station7InfoTextIsLoaded = false;
      this.station8InfoTextIsLoaded = false;
      this.station9InfoTextIsLoaded = false;
      this.station10InfoTextIsLoaded = false;      
    };

    /**
     * IDEA:
     * this method returns true if the audio on the asked target is playing, else false
     * @param {type:string, the location where the audiofile is played,e.g. 'HowTo' if you want to know the status of the audio file from the HowToScreen} target 
     */
    getAudioStatus(target){
      switch(target){
        case 'HowTo':
          return !this.isPausedHowTo;
        case 'Station1Info':
          return !this.isPausedStation1Info;
        case 'Station2Info':
          return !this.isPausedStation2Info;
        case 'Station3Info':
          return !this.isPausedStation3Info;
        case 'Station4Info':
          return !this.isPausedStation4Info;
        case 'Station5Info':
          return !this.isPausedStation5Info;
        case 'Station6Info':
          return !this.isPausedStation6Info;
        case 'Station7Info':
          return !this.isPausedStation7Info;
        case 'Station8Info':
          return !this.isPausedStation8Info;
        case 'Station9Info':
          return !this.isPausedStation9Info;
        case 'Station10Info':
          return !this.isPausedStation10Info;      }
    }

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
     * IDEA:
     * play audio file from library in assets/sounds.
     * target: screen where the audio should be played
     * mode: how the audio should act -> play, pause, stop
     */
    async audioFunction(target,mode){
      switch(target) {
        case 'HowTo':
        {
          if(mode==='play'){
            if(this.howToTextIsLoaded===false){
              await this.howToTextSound.loadAsync(require('../assets/sounds/abc.mp3'));
              this.howToTextIsLoaded=true;
            }            
            if(this.isPausedHowTo===true){
              this.prepareSound();
              this.isPausedHowTo=false;
              await this.howToTextSound.playAsync();
            }   
            else{
              this.prepareSound();
              await this.howToTextSound.replayAsync();
            }
          }
          else if (mode==='pause'){
            await this.howToTextSound.pauseAsync();
            this.isPausedHowTo=true;
          }
          else if (mode==='stop'){
            await this.howToTextSound.stopAsync();
          }
          else{
            // error this mode does not exist
          }          
          break;
        }
        case 'Station1Info':
        {
          if(mode==='play'){
            if(this.station1InfoTextIsLoaded===false){
              await this.Station1InfoSound.loadAsync(require('../assets/sounds/abcd.mp3'));
              this.station1InfoTextIsLoaded=true;
            }            
            if(this.isPausedStation1Info===true){
              this.prepareSound();
              this.isPausedStation1Info=false;
              await this.Station1InfoSound.playAsync();
            }   
            else{
              this.prepareSound();
              await this.Station1InfoSound.replayAsync();
            }
          }
          else if (mode==='pause'){
            await this.Station1InfoSound.pauseAsync();
            this.isPausedStation1Info=true;
          }
          else if (mode==='stop'){
            await this.Station1InfoSound.stopAsync();
          }
          else{
            // error this mode does not exist
          }          
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