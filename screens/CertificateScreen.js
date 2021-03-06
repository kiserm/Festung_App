import React from 'react';
import {Text,View,Image,TouchableHighlight} from 'react-native';
import styles from '../constants/Styles';
import AnswerSheet from '../constants/AnswerSheet';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

/**
 * IDEA:
 * this screen show the certificate according to the reached score. the user should show this at the cash desk 
 * to get a reward for solving the quiz.
 */
export default class CertificateScreen extends React.Component {
      
  static navigationOptions = {
    title: "CertificateScreen", // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js
    header: null // do not show the header since there is no use for it on the certificate screen
  };

  render() {
    return (      
      <View style={styles.anyWholeScreen}>
        
        {/*Set the title of the Screen*/}        
        <View style={styles.certificateTitleTextContainer}>
          <Text style={styles.certificateTitleTextFormat} numberOfLines={2}>
            Gratulation!
          </Text>
        </View>     

        {/* show the certificate according to the reached score */}
        {this.showParticularCertificate()}

        {/* show a small back button to give the user the ability to go back to the result screen */}
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Result')} underlayColor="rgba(96,100,109, 1)" style={styles.certificateBackButtonStyle}>
          <IconEntypo name="arrow-long-left" size={wp("5%")} color="white"/>
        </TouchableHighlight>

      </View>
    );
  }

  /**
   * IDEA:
   * this function returns the view of the right certificarte according to the reached score. Differ between the cases
   * 0-3 // 4-6 // 7-9 // 10 out of 10 correctly solved questions. For every category show a little title and subtitle
   * which describes the effort of the user
   */
  showParticularCertificate(){
    if(AnswerSheet.getNumberOfRightAnswers() >= 0 && AnswerSheet.getNumberOfRightAnswers() <= 3){
      return (
        <View style={styles.certificateBottomContainer}>
          <Image source={require('../assets/images/foxANDBadgerOverview.png')} style={styles.certificateImageStyle}/>
          <View style={styles.certificateBottomTitleContainer}>
            <Text style={styles.certificateBottomTextFormat}>Verschnupft?! </Text>
          </View>
          <View style={styles.certificateBottomSubtitleContainer}>
            <Text style={styles.certificateBottomSubtitleTextFormat}>
            Vermutlich konntest Du wegen einer verschnupften Nase nicht alle 
            richtigen Antworten erschnüffeln. 
            </Text>
          </View>
          <View style={styles.certificateBottomCashDeskContainer}>
            <Text style={styles.certificateBottomInfoTextFormat}>Zeige dies an der Kasse und Du erhälst eine kleine Überraschung. </Text>
          </View>
        </View>
      );
    }
    else if(AnswerSheet.getNumberOfRightAnswers() >= 4 && AnswerSheet.getNumberOfRightAnswers() <= 6){
      return (
        <View style={styles.certificateBottomContainer}>
          <Image source={require('../assets/images/foxANDBadgerOverview.png')} style={styles.certificateImageStyle}/>
          <View style={styles.certificateBottomTitleContainer}>
            <Text style={styles.certificateBottomTextFormat}>Stumpfnase </Text>
          </View>
          <View style={styles.certificateBottomSubtitleContainer}>
            <Text style={styles.certificateBottomInfoTextFormat}>
            Du hast eine gute Nase, doch sie konnte Dir nicht helfen ganz alle Antworten zu erschnüffeln. Trotzdem hast Du 
            {AnswerSheet.getNumberOfRightAnswers()} von 10 Aufgaben richtig gelöst. Bravo! 
            </Text>
          </View>
          <View style={styles.certificateBottomCashDeskContainer}>
            <Text style={styles.certificateBottomInfoTextFormat}>Zeige dies an der Kasse und Du erhälst eine kleine Überraschung. </Text>
          </View>
        </View>
      );
    }
    else if(AnswerSheet.getNumberOfRightAnswers() >= 7 && AnswerSheet.getNumberOfRightAnswers() <= 9){
      return (
        <View style={styles.certificateBottomContainer}>
          <Image source={require('../assets/images/foxANDBadgerOverview.png')} style={styles.certificateImageStyle}/>
          <View style={styles.certificateBottomTitleContainer}>
            <Text style={styles.certificateBottomTextFormat}>Spürnase </Text>
          </View>
          <View style={styles.certificateBottomSubtitleContainer}>
            <Text style={styles.certificateBottomInfoTextFormat}>
            Mit deiner Spürnase findest Du fast jede Antwort heraus. Wunderbare {AnswerSheet.getNumberOfRightAnswers()} von 10
            Aufgaben hast Du richtig gelöst. Exzellent!
            </Text>
          </View>
          <View style={styles.certificateBottomCashDeskContainer}>
            <Text style={styles.certificateBottomInfoTextFormat}>Zeige dies an der Kasse und Du erhälst eine kleine Überraschung. </Text>
          </View>
        </View>            
      );
    }
    else if(AnswerSheet.getNumberOfRightAnswers() === 10){
      return (
        <View style={styles.certificateBottomContainer}>
          <Image source={require('../assets/images/foxANDBadgerOverview.png')} style={styles.certificateImageStyle}/>
          <View style={styles.certificateBottomTitleContainer}>
            <Text style={styles.certificateBottomTextFormat}>Super - Spürnase </Text>
          </View>
          <View style={styles.certificateBottomSubtitleContainer}>
            <Text style={styles.certificateBottomInfoTextFormat}>
            Du hast eine Nase wie Finja und Dario! Grandios, Du hast alle Aufgaben korrekt beantwortet! 
            </Text>
          </View>
          <View style={styles.certificateBottomCashDeskContainer}>
            <Text style={styles.certificateBottomInfoTextFormat}>Zeige dies an der Kasse und Du erhälst eine kleine Überraschung. </Text>
          </View>

        </View>
      );
    }
    else{
      return(
        <View style={styles.certificateBottomContainer}>
          <Image source={require('../assets/images/foxANDBadgerOverview.png')} style={styles.certificateImageStyle}/>
          <View style={styles.certificateBottomTitleContainer}>
            <Text style={styles.certificateBottomTextFormat}>
                Error - Wrong NumberOfRightAnswers!
            </Text>
          </View>
        </View>
      );
    }
  }
}