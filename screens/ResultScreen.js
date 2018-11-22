import React from 'react';
import {Text,View,TouchableHighlight} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document in /constanst/Styles.js


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
            <View style={styles.resultTitleTextContainer}>
              <Text style={styles.anyTitleTextFormat}>
                Dein Resultat
              </Text>
            </View>     
            
            <View style={styles.resultTextContainer}>
                <Text style={styles.anyTextFormat}>
                    12 von 12 Suuuuper!!!
                </Text>
            </View>
          
            <View style={styles.resultBottomContainer}>
              <View style={styles.resultRowButtonContainer}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Certificate')} underlayColor="rgba(96,100,109, 1)" style={styles.anyButtonStyle}>
                    <Text style={styles.anyButtonText} numberOfLines={1}>
                      zum Zertifikat
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.props.navigation.goBack()} underlayColor="rgba(96,100,109, 1)" style={styles.anyButtonStyle}>
                    <Text style={styles.anyButtonText} numberOfLines={1}>
                      Zurück!
                    </Text>
                </TouchableHighlight>
              </View>
            </View>

          </View>
        );
      }
}