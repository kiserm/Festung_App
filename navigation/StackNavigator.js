// import the StackNavigator to be able to switch between screens by putting the 
// screens on to the stack and if you go back, then the last screen pops from the stack
import { createStackNavigator } from 'react-navigation';
import {View,TouchableHighlight,NativeModules} from 'react-native';
import React from 'react';

// for the navigation bar: here you can find the whole directory https://oblador.github.io/react-native-vector-icons/
import IconEntypo from 'react-native-vector-icons/Entypo'; 
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// to be able to have a proper design on every platform, I downloaded this package from 
// this website: https://www.npmjs.com/package/react-native-responsive-screen
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// import all screens in the order in which they appear in the app
import HomeScreen from '../screens/HomeScreen';
import HowToScreen from '../screens/HowToScreen';
import HintScreen from '../screens/HintScreen';
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
import ResultScreen from '../screens/ResultScreen';
import CertificateScreen from '../screens/CertificateScreen';
import OverviewScreen from '../screens/OverviewScreen';
import OverviewTutorialScreen from '../screens/OverviewTutorialScreen';
import TutorialScreen1 from '../screens/TutorialScreen1';
import TutorialScreen2 from '../screens/TutorialScreen2';
import TutorialScreen3 from '../screens/TutorialScreen3';
import TutorialScreen4 from '../screens/TutorialScreen4';
import TutorialScreen5 from '../screens/TutorialScreen5';
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


// used to custom the tab navigation bar
import styles from '../constants/Styles';

/**
 * IDEA:
 * here we create the StackNavigator. Every screen we want to Navigate to, needs to be
 * in this definition, else the screen is not accessible
 */
const NavigationStack = createStackNavigator(
  // the convention is that we navigate to the screens, but the screen names are without the suffix 'screen'. for example
  // we want to navigate to the HomeScreen we write: this.props.navigation.navigate('Home')
  {
    Home:  HomeScreen,
    HowTo: HowToScreen,
    Tutorial1: TutorialScreen1,
    Tutorial2: TutorialScreen2,
    Tutorial3: TutorialScreen3,
    Tutorial4: TutorialScreen4,
    Tutorial5: TutorialScreen5,
    Hint: HintScreen,
    Map: MapScreen,
    Overview: OverviewScreen,
    OverviewTutorial: OverviewTutorialScreen,
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
    // here we say on which screen the app should start
    initialRouteName: 'Home',
    // here we can design the Navigation Tab Bar at the top for all screens. however we could overwrite it in the screen files if we want to
    navigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          backgroundColor: '#fff',
          height: hp("7%"),
        },
        gesturesEnabled: false, // this makes it impossible to swipe back on ios!!!
        headerTintColor: 'rgba(96,100,109, 1)', 
        headerTitleStyle: {
        fontWeight: 'normal',
        textAlign: 'center',
        flex:1,
        color: '#fff', // such that we do not see the title of the current page 
        },
        // put two icons in the right header: mapIcon onpress to the mapScreen and hintIcon onpress to the hintScreen
        headerRight: ( <View style={styles.headerButtonContainer}>
                          {/* This is the first button when looking from the left.*/}
                          <TouchableHighlight onPress={() => {
                                                              navigation.navigate('Hint',{originScreenName: navigation.state.routeName})
                                                            }
                                                    } style={styles.headerBarIcons}>
                            <IconEntypo name="light-bulb" size={hp("5%")} color="rgba(96,100,109, 1)"/>
                          </TouchableHighlight>
                          {/* This is the second button when looking from the left.*/}
                          <TouchableHighlight onPress={() => {
                                                              navigation.navigate('Map',{originScreenName: navigation.state.routeName})
                                                            }
                                                    } style={styles.headerBarIcons}>
                            <IconEntypo name="map" size={hp("5%")} color="rgba(96,100,109, 1)"/>
                          </TouchableHighlight>          
                        </View>
                      ),
        // put the overview icon in the left header. onpress we get to the overview screen
        headerLeft: (<View style={styles.headerButtonContainer}>
                          <TouchableHighlight onPress={() => {
                                                                navigation.navigate('Overview',{originScreenName: navigation.state.routeName})
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

