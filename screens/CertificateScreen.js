import React from 'react';
import {Image,StyleSheet,Text,View,TouchableHighlight,Button,Linking,TextInput} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document


export default class CertificateScreen extends React.Component {
      // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js
      static navigationOptions = {
        title: "CertificateScreen",    
      };
    
      render() {
        return (      
          <View style={styles.anyWholeScreen}>
            
            {/*Set the title of the Screen*/}        
            <View style={styles.anyTitleTextContainer}>
              <Text style={styles.anyTitleTextFormat}>
                Deine Auszeichnung!
              </Text>
            </View>     
            
            <View style={styles.HowToTextContainer}>
                <Text style={styles.anyTextFormat}>
                    Danke fürs Mitmachen!
                </Text>
            </View>
   
          </View>
        );
      }
}