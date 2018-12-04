import React from 'react';
import {Image,Text,View,TouchableHighlight,Linking} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document in /constants/Styles.js

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
        
        {/* Set the Logo of the App and add the link to the website when pressing on the image*/}        
        <View style={styles.homeImageContainer}>
          <TouchableHighlight onPress={()=>{ Linking.openURL('http://www.nidwaldner-museum.ch/')}}>
            <Image
              source={require('../assets/images/icon.png')}
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
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Station1',{tutorialFlag:'false'})} underlayColor="rgba(96,100,109, 1)" style={styles.homeButtonStyle}>
              {/*use NumberOfLines to say how much lines the text inside the button should have*/}
              <Text style={styles.homeButtonText} numberOfLines={1}>
                Starte dein Abenteuer!
              </Text>
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}