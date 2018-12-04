import React from 'react';
import {Text,View,TouchableHighlight} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'; // to be able to have a proper design on every platform, I downloaded this package from  this website: https://www.npmjs.com/package/react-native-responsive-screen

/**
 * IDEA:
 * this screen should introduce the user to the overview screen. explain what it is and where the button can be found
 */
export default class TutorialScreen2 extends React.Component {
  static navigationOptions = ({navigation}) => ({
    // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js
    title:'TutorialScreen2',
    // show the overview icon in red and bigger than the others, such that the user gets an intuition which button gets explained
    headerLeft:(<View style={styles.headerButtonContainer}>
                  <TouchableHighlight onPress={() => {navigation.navigate('OverviewTutorial')}} style={styles.navigationBarIcons}>
                    <IconMaterialCommunityIcons name="format-list-bulleted" size={hp("5%")} color="#C92732"/>
                  </TouchableHighlight>
                </View>
    ),
    headerRight: ( <View style={styles.headerButtonContainer}>
                      {/* This is the first button when looking from the left.*/}
                      <TouchableHighlight onPress={() => {}} style={styles.navigationBarIcons}>
                        <IconEntypo name="light-bulb" size={hp("2%")} color="rgba(96,100,109, 1)"/>
                      </TouchableHighlight>
                      {/* This is the second button when looking from the left.*/}
                      <TouchableHighlight onPress={() => {}} style={styles.navigationBarIcons}>
                        <IconEntypo name="map" size={hp("2%")} color="rgba(96,100,109, 1)"/>
                      </TouchableHighlight>          
                    </View>
    ),
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
            Schritt 1 von 3
          </Text>
        </View>

        {/* explain the specific icon */}        
        <View style={styles.tutorialTextContainer}>
            <Text style={styles.tutorialInfoTextFormat}>
              Wenn Du auf obiges rotes Symbol drückst, öffnet sich eine Übersicht über alle Aufgaben.
              Dazu kannst Du sehen, welche Aufgaben Du noch lösen musst und was für Antworten Du bisher
              gegeben hast. Weiter kannst Du ausserhalb des Tutorials direkt zu einer beliebigen Aufgabe navigieren.
            </Text>
        </View>

        {/* put three buttons at the bottom, back, how far i am in the tutorial and forward*/}
        <View style={styles.tutorialBottomContainer}>
          <View style={styles.tutorialRowButtonStyle}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Tutorial1')} underlayColor="rgba(96,100,109, 1)" style={styles.unchosenButtonStyle}>
                <Text style={styles.anyButtonText}> Zurück </Text>
            </TouchableHighlight>
          </View>
          <View style={styles.tutorialRowButtonStyle}>
            <TouchableHighlight onPress={()=>{}} underlayColor="rgba(96,100,109, 1)" style={styles.unchosenButtonStyle}>
                <Text style={styles.anyButtonText}> 1 / 3 </Text> 
            </TouchableHighlight>
          </View>
          <View style={styles.tutorialRowButtonStyle}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Tutorial3')} underlayColor="rgba(96,100,109, 1)" style={styles.unchosenButtonStyle}>
                  <Text style={styles.anyButtonText}>Weiter</Text>
            </TouchableHighlight>
          </View>
        </View>

        {/* put a number icon below the explained icon, such that the user gets attention on the specific icon */}
        <IconMaterialCommunityIcons name='numeric-1-box' size={hp('7%')} color='#C92732' style={styles.tutorialOverviewArrowStyle}/>

      </View>
    );
  }          
}