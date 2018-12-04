import React from 'react';
import {Text,View,TouchableHighlight,Image} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document in /constants/Styles.js

/**
 * IDEA:
 * this screen should help the user during a task by rendering a specific hint to the task.
 */
export default class HintScreen extends React.Component {  
  static navigationOptions = {
    title: "HintScreen",  // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js
    header: null,  // do not show the header, else there is a problem for the hint screen because then we do not
                    // know from which screen we are coming hence we would have the wrong hint rendered
  };

  // use the state to read out the name of the screen which was the origin of the navigation, such that we can show the right hint later
  constructor(props) {
    super(props);
    this.state = { originScreenName: this.props.navigation.getParam('originScreenName') };
  };

  render() {
    return (      
      <View style={styles.anyWholeScreen}>
        
        <View style={styles.hintTopContainer}>
          {/*Set the title of the Screen*/}        
          <View style={styles.hintTitleTextContainer}>
            <Text style={styles.hintTitleTextFormat} numberOfLines={2}>
              Schlau wie {"\n"}der Fuchs
            </Text>
          </View> 
          {/*Put the image of the clever fox in the right upper corner*/}
          <View style={styles.hintImageContainer}>
            <Image source={require('../assets/images/foxGivesHint.png')} style={styles.hintImageStyle}/>
          </View>
        </View>

        {/*give the hint according to the screen you are coming*/}   
        <View style={styles.hintMiddleContainer}>
          <View style={styles.hintSubtitleContainer}>
            <Text style={styles.hintSubtitleFormat}>
              {/*give the hint subtitle according to the screen you are coming*/} 
              {/* Syntax from https://medium.com/@szholdiyarov/conditional-rendering-in-react-native-286351816db4 */} 
              {this.showSubtitle()}
            </Text>
          </View>
          <View style={styles.hintTextContainer}>
            <Text style={styles.hintTextFormat}>
              Du hast Dir einen Tipp verdient. {"\n"} 
              Und dieser lautet wie folgt:{"\n"}
              {this.showSpecificHint()}                
            </Text>
          </View>
        </View>

        {/*give the back navigation since we do not have a header*/}     
        <View style={styles.hintBottomContainer}>
          <TouchableHighlight onPress={() => this.props.navigation.goBack()} underlayColor="rgba(96,100,109, 1)" style={styles.anyButtonStyle}>
              <Text style={styles.anyButtonText} numberOfLines={1}> zurück </Text>
          </TouchableHighlight>
        </View>

      </View>
    );     
  }

  /**
   * IDEA:
   * this function returns the text for the specific subtitle
   */
  showSubtitle (){
    switch(this.state.originScreenName) {
      case 'Tutorial3':
        return "Tipp zum Tutorial";
      case 'Station1':
        return "Tipp zur Station 1";
      case 'Station2':
        return "Tipp zur Station 2";
      case 'Station3':
        return "Tipp zur Station 3";
      case 'Station4':
        return "Tipp zur Station 4";
      case 'Station5':
        return "Tipp zur Station 5";
      case 'Station6':
        return "Tipp zur Station 6";
      case 'Station7':
        return "Tipp zur Station 7";
      case 'Station8':
        return "Tipp zur Station 8";
      case 'Station9':
        return "Tipp zur Station 9";
      case 'Station10':
        return "Tipp zur Station 10";
      case 'Station11':
        return "Tipp zur Station 11";
      case 'Station12':
        return "Tipp zur Station 12";
      default:
        return null;
    };
  }

  /**
   * IDEA:
   * this function returns the text for the specific hint 
   */
  showSpecificHint (){
    switch(this.state.originScreenName) {
      case 'Tutorial3':
        return "Du hast das gut gemacht! Hier würde dann der Tipp zur Aufgabe stehen!";
      case 'Station1':
        return "Hier steht der Tipp zur Station 1";
      case 'Station2':
        return "Hier steht der Tipp zur Station 2";
      case 'Station3':
        return "Hier steht der Tipp zur Station 3";
      case 'Station4':
        return "Hier steht der Tipp zur Station 4";
      case 'Station5':
        return "Hier steht der Tipp zur Station 5";
      case 'Station6':
        return "Hier steht der Tipp zur Station 6";
      case 'Station7':
        return "Hier steht der Tipp zur Station 7";
      case 'Station8':
        return "Hier steht der Tipp zur Station 8";
      case 'Station9':
        return "Hier steht der Tipp zur Station 9";
      case 'Station10':
        return "Hier steht der Tipp zur Station 10";
      case 'Station11':
        return "Hier steht der Tipp zur Station 11";
      case 'Station12':
        return "Hier steht der Tipp zur Station 12";
      default:
        return null;
    };
  }

}