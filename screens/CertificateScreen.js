import React from 'react';
import {Text,View,TouchableHighlight} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document

import AnswerSheet from '../constants/AnswerSheet';
import IconFontAwesome5 from 'react-native-vector-icons/Feather';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export default class CertificateScreen extends React.Component {
      // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js
      static navigationOptions = {
        title: "CertificateScreen",   
        header: null 
      };
    
      render() {
        return (      
          <View style={styles.anyWholeScreen}>
            
            {/*Set the title of the Screen*/}        
            <View style={styles.certificateTitleTextContainer}>
              <Text style={styles.certificateTitleTextFormat} numberOfLines={2}>
                Dein {"\n"}Zertifikat
              </Text>
            </View>     

            {this.showParticularCertificate()}
  
          </View>
        );
      }

      showParticularCertificate(){
        if(AnswerSheet.getNumberOfRightAnswers() >= 0 && AnswerSheet.getNumberOfRightAnswers() <= 3){
          return (
            <View style={styles.certificateBottomContainer}>
              <View style={styles.certificateImageContainer}>
                <TouchableHighlight style={styles.resultIconStyle}>
                    <IconFontAwesome5 name="award" size={hp("40%")} color="darkgreen"/>
                </TouchableHighlight>
              </View>
              <View style={styles.certificateBottomTextContainer}>
                <Text style={styles.certificateBottomTextFormat}>
                    Leider haben Sie noch den Status eines Anfängers in der Festung Fürigen!
                </Text>
              </View>
            </View>
          );
        }
        else if(AnswerSheet.getNumberOfRightAnswers() >= 4 && AnswerSheet.getNumberOfRightAnswers() <= 6){
          return (
            <View style={styles.certificateBottomContainer}>
              <View style={styles.certificateImageContainer}>
                <TouchableHighlight style={styles.resultIconStyle}>
                    <IconFontAwesome5 name="award" size={hp("40%")} color="rgb(165, 113, 100)"/>
                </TouchableHighlight>
              </View>
              <View style={styles.certificateBottomTextContainer}>
                <Text style={styles.certificateBottomTextFormat}>
                    Du bist ein fortgeschrittener Festung Fürigen Kenner!
                </Text>
              </View>
            </View>
          );
        }
        else if(AnswerSheet.getNumberOfRightAnswers() >= 7 && AnswerSheet.getNumberOfRightAnswers() <= 9){
          return (
            <View style={styles.certificateBottomContainer}>
              <View style={styles.certificateImageContainer}>
                <TouchableHighlight style={styles.resultIconStyle}>
                    <IconFontAwesome5 name="award" size={hp("40%")} color="silver"/>
                </TouchableHighlight>
              </View>
              <View style={styles.certificateBottomTextContainer}>
                <Text style={styles.certificateBottomTextFormat}>
                  Du bist ein schlauer und kompetenter Gast der Festung Fürigen!
                </Text>
              </View>
            </View>            
          );
        }
        else if(AnswerSheet.getNumberOfRightAnswers() === 10){
          <View style={styles.certificateBottomContainer}>
            <View style={styles.certificateImageContainer}>
              <TouchableHighlight style={styles.resultIconStyle}>
                  <IconFontAwesome5 name="award" size={hp("40%")} color="goldenrod"/>
              </TouchableHighlight>
            </View>
            <View style={styles.certificateBottomTextContainer}>
              <Text style={styles.certificateBottomTextFormat}>
                  Du bist ein offizieller Festung Fürigen Experte!
              </Text>
            </View>
          </View>
        }
        else{
          <View style={styles.certificateBottomContainer}>
            <View style={styles.certificateImageContainer}>
              <TouchableHighlight style={styles.resultIconStyle}>
                  <IconFontAwesome5 name="award" size={hp("40%")} color="rgba(96,100,109, 1)"/>
              </TouchableHighlight>
            </View>
            <View style={styles.certificateBottomTextContainer}>
              <Text style={styles.certificateBottomTextFormat}>
                  Error
              </Text>
            </View>
          </View>
        }
    }
}