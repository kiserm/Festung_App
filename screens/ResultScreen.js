import React from 'react';
import {Text,View,TouchableHighlight} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document in /constanst/Styles.js


import AnswerSheet from '../constants/AnswerSheet';
import IconEntypo from 'react-native-vector-icons/Entypo'
// to be able to have a proper design on every platform, I downloaded this package from 
// this website: https://www.npmjs.com/package/react-native-responsive-screen
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export default class ResultScreen extends React.Component {
  // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js
  static navigationOptions = {
    title: "ResultScreen",  
    header: null 
  };

  render() {
    return (      
      <View style={styles.anyWholeScreen}>
        
        {/*Set the title of the Screen*/}        
        <View style={styles.resultTitleTextContainer}>
          <Text style={styles.anyTitleTextFormat}>
            Dein Resultat
          </Text>
        </View>     
        
        <View style={styles.resultMiddleContainer}>
          <View style={styles.resultMiddleTitleContainer}>
            <Text style={styles.resultSubtitleTextFormat}>
                Herzliche Gratulation!
            </Text>
          </View>

          <View style={styles.resultIconContainer}>
              <TouchableHighlight style={styles.resultIconStyle}>
                  <IconEntypo name="trophy" size={hp("45%")} color="goldenrod"/>
              </TouchableHighlight>
          </View>

          <View style={styles.resultMiddleTextContainer}>
              <Text style={styles.resultMiddleText}>
                  Du hast <Text style={styles.resultMiddleTextBold}>{this.numberOfRightAnswers()}</Text> von <Text style={styles.resultMiddleTextBold}>10</Text> Aufgaben richtig beantwortet.
              </Text>
          </View>
        </View>

        <View style={styles.resultBottomContainer}>
          <View style={styles.resultRowButtonContainer}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Certificate')} underlayColor="rgba(96,100,109, 1)" style={styles.resultButtonStyle}>
                <Text style={styles.anyButtonText} numberOfLines={1}>
                  zum Zertifikat
                </Text>
            </TouchableHighlight>
          </View>
        </View>

      </View>
    );
  }

  numberOfRightAnswers(){
    rightAnswers = 0;
    for(i=1;i<=10;++i){
      if(AnswerSheet.getAnswer(i) === AnswerSheet.getRightAnswer(i)){
        rightAnswers += 1;
      }
    }
    AnswerSheet.setNumberOfRightAnswers(rightAnswers);
    return rightAnswers;
  };
  
}