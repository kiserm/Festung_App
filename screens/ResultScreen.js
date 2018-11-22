import React from 'react';
import {Image,StyleSheet,Text,View,TouchableHighlight,Button,Linking,TextInput} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document


export default class ResultScreen extends React.Component {
      // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js
      static navigationOptions = {
        title: "ResultScreen",  
        header: null 
      };
    
      render() {
        return (      
          <View style={styles.anyWholeScreen}>
            
            {/*Set the title of the Screen*/}        
            <View style={styles.anyTitleTextContainer}>
              <Text style={styles.anyTitleTextFormat}>
                Dein Resultat
              </Text>
            </View>     
            
            <View style={styles.HowToTextContainer}>
                <Text style={styles.anyTextFormat}>
                    
                </Text>
            </View>
    
            <View style={styles.HowToButtonContainer}>
              {/* Set a button to get to the next page where you can find the quizzes, self customized button with
                  component TouchableOpacity from https://facebook.github.io/react-native/docs/touchableopacity */}
              <TouchableHighlight onPress={() => this.props.navigation.navigate('Certificate')} underlayColor="rgba(96,100,109, 1)" style={styles.anyButtonStyle}>
                  {/*use NumberOfLines to say how much lines the text should take*/}
                  <Text style={styles.anyButtonText} numberOfLines={1}>
                    zum Zertifikat
                  </Text>
              </TouchableHighlight>
            </View>

                          <View style={styles.HowToButtonContainer}>
                {/* Set a button to get to the next page where you can find the quizzes, self customized button with
                    component TouchableOpacity from https://facebook.github.io/react-native/docs/touchableopacity */}
                <TouchableHighlight onPress={() => this.props.navigation.goBack()} underlayColor="rgba(96,100,109, 1)" style={styles.anyButtonStyle}>
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