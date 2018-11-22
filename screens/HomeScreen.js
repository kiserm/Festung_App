import React from 'react';
import {Image,Text,View,TouchableHighlight,Linking} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document in /constants/Styles.js

export default class HomeScreen extends React.Component {
  // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js
  static navigationOptions = {
    title: 'HomeScreen', 
    header: null
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
        
        <View style={styles.homeButtonContainer}>
          {/* Set a button to get to the next page where you can find the quizzes, self customized button with
              component TouchableOpacity from https://facebook.github.io/react-native/docs/touchableopacity */}
          <TouchableHighlight onPress={() => this.props.navigation.navigate('HowTo')} underlayColor="rgba(96,100,109, 1)" style={styles.anyButtonStyle}>
              {/*use NumberOfLines to say how much lines the text should take*/}
              <Text style={styles.anyButtonText} numberOfLines={1}>
                Starte dein Abenteuer!
              </Text>
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}