import React from 'react';
import {Text,View,TouchableHighlight} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document

/* this are only for he imports for the numbers to the icons, since we do not display them due to simplicity, the import statements are commented
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'; // to be able to have a proper design on every platform, I downloaded this package from this website: https://www.npmjs.com/package/react-native-responsive-screen
*/

/**
 * IDEA:
 * this screen should give a short idea what the tutorial is about and how long it takes to get through
 */
export default class TutorialScreen1 extends React.Component {
  static navigationOptions = () => ({
    // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js
    title:'TutorialScreen1',
    // show no header hence no icon, they are only available at the specific tutorial screen or during the quiz due to simplicity
    header: null,
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

        {/*Set no subtitle, but leave the container for the design purpose*/}
        <View style={styles.tutorialSubtitleContainer}>
          <Text style={styles.tutorialSubtitleTextFormat}>Schritt 1 von 5</Text>
        </View>

        {/* text which tells what the tutorial is all about*/}
        <View style={styles.tutorialTextContainer}>
          <Text style={styles.tutorialTextFormat}>
            Hier lernst Du Funktionen kennen, die für das Lösen des Quiz hilfreich sein können.
            Klicke auf weiter um Dir die Funktionen Schritt für Schritt anzuschauen.
          </Text>
        </View>

        {/* put three buttons at the bottom, back, how far i am in the tutorial and forward*/}
        <View style={styles.tutorial1And5BottomContainer}>
          <View style={styles.tutorialRowContainer}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('HowTo')} underlayColor="rgba(96,100,109, 1)" style={styles.tutorialButtonStyle}>
              <Text style={styles.tutorialButtonText}> Zurück </Text> 
            </TouchableHighlight>
          </View>
          <View style={styles.tutorialRowMiddleContainer}>
            <TouchableHighlight onPress={()=>{}} underlayColor="rgba(96,100,109, 1)" style={styles.tutorialButtonStyle}>
                <Text style={styles.tutorialButtonText}> 1 / 5 </Text> 
            </TouchableHighlight>
          </View>
          <View style={styles.tutorialRowContainer}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Tutorial2',{iconPressed:false})} underlayColor="rgba(96,100,109, 1)" style={styles.tutorialButtonStyle}>
              <Text style={styles.tutorialButtonText}> Weiter </Text>
            </TouchableHighlight>
          </View>
        </View>

        {/* do not show the numbers to the icons due to simplicity, if you would wannt to see how to use them right under the header, see next lines */}
        {/* <IconMaterialCommunityIcons name='numeric-1-box' size={hp('7%')} color='#C92732' style={styles.tutorialOverviewArrowStyle}/> */}
        {/* <IconMaterialCommunityIcons name='numeric-2-box' size={hp('7%')} color='#C92732' style={styles.tutorialHintArrowStyle}/> */}
        {/* <IconMaterialCommunityIcons name='numeric-3-box' size={hp('7%')} color='#C92732' style={styles.tutorialMapArrowStyle}/> */}

      </View>
    );
  }          
}