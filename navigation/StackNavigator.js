import {View,TouchableHighlight} from 'react-native';
import React from 'react';
import styles from '../constants/Styles';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// import the StackNavigator to be able to switch between screens by putting the 
// screens on to the stack and if you go back, then the last screen pops from the stack
import { createStackNavigator } from 'react-navigation';

// for the navigation bar: here you can find the whole directory of the icons https://oblador.github.io/react-native-vector-icons/
import IconEntypo from 'react-native-vector-icons/Entypo'; 
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import all screens of the app
import HomeScreen from '../screens/HomeScreen';
import HowToScreen from '../screens/HowToScreen';
import MapScreen from '../screens/MapScreen';
import Station1Screen from '../screens/Station1Screen';
import Station2Screen from '../screens/Station2Screen';
import Station3Screen from '../screens/Station3Screen';
import Station4Screen from '../screens/Station4Screen';
import Station5Screen from '../screens/Station5Screen';
import Station6Screen from '../screens/Station6Screen';
import Station7Screen from '../screens/Station7Screen';
import Station8Screen from '../screens/Station8Screen';
import Station9Screen from '../screens/Station9Screen';
import Station10Screen from '../screens/Station10Screen';
import Station1QuestionScreen from '../screens/Station1Question';
import Station2QuestionScreen from '../screens/Station2Question';
import Station3QuestionScreen from '../screens/Station3Question';
import Station4QuestionScreen from '../screens/Station4Question';
import Station5QuestionScreen from '../screens/Station5Question';
import Station6QuestionScreen from '../screens/Station6Question';
import Station7QuestionScreen from '../screens/Station7Question';
import Station8QuestionScreen from '../screens/Station8Question';
import Station9QuestionScreen from '../screens/Station9Question';
import Station10QuestionScreen from '../screens/Station10Question';
import ResultScreen from '../screens/ResultScreen';
import CertificateScreen from '../screens/CertificateScreen';
import OverviewScreen from '../screens/OverviewScreen';
import SubmittedStation1Screen from '../screens/SubmittedStation1Screen';
import SubmittedStation2Screen from '../screens/SubmittedStation2Screen';
import SubmittedStation3Screen from '../screens/SubmittedStation3Screen';
import SubmittedStation4Screen from '../screens/SubmittedStation4Screen';
import SubmittedStation5Screen from '../screens/SubmittedStation5Screen';
import SubmittedStation6Screen from '../screens/SubmittedStation6Screen';
import SubmittedStation7Screen from '../screens/SubmittedStation7Screen';
import SubmittedStation8Screen from '../screens/SubmittedStation8Screen';
import SubmittedStation9Screen from '../screens/SubmittedStation9Screen';
import SubmittedStation10Screen from '../screens/SubmittedStation10Screen';
import AnswerSheet from '../constants/AnswerSheet';


/**
 * IDEA:
 * here we create the StackNavigator. Every screen we want to Navigate to, needs to be
 * in this definition, else the screen is not accessible. Further we define the default
 * navigation bar at the top of the screen!
 */
const NavigationStack = createStackNavigator(
  // the convention is that we navigate to the screens, but the screen names are without the suffix 'screen'. for example
  // we want to navigate to the HomeScreen we write: this.props.navigation.navigate('Home')
  {
    Home:  HomeScreen,
    HowTo: HowToScreen,
    Map: MapScreen,
    Overview: OverviewScreen,
    Station1: Station1Screen, 
    Station2: Station2Screen, 
    Station3: Station3Screen, 
    Station4: Station4Screen, 
    Station5: Station5Screen, 
    Station6: Station6Screen, 
    Station7: Station7Screen, 
    Station8: Station8Screen, 
    Station9: Station9Screen, 
    Station10: Station10Screen, 
    Station1Question: Station1QuestionScreen,
    Station2Question: Station2QuestionScreen,
    Station3Question: Station3QuestionScreen,
    Station4Question: Station4QuestionScreen,
    Station5Question: Station5QuestionScreen,
    Station6Question: Station6QuestionScreen,
    Station7Question: Station7QuestionScreen,
    Station8Question: Station8QuestionScreen,
    Station9Question: Station9QuestionScreen,
    Station10Question: Station10QuestionScreen,
    Result: ResultScreen,
    Certificate: CertificateScreen,
    SubmittedStation1: SubmittedStation1Screen,
    SubmittedStation2: SubmittedStation2Screen,
    SubmittedStation3: SubmittedStation3Screen,
    SubmittedStation4: SubmittedStation4Screen,
    SubmittedStation5: SubmittedStation5Screen,
    SubmittedStation6: SubmittedStation6Screen,
    SubmittedStation7: SubmittedStation7Screen,
    SubmittedStation8: SubmittedStation8Screen,
    SubmittedStation9: SubmittedStation9Screen,
    SubmittedStation10: SubmittedStation10Screen,
  },
  {
    // say on which screen the app should start
    initialRouteName: 'Home',
    // here we can design the Navigation Tab Bar at the top for all screens. however we could overwrite it 
    // in the screen files if we want to
    navigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          backgroundColor: '#fff',
          height: hp("7%"),
        },
        gesturesEnabled: false, // this makes it impossible to swipe back on ios as well as on android, if the value is false
        headerTintColor: 'rgba(96,100,109, 1)', 
        headerTitleStyle: {
        fontWeight: 'normal',
        textAlign: 'center',
        flex:1,
        color: '#fff', // such that we do not see the title of the current page 
        },
        // put one icon in the right header: mapIcon onpress navigate to the mapScreen 
        headerRight: ( <View style={styles.headerButtonContainer}>
                          <TouchableHighlight onPress={() => {
                                                              navigation.navigate('Map')
                                                            }
                                                    } style={styles.headerBarIcons}>
                            <IconEntypo name="map" size={hp("5%")} color="rgba(96,100,109, 1)"/>
                          </TouchableHighlight>          
                        </View>
        ),
        // put the overview icon in the left header. onpress we get to the overview screen
        headerLeft: (<View style={styles.headerButtonContainer}>
                          <TouchableHighlight onPress={() => {
                                                                navigation.navigate('Overview',{
                                                                  answer1:AnswerSheet.getAnswer(1),
                                                                  answer2:AnswerSheet.getAnswer(2),
                                                                  answer3:AnswerSheet.getAnswer(3),
                                                                  answer4:AnswerSheet.getAnswer(4),
                                                                  answer5:AnswerSheet.getAnswer(5),
                                                                  answer6:AnswerSheet.getAnswer(6),
                                                                  answer7:AnswerSheet.getAnswer(7),
                                                                  answer8:AnswerSheet.getAnswer(8),
                                                                  answer9:AnswerSheet.getAnswer(9),
                                                                  answer10:AnswerSheet.getAnswer(10),
                                                                  originScreenName:navigation.state.routeName
                                                                })
                                                              }
                                                      } style={styles.headerBarIcons}>
                              <IconMaterialCommunityIcons name="format-list-bulleted" size={hp("5%")} color="rgba(96,100,109, 1)"/>
                            </TouchableHighlight>
                      </View>
        ), 
        headerBackTitle: null,  // if the title is more than 4 letters, the fallbacktitle will be by default
                                // 'back' but i do not want this so i set it to null such that the label is 
                                // no longer shown on android as well as on iOS   
      }
    }
  }
);

// always export the variables, function and classes for inter document use
export default NavigationStack;

