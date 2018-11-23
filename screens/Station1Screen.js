import React from 'react';
import {Image,StyleSheet,Text,View,TouchableHighlight,Button,Linking,TextInput} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document
import AnswerSheet from '../constants/AnswerSheet';


export default class Station1Screen extends React.Component {
      // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js
      static navigationOptions = {
        title: "Station1Screen",    
      };

      // make a state to read it out somewhere else
    
      render() {
        return (      
          <View style={styles.anyWholeScreen}>
            
            {/*Set the title of the Screen*/}        
            <View style={styles.anyTitleTextContainer}>
              <Text style={styles.anyTitleTextFormat}>
                Station 1
              </Text>
            </View>     
            
            <View style={styles.HowToTextContainer}>
                <Text style={styles.anyTextFormat}>

                </Text>
            </View>
    
            <View style={styles.HowToButtonContainer}>
              <TouchableHighlight onPress={() => AnswerSheet.setAnswer(1,'A')} underlayColor="rgba(96,100,109, 1)" style={styles.anyButtonStyle}>
                  <Text style={styles.anyButtonText} numberOfLines={1}>
                    A
                  </Text>
              </TouchableHighlight>
            </View>

            <View style={styles.HowToButtonContainer}>
              <TouchableHighlight onPress={() => AnswerSheet.setAnswer(1,'B')} underlayColor="rgba(96,100,109, 1)" style={styles.anyButtonStyle}>
                  <Text style={styles.anyButtonText} numberOfLines={1}>
                    B
                  </Text>
              </TouchableHighlight>
            </View>

            <View style={styles.HowToButtonContainer}>
              <TouchableHighlight onPress={() => this.props.navigation.navigate('Station2')} underlayColor="rgba(96,100,109, 1)" style={styles.anyButtonStyle}>
                  <Text style={styles.anyButtonText} numberOfLines={1}>
                    zu Posten 2!
                  </Text>
              </TouchableHighlight>
            </View>
    
          </View>
        );
      }
}