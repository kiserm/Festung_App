import React from 'react';
import {Image,StyleSheet,Text,View,TouchableHighlight,Button,Linking,TextInput} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document


export default class HintScreen extends React.Component {
      // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js
      static navigationOptions = {
        title: "HintScreen",    
      };
    
      render() {
        if(this.props.getParam('originScreenName')==="HowToScreen"){
          return (      
            <View style={styles.anyWholeScreen}>
              
              {/*Set the title of the Screen*/}        
              <View style={styles.anyTitleTextContainer}>
                <Text style={styles.anyTitleTextFormat}>
                  Tipps von Finja und Dario
                </Text>
              </View>     
              
              <View style={styles.HowToTextContainer}>
                  <Text style={styles.anyTextFormat}>
                      
                  </Text>
              </View>
      
              <View style={styles.HowToButtonContainer}>
                {/* Set a button to get to the next page where you can find the quizzes, self customized button with
                    component TouchableOpacity from https://facebook.github.io/react-native/docs/touchableopacity */}
                <TouchableHighlight onPress={() => this.props.navigation.navigate('History')} underlayColor="rgba(96,100,109, 1)" style={styles.anyButtonStyle}>
                    {/*use NumberOfLines to say how much lines the text should take*/}
                    <Text style={styles.anyButtonText} numberOfLines={1}>
                      Back!
                    </Text>
                </TouchableHighlight>
              </View>
      
            </View>
          );
        }
        else{
          return (      
            <View style={styles.anyWholeScreen}>
              
              {/*Set the title of the Screen*/}        
              <View style={styles.anyTitleTextContainer}>
                <Text style={styles.anyTitleTextFormat}>
                  Schade, not yet
                </Text>
              </View>     
              
              <View style={styles.HowToTextContainer}>
                  <Text style={styles.anyTextFormat}>
                      
                  </Text>
              </View>
      
              <View style={styles.HowToButtonContainer}>
                {/* Set a button to get to the next page where you can find the quizzes, self customized button with
                    component TouchableOpacity from https://facebook.github.io/react-native/docs/touchableopacity */}
                <TouchableHighlight onPress={() => this.props.navigation.navigate('History')} underlayColor="rgba(96,100,109, 1)" style={styles.anyButtonStyle}>
                    {/*use NumberOfLines to say how much lines the text should take*/}
                    <Text style={styles.anyButtonText} numberOfLines={1}>
                      Back!
                    </Text>
                </TouchableHighlight>
              </View>
      
            </View>
          );
        }
      
        
      }
}