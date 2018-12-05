import React from 'react';
import {Text,View,TouchableHighlight} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document in /constanst/Styles.js
import AnswerSheet from '../constants/AnswerSheet';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'; // to be able to have a proper design on every platform, I downloaded this package from this website: https://www.npmjs.com/package/react-native-responsive-screen

/**
 * IDEA:
 * this screen should inform the user what his score is
 */
export default class ResultScreen extends React.Component {
  
  static navigationOptions = {
    title: "ResultScreen",  // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js
    header: null, // do not show the header due to the design and the functionalities are no more used at this stage of the quiz
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

        {/* put in the middle of the screen a congratulation, a trophy as an icon and the reached score */}                
        <View style={styles.resultMiddleContainer}>

          {/* congratulate */}
          <View style={styles.resultMiddleTitleContainer}>
            <Text style={styles.resultSubtitleTextFormat}>
                Herzliche Gratulation!
            </Text>
          </View>

          {/* trophy icon */}
          <View style={styles.resultIconContainer}>
              <TouchableHighlight style={styles.resultIconStyle}>
                  <IconEntypo name="trophy" size={hp("45%")} color="goldenrod"/>
              </TouchableHighlight>
          </View>

          {/* reached score */}
          <View style={styles.resultMiddleTextContainer}>
              <Text style={styles.resultMiddleText}>
                  Du hast <Text style={styles.resultMiddleTextBold}>{this.numberOfRightAnswers()}</Text> von <Text style={styles.resultMiddleTextBold}>10</Text> Aufgaben richtig beantwortet.
              </Text>
          </View>

        </View>

        {/* show a button which lead the users to the certificate which is the end of the quiz */}
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

  /**
   * IDEA:
   * this method evaluates the number of right answers given by the user during solving the quiz
   */
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