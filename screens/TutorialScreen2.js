import React from 'react';
import {Text,View,TouchableHighlight,TouchableWithoutFeedback} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'; // to be able to have a proper design on every platform, I downloaded this package from  this website: https://www.npmjs.com/package/react-native-responsive-screen

/**
 * IDEA:
 * this screen should introduce the user to the overview screen. explain what it is and where the button can be found
 */
export default class TutorialScreen2 extends React.Component {
  static navigationOptions = ({navigation}) => ({
    // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js
    title:'TutorialScreen2',
    // show only the overview icon in red, such that the user knows right away which button to press
    headerLeft:(<View style={styles.headerButtonContainer}>
                  <TouchableWithoutFeedback onPress={() => {navigation.navigate('OverviewTutorial')}} style={styles.navigationBarIcons}>
                    <IconMaterialCommunityIcons name="format-list-bulleted" size={hp("7%")} color="#C92732"/>
                  </TouchableWithoutFeedback>
                </View>
    ),
    headerRight: null,
    headerStyle:{height:hp("9%")},
  });
    
  render() {
    return (      
      <View style={styles.anyWholeScreen}>
        
        {/*Set the title of the Screen*/}        
        <View style={styles.tutorialTitleTextContainer}>
          <Text style={styles.tutorialTitleTextFormat}>
            Tutorial
          </Text>
        </View>    
        
        {/*Set the subtitle of the Screen*/}         
        <View style={styles.tutorialSubtitleContainer}>
          <Text style={styles.tutorialSubtitleTextFormat}>
            Schritt 2 von 5
          </Text>
        </View>

        {/* explain the specific icon */}        
        <View style={styles.tutorialTextContainer}>
            <Text style={styles.tutorialTextFormat}>
              Drücke auf die <Text style={{color:'#C92732',fontWeight:'bold'}}>rote Liste</Text> oben am Bildschirm und es öffnet sich eine Übersicht über alle Aufgaben.
            </Text>
        </View>

        {/* put three buttons at the bottom, back, how far i am in the tutorial and forward*/}
        <View style={styles.tutorial2To4BottomContainer}>
          <View style={styles.tutorialRowBottomContainer}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Tutorial1')} underlayColor="rgba(96,100,109, 1)" style={styles.tutorialButtonStyle}>
                <Text style={styles.tutorialButtonText}> Zurück </Text>
            </TouchableHighlight>
          </View>
          <View style={styles.tutorialRowBottomContainer}>
            <TouchableHighlight onPress={()=>{}} underlayColor="rgba(96,100,109, 1)" style={styles.tutorialButtonStyle}>
                <Text style={styles.tutorialButtonText}> 2 / 5 </Text> 
            </TouchableHighlight>
          </View>
          <View style={styles.tutorialRowBottomContainer}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Tutorial3')} underlayColor="rgba(96,100,109, 1)" style={styles.tutorialButtonStyle}>
                  <Text style={styles.tutorialButtonText}> Weiter </Text>
            </TouchableHighlight>
          </View>
        </View>

      </View>
    );
  }          
}