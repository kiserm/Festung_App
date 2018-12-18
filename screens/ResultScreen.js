import React from 'react';
import {Text,View,TouchableHighlight,ScrollView,Image} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document in /constanst/Styles.js
import AnswerSheet from '../constants/AnswerSheet';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'; // to be able to have a proper design on every platform, I downloaded this package from this website: https://www.npmjs.com/package/react-native-responsive-screen

/**
 * IDEA:
 * this screen should inform the user what his score is and should have buttons on which the user can click on to
 * see what she or he did right and wrong.
 */
export default class ResultScreen extends React.Component {  
  static navigationOptions = {
    title: "ResultScreen",  // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js
    header: null, // do not show the header due to the design and the functionalities are no more used at this stage of the quiz
  };

  render() {
    return (      
      <View style={styles.anyWholeScreen}>
        
        {/*Set the title of the Screen and show the finja and dario images*/}        
        <View style={styles.resultTitleTextContainer}>

          <Text style={styles.resultTitleTextFormat}>
            Auswertung
          </Text>

          {/* show somewhere on the screen either finja the fox, dario the badger or both, only for design purpose*/}  
          <Image source={require('../assets/images/badgerQuestion1.png')} style={styles.resultImageStyle1}/>
          <Image source={require('../assets/images/foxQuestion2.png')} style={styles.resultImageStyle2}/>

        </View>   

        {/* show a list of all questions, the given answers and the right answers. if a given answers was right, make 
            the button green, else red. write down the overall score at the bottom. */}                
        <View style={styles.resultMiddleContainer}>
          <View style={{flex:6}}>
            <ScrollView>                           
                {this.showResultButton(1)}              
                {this.showResultButton(2)}              
                {this.showResultButton(3)}              
                {this.showResultButton(4)}              
                {this.showResultButton(5)}              
                {this.showResultButton(6)}              
                {this.showResultButton(7)}              
                {this.showResultButton(8)}              
                {this.showResultButton(9)}              
                {this.showResultButton(10)}              
            </ScrollView>
          </View>
          <View style={styles.resultMiddleTextContainer}>
              <Text style={styles.resultMiddleText}> Du hast <Text style={styles.resultMiddleTextBold}>{this.numberOfRightAnswers()}</Text> von <Text style={styles.resultMiddleTextBold}>10</Text> Aufgaben {"\n"} richtig beantwortet. </Text>
          </View>
        </View>

        {/* show a button which lead the users to the certificate which then is the end of the quiz */}
        <View style={styles.resultBottomContainer}>
          <View style={styles.resultRowButtonContainer}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Certificate')} underlayColor="rgba(96,100,109, 1)" style={styles.resultButtonStyle}>
                <Text style={styles.resultButtonText} numberOfLines={1}>
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
   * this method evaluates the number of right answers given by the user during solving the quiz and saves this 
   * number in the AnswerSheet file
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

  /**
   * IDEA:
   * for each question list the given answer and the right answer but only the letter. if you wanna see the question
   * then there is also an arrow button (or click on the station text where you will end up at the stationInfoScreen)
   * to go to the question again where you can no more change the given answer
   * @param {the stationNumber is an integer between 1 and the number of stations the app has} stationNumber 
   */
  showResultButton(stationNumber){
    // the given answer by the user was correct
    if(AnswerSheet.getAnswer(stationNumber) === AnswerSheet.getRightAnswer(stationNumber)){
      return(
        <View style={styles.resultCompareContainer}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Station' + stationNumber,{originScreenName: 'Result'})} underlayColor="rgba(96,100,109, 1)" style={styles.resultStationButtonStyle}>
              <Text style={styles.resultButtonText} numberOfLines={1}>
                  Station {stationNumber}
              </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {}} underlayColor="white" style={styles.resultRightAnswerButtonStyle}>
              <Text style={styles.resultButtonText}>
                  {AnswerSheet.getAnswer(stationNumber)}
              </Text>
          </TouchableHighlight> 
          <TouchableHighlight onPress={() => {}} underlayColor="white" style={styles.resultAnswerButtonStyle}>
            <Text style={styles.resultButtonText}>
                {AnswerSheet.getRightAnswer(stationNumber)}
            </Text>
          </TouchableHighlight> 
          <TouchableHighlight onPress={() => this.props.navigation.navigate('SubmittedStation' + stationNumber)} underlayColor="white" style={styles.resultArrowButtonStyle}>
            <IconEntypo name="arrow-long-right" size={hp("4.5%")} color="white"/>
          </TouchableHighlight> 
        </View>               
      );
    }
    // the given answer by the user was wrong
    else {
      return(
        <View style={styles.resultCompareContainer}>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Station' + stationNumber,{originScreenName: 'Result'})} underlayColor="rgba(96,100,109, 1)" style={styles.resultStationButtonStyle}>
            <Text style={styles.resultButtonText} numberOfLines={1}>
                Station {stationNumber}
            </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {}} underlayColor="white" style={styles.resultWrongAnswerButtonStyle}>
            <Text style={styles.resultButtonText}>
                {AnswerSheet.getAnswer(stationNumber)}
            </Text>
        </TouchableHighlight> 
        <TouchableHighlight onPress={() => {}} underlayColor="white" style={styles.resultAnswerButtonStyle}>
          <Text style={styles.resultButtonText}>
              {AnswerSheet.getRightAnswer(stationNumber)}
          </Text>
        </TouchableHighlight> 
        <TouchableHighlight onPress={() => this.props.navigation.navigate('SubmittedStation' + stationNumber)} underlayColor="white" style={styles.resultArrowButtonStyle}>
          <IconEntypo name="arrow-long-right" size={hp("4.5%")} color="white"/>
        </TouchableHighlight> 
      </View>               
      );
    }
  }        
}