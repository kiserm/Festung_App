import React from 'react';
import {Audio} from 'expo';

/**
 * IDEA:
 * This class carries all the audio files in it and all the methods to play them.
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
      this.station2InfoTextIsLoaded = false;
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
          return !this.isPausedStation10Info;      
      }
    }

    /**
     * IDEA:
     * make that the sound is also playing on ios even if the phone is on silent mode
     * this is done by setting the playsInSilentModeIOS to true. for android this is default set to 
     * true. for more information look in the definition of the modes. IMPORTANT: all modes have to 
     * be set, otherwise you get an error.
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
     * target: name of the screen where the audio should be played
     * mode: how the audio should act -> play, pause, stop by invoking this method
     */
    async audioFunction(target,mode){
      switch(target) {
        case 'HowTo':
        {
          // mode: play
          if(mode==='play'){
            // if the audio is played the first time, we have to load the audio file first
            if(this.howToTextIsLoaded===false){
              this.howToTextIsLoaded=true;
              await this.howToTextSound.loadAsync(require('../assets/sounds/howToSoundM.mp3'));              
            } 
            // if the audio is already loaded, differ the cases if the audio file is playing or paused at the moment.
            // if paused -> then the file should play at the point where the user has paused
            // else play the audio file from the start
            else {          
              if(this.isPausedHowTo===true){
                this.prepareSound(); // such that the sound is also playing on ios even the phone is on silent mode
                this.isPausedHowTo=false;
                await this.howToTextSound.playAsync();
              }   
              else{
                this.prepareSound(); // such that the sound is also playing on ios even the phone is on silent mode
                await this.howToTextSound.replayAsync();
              }
            }
          }
          // mode: pause AND the audio file was already loaded -> only pause the audio and set the flag isPaused to true
          //       if the audio file was not already loaded -> do nothing since pausing an audio which has never played OR
          //       is not playing makes no sense.
          else if (mode==='pause' && this.howToTextIsLoaded===true){
            await this.howToTextSound.pauseAsync();
            this.isPausedHowTo=true;
          }
          // mode: stop AND audio file was already loaded -> only stop an audio which is playing at the moment. if the audio
          //       is not playing we can still stop the file and nothing happens.
          else if (mode==='stop' && this.howToTextIsLoaded===true){
            await this.howToTextSound.stopAsync();
          }
          else{
            // error: this mode does not exist! Wrong Argument!
          }          
          break;
        }
        // for comments about the idea behind these if else statements look at the case 'HowTo' for the details
        case 'Station1Info':
        {
          if(mode==='play'){
            if(this.station1InfoTextIsLoaded===false){
              this.station1InfoTextIsLoaded=true;
              await this.Station1InfoSound.loadAsync(require('../assets/sounds/station1InfoSoundM.mp3'));
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
          else if (mode==='pause' && this.station1InfoTextIsLoaded===true){
            await this.Station1InfoSound.pauseAsync();
            this.isPausedStation1Info=true;
          }
          else if (mode==='stop' && this.station1InfoTextIsLoaded===true){
            await this.Station1InfoSound.stopAsync();
          }
          else{
            // error: this mode does not exist! Wrong Argument!
            }          
          break;
        }
        // for comments about the idea behind these if else statements look at the case 'HowTo' for the details
        case 'Station2Info':
        {
          if(mode==='play'){
           if(this.station2InfoTextIsLoaded===false){
             this.station2InfoTextIsLoaded=true;
              await this.Station2InfoSound.loadAsync(require('../assets/sounds/station2InfoSoundM.mp3'));
            }            
            if(this.isPausedStation2Info===true){
              this.prepareSound();
              this.isPausedStation2Info=false;
              await this.Station2InfoSound.playAsync();
            }   
            else{
              this.prepareSound();
              await this.Station2InfoSound.replayAsync();
            }
          }
          else if (mode==='pause' && this.station2InfoTextIsLoaded===true){
            await this.Station2InfoSound.pauseAsync();
            this.isPausedStation2Info=true;
          }
          else if (mode==='stop' && this.station2InfoTextIsLoaded===true){
            await this.Station2InfoSound.stopAsync();
          }
          else{
            // error: this mode does not exist! Wrong Argument!
            }          
          break;
        }
        // for comments about the idea behind these if else statements look at the case 'HowTo' for the details
        case 'Station3Info':
        {
          {
            if(mode==='play'){
              if(this.station3InfoTextIsLoaded===false){
                this.station3InfoTextIsLoaded=true;
                await this.Station3InfoSound.loadAsync(require('../assets/sounds/station3InfoSoundM.mp3'));
              }            
              if(this.isPausedStation3Info===true){
                this.prepareSound();
                this.isPausedStation3Info=false;
                await this.Station3InfoSound.playAsync();
              }   
              else{
                this.prepareSound();
                await this.Station3InfoSound.replayAsync();
              }
            }
            else if (mode==='pause' && this.station3InfoTextIsLoaded===true){
              await this.Station3InfoSound.pauseAsync();
              this.isPausedStation3Info=true;
            }
            else if (mode==='stop' && this.station3InfoTextIsLoaded===true){
              await this.Station3InfoSound.stopAsync();
            }
            else{
            // error: this mode does not exist! Wrong Argument!
            }          
            break;
          }
        }
        // for comments about the idea behind these if else statements look at the case 'HowTo' for the details
        case 'Station4Info':
        {
          {
            if(mode==='play'){
              if(this.station4InfoTextIsLoaded===false){
                this.station4InfoTextIsLoaded=true;
                await this.Station4InfoSound.loadAsync(require('../assets/sounds/station4InfoSoundM.mp3'));
              }
              else {
                // do here something if the audio is loading and the user wants to listen to the audio!
              }            
              if(this.isPausedStation4Info===true){
                this.prepareSound();
                this.isPausedStation4Info=false;
                await this.Station4InfoSound.playAsync();
              }   
              else{
                this.prepareSound();
                await this.Station4InfoSound.replayAsync();
              }
            }
            else if (mode==='pause' && this.station4InfoTextIsLoaded===true){
              await this.Station4InfoSound.pauseAsync();
              this.isPausedStation4Info=true;
            }
            else if (mode==='stop' && this.station4InfoTextIsLoaded===true){
              await this.Station4InfoSound.stopAsync();
            }
            else{
            // error: this mode does not exist! Wrong Argument!
            }          
            break;
          }
        }
        // for comments about the idea behind these if else statements look at the case 'HowTo' for the details
        case 'Station5Info':
        {
          {
            if(mode==='play'){
              if(this.station5InfoTextIsLoaded===false){
                this.station5InfoTextIsLoaded=true;
                await this.Station5InfoSound.loadAsync(require('../assets/sounds/station5InfoSoundM.mp3'));
              }            
              if(this.isPausedStation5Info===true){
                this.prepareSound();
                this.isPausedStation5Info=false;
                await this.Station5InfoSound.playAsync();
              }   
              else{
                this.prepareSound();
                await this.Station5InfoSound.replayAsync();
              }
            }
            else if (mode==='pause' && this.station5InfoTextIsLoaded===true){
              await this.Station5InfoSound.pauseAsync();
              this.isPausedStation5Info=true;
            }
            else if (mode==='stop' && this.station5InfoTextIsLoaded===true){
              await this.Station5InfoSound.stopAsync();
            }
            else{
            // error: this mode does not exist! Wrong Argument!
            }          
            break;
          }
        }
        // for comments about the idea behind these if else statements look at the case 'HowTo' for the details
        case 'Station6Info':
        {
          {
            if(mode==='play'){
              if(this.station6InfoTextIsLoaded===false){
                this.station6InfoTextIsLoaded=true;
                await this.Station6InfoSound.loadAsync(require('../assets/sounds/station6InfoSoundM.mp3'));
              }            
              if(this.isPausedStation6Info===true){
                this.prepareSound();
                this.isPausedStation6Info=false;
                await this.Station6InfoSound.playAsync();
              }   
              else{
                this.prepareSound();
                await this.Station6InfoSound.replayAsync();
              }
            }
            else if (mode==='pause' && this.station6InfoTextIsLoaded===true){
              await this.Station6InfoSound.pauseAsync();
              this.isPausedStation6Info=true;
            }
            else if (mode==='stop' && this.station6InfoTextIsLoaded===true){
              await this.Station6InfoSound.stopAsync();
            }
            else{
            // error: this mode does not exist! Wrong Argument!
            }          
            break;
          }
        }
        // for comments about the idea behind these if else statements look at the case 'HowTo' for the details
        case 'Station7Info':
        {
          {
            if(mode==='play'){
              if(this.station7InfoTextIsLoaded===false){
                this.station7InfoTextIsLoaded=true;
                await this.Station7InfoSound.loadAsync(require('../assets/sounds/station7InfoSoundM.mp3'));
              }            
              if(this.isPausedStation7Info===true){
                this.prepareSound();
                this.isPausedStation7Info=false;
                await this.Station7InfoSound.playAsync();
              }   
              else{
                this.prepareSound();
                await this.Station7InfoSound.replayAsync();
              }
            }
            else if (mode==='pause' && this.station7InfoTextIsLoaded===true){
              await this.Station7InfoSound.pauseAsync();
              this.isPausedStation7Info=true;
            }
            else if (mode==='stop' && this.station7InfoTextIsLoaded===true){
              await this.Station7InfoSound.stopAsync();
            }
            else{
            // error: this mode does not exist! Wrong Argument!
            }          
            break;
          }
        }
        // for comments about the idea behind these if else statements look at the case 'HowTo' for the details
        case 'Station8Info':
        {
          {
            if(mode==='play'){
              if(this.station8InfoTextIsLoaded===false){
                this.station8InfoTextIsLoaded=true;
                await this.Station8InfoSound.loadAsync(require('../assets/sounds/station8InfoSoundM.mp3'));
              }            
              if(this.isPausedStation8Info===true){
                this.prepareSound();
                this.isPausedStation8Info=false;
                await this.Station8InfoSound.playAsync();
              }   
              else{
                this.prepareSound();
                await this.Station8InfoSound.replayAsync();
              }
            }
            else if (mode==='pause' && this.station8InfoTextIsLoaded===true){
              await this.Station8InfoSound.pauseAsync();
              this.isPausedStation8Info=true;
            }
            else if (mode==='stop' && this.station8InfoTextIsLoaded===true){
              await this.Station8InfoSound.stopAsync();
            }
            else{
            // error: this mode does not exist! Wrong Argument!
            }          
            break;
          }
        }
        // for comments about the idea behind these if else statements look at the case 'HowTo' for the details
        case 'Station9Info':
        {
          {
            if(mode==='play'){
              if(this.station9InfoTextIsLoaded===false){
                this.station9InfoTextIsLoaded=true;
                await this.Station9InfoSound.loadAsync(require('../assets/sounds/station9InfoSoundM.mp3'));
              }            
              if(this.isPausedStation9Info===true){
                this.prepareSound();
                this.isPausedStation9Info=false;
                await this.Station9InfoSound.playAsync();
              }   
              else{
                this.prepareSound();
                await this.Station9InfoSound.replayAsync();
              }
            }
            else if (mode==='pause' && this.station9InfoTextIsLoaded===true){
              await this.Station9InfoSound.pauseAsync();
              this.isPausedStation9Info=true;
            }
            else if (mode==='stop' && this.station9InfoTextIsLoaded===true){
              await this.Station9InfoSound.stopAsync();
            }
            else{
            // error: this mode does not exist! Wrong Argument!
            }          
            break;
          }
        }
        // for comments about the idea behind these if else statements look at the case 'HowTo' for the details
        case 'Station10Info':
        {
          {
            if(mode==='play'){
              if(this.station10InfoTextIsLoaded===false){
                this.station10InfoTextIsLoaded=true;
                await this.Station10InfoSound.loadAsync(require('../assets/sounds/station10InfoSoundM.mp3'));
              }            
              if(this.isPausedStation10Info===true){
                this.prepareSound();
                this.isPausedStation10Info=false;
                await this.Station10InfoSound.playAsync();
              }   
              else{
                this.prepareSound();
                await this.Station10InfoSound.replayAsync();
              }
            }
            else if (mode==='pause' && this.station10InfoTextIsLoaded===true){
              await this.Station10InfoSound.pauseAsync();
              this.isPausedStation10Info=true;
            }
            else if (mode==='stop'  && this.station10InfoTextIsLoaded===true){
              await this.Station10InfoSound.stopAsync();
            }
            else{
            // error: this mode does not exist! Wrong Argument!
            }          
            break;
          }
        }
      };
    };
  }

  /**
   * IDEA:
   * Make an instance of this class such that we can export this for an easier access 
   * from all screens without creating always an instance to get access to the methods and values
 */
  AudioFile = new AudioFile();
  
  // export this instance to reuse the methods from other classes and files
  export default AudioFile;