import React from 'react';
import {Image,Text,View,TouchableHighlight} from 'react-native';
import styles from '../constants/Styles'; 

/**
 * IDEA:
 * This screen should be like a cover screen for the app. You should perceive that this application is made of the 
 * Nidwaldner Museum.
 */
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'HomeScreen', // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js
    header: null, // do not show the navigation header bar because of design reasons
  };  

  render() {
    return (      
      <View style={styles.anyWholeScreen}>
        
        {/* Set the Logo of the App and add the navigation to the first screen when pressing on the image*/}        
        <View style={styles.homeImageContainer}>
          <TouchableHighlight onPress={()=>{ this.props.navigation.navigate('Certificate') }} underlayColor='rgba(255,255,255,0.5)'>
            <Image
              source={require('../assets/images/iconBadgerFox.png')}
              style={styles.homeImageStyle}
            />
          </TouchableHighlight>
        </View>
        
        {/*Set the title of the App*/}        
        <View style={styles.homeTitleTextContainer}>
          <Text style={styles.homeTitleTextFormat}>
            Willkommen {"\n"} in der Festung {"\n"} Fürigen!
          </Text>
        </View>     
        
        {/* Set a button to get to the next page where you can find the quiz.*/} 
        <View style={styles.homeButtonContainer}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('HowTo')} underlayColor="rgba(96,100,109, 1)" style={styles.homeButtonStyle}>
              <Text style={styles.homeButtonText} numberOfLines={1}>
                Starte dein Abenteuer!
              </Text>
          </TouchableHighlight>
        </View>

      </View>
    );    
  }
}