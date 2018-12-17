import React from 'react';
import {Text,View,TouchableHighlight,Image} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document
import AnswerSheet from '../constants/AnswerSheet';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

/**
 * IDEA:
 * this screen show the certificate according to the reached score. the user should show this at the cash desk to get a reward for solving the quiz
 */
export default class CertificateScreen extends React.Component {
      
  static navigationOptions = {
    title: "CertificateScreen", // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js
    header: null 
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

      </View>
    );
  }

  /**
   * IDEA:
   * this function returns the view of the right certificarte according to the reached score
   */
  showParticularCertificate(){
    if(AnswerSheet.getNumberOfRightAnswers() >= 0 && AnswerSheet.getNumberOfRightAnswers() <= 3){
      return (
        <View style={styles.certificateBottomContainer}>
          <Image source={require('../assets/images/foxANDBadgerOverview.png')} style={styles.certificateImageStyle}/>
          <View style={styles.certificateBottomTextContainer}>
            <Text style={styles.certificateBottomTextFormat}>Soldat </Text>
          </View>
          <View style={styles.certificateBottomTextContainer}>
            <Text style={styles.certificateBottomInfoTextFormat}>Zeige dies an der Kasse und Du erhälst eine Überraschung. </Text>
          </View>
        </View>
      );
    }
    else if(AnswerSheet.getNumberOfRightAnswers() >= 4 && AnswerSheet.getNumberOfRightAnswers() <= 6){
      return (
        <View style={styles.certificateBottomContainer}>
          <Image source={require('../assets/images/foxANDBadgerOverview.png')} style={styles.certificateImageStyle}/>
          <View style={styles.certificateBottomTextContainer}>
            <Text style={styles.certificateBottomTextFormat}>Wachtmeister </Text>
          </View>
          <View style={styles.certificateBottomTextContainer}>
            <Text style={styles.certificateBottomInfoTextFormat}>Zeige dies an der Kasse und Du erhälst eine Überraschung. </Text>
          </View>
        </View>
      );
    }
    else if(AnswerSheet.getNumberOfRightAnswers() >= 7 && AnswerSheet.getNumberOfRightAnswers() <= 9){
      return (
        <View style={styles.certificateBottomContainer}>
          <Image source={require('../assets/images/foxANDBadgerOverview.png')} style={styles.certificateImageStyle}/>
          <View style={styles.certificateBottomTextContainer}>
            <Text style={styles.certificateBottomTextFormat}>Hauptfeldweibel </Text>
          </View>
          <View style={styles.certificateBottomTextContainer}>
            <Text style={styles.certificateBottomInfoTextFormat}>Zeige dies an der Kasse und Du erhälst eine Überraschung. </Text>
          </View>
        </View>            
      );
    }
    else if(AnswerSheet.getNumberOfRightAnswers() === 10){
      return (
        <View style={styles.certificateBottomContainer}>
          <Image source={require('../assets/images/foxANDBadgerOverview.png')} style={styles.certificateImageStyle}/>
          <View style={styles.certificateBottomTextContainer}>
            <Text style={styles.certificateBottomTextFormat}>Oberstleutnant </Text>
          </View>
          <View style={styles.certificateBottomTextContainer}>
            <Text style={styles.certificateBottomInfoTextFormat}>Zeige dies an der Kasse und Du erhälst eine Überraschung. </Text>
          </View>

        </View>
      );
    }
    else{
      return(
        <View style={styles.certificateBottomContainer}>
          <Image source={require('../assets/images/foxANDBadgerOverview.png')} style={styles.certificateImageStyle}/>
          <View style={styles.certificateBottomTextContainer}>
            <Text style={styles.certificateBottomTextFormat}>
                Error
            </Text>
          </View>
        </View>
      );
    }
  }
}