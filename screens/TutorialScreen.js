import React from 'react';
import {Text,View,TouchableHighlight,Image} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document in /constants/Styles.js


export default class TutorialScreen extends React.Component {
  // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js
  static navigationOptions = {
    title: "TutorialScreen", 
    header: null,  // do not show the header, else there is a problem for the hint screen because then we do not
                    // know from which screen we are coming hence we would have the wrong hint rendered
  };

  constructor(props) {
    super(props);
    this.state = { key: 'value' };
  };

  render() {
      return (      
        <View style={styles.anyWholeScreen}>
          
          <View style={styles.hintTopContainer}>
            {/*Set the title of the Screen*/}        
            <View style={styles.hintTitleTextContainer}>
              <Text style={styles.hintTitleTextFormat} numberOfLines={2}>
                Tutorial
              </Text>
            </View> 

            {/*Put the image of the clever fox in the right upper corner*/}
            <View style={styles.hintImageContainer}>
              <Image source={require('../assets/images/foxGivesHint.png')} style={styles.hintImageStyle}/>
            </View>
          </View>

          {/*give the hint according to the screen you are coming*/}   
          <View style={styles.hintMiddleContainer}>
            <View style={styles.hintTextContainer}>
              <Text style={styles.hintTextFormat}>
                Dies ist ein Tutorial. Es zeigt Dir die wichtigsten Funktionen.
              </Text>
            </View>
          </View>

          {/*give the back navigation since we do not have a header*/}     
          <View style={styles.hintBottomContainer}>
            <TouchableHighlight onPress={() => this.props.navigation.goBack()} underlayColor="rgba(96,100,109, 1)" style={styles.anyButtonStyle}>
                <Text style={styles.anyButtonText} numberOfLines={1}>
                  Zurück
                </Text>
            </TouchableHighlight>
          </View>
  
        </View>
      );     
  }
}