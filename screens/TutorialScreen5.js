import React from 'react';
import {Text,View,TouchableHighlight} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document
import AnswerSheet from '../constants/AnswerSheet';

/* this are only for he imports for the numbers to the icons, since we do not display them due to simplicity, the import statements are commented
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'; // to be able to have a proper design on every platform, I downloaded this package from this website: https://www.npmjs.com/package/react-native-responsive-screen
*/

/**
 * IDEA:
 * this screen should be the end of the tutorial and should guide to the start of the quiz
 */
export default class TutorialScreen5 extends React.Component {
  static navigationOptions = () => ({
    // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js
    title:'TutorialScreen5',
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

        {/*Set the subtitle of the Screen*/} 
        <View style={styles.tutorialSubtitleContainer}>
          <Text style={styles.tutorialSubtitleTextFormat}>
            Schritt 5 von 5
          </Text>
        </View>

        {/* say thank you and lead to the quiz */}        
        <View style={styles.tutorialTextContainer}>
            <Text style={styles.tutorialTextFormat}>
              Du hast das Tutorial geschafft. Nun wünscht Dir das Nidwaldner Museum viel Spass
              beim Lösen der spannenden Aufgaben!
            </Text>
        </View>
      
        {/* show the button to start the quiz, if pressed set the tutorialDone flag to true */}
        <View style={styles.tutorial1And5BottomContainer}>
          <View style={styles.tutorialRowContainer}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Station1')} underlayColor="rgba(96,100,109, 1)" style={styles.tutorialButtonStyle}>
                  <Text style={styles.tutorialButtonText}>     Los gehts!     </Text>
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