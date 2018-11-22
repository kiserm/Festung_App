// import the StackNavigator to be able to switch between screens by putting the 
// screens on to the stack and if you go back, then the last screen pops from the stack
import { createStackNavigator } from 'react-navigation';
import {View,Button,TouchableHighlight} from 'react-native';
import React from 'react';

// for the navigation bar: here you can find the whole directory https://oblador.github.io/react-native-vector-icons/
import IconEntypo from 'react-native-vector-icons/Entypo'; 

// to be able to have a proper design on every platform, I downloaded this package from 
// this website: https://www.npmjs.com/package/react-native-responsive-screen
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// import all screens in the order in which they appear in the app
import HomeScreen from '../screens/HomeScreen';
import UserFormScreen from '../screens/UserFormScreen';
import HowToScreen from '../screens/HowToScreen';
import StationOneScreen from '../screens/StationOneScreen';
import HintScreen from '../screens/HintScreen';
import MapScreen from '../screens/MapScreen';

// used for the tab navigation bar
import styles from '../constants/Styles';

// here we create the StackNavigator. Every screen we want to Navigate to, needs to be
// in this definition, else the screen is not accessible
const NavigationStack = createStackNavigator(
  {
    // the convention is that we navigate to the screens, but the screen names are without the suffix 'screen'
    Home:  HomeScreen,
    UserForm: UserFormScreen,
    HowTo: HowToScreen,
    StationOne: StationOneScreen, 
    Hint: HintScreen,
    Map: MapScreen
  },
  {
    // here we say on which screen the app should start
    initialRouteName: 'Home',
    // here we can design the Navigation Tab Bar at the top for all screens
    navigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
        backgroundColor: '#fff',
        },
        headerTintColor: 'rgba(96,100,109, 1)', 
        headerTitleStyle: {
        fontWeight: 'normal',
        textAlign: 'center',
        flex:1,
        color: '#fff', // such that we do not see the title of the current page 
        },
        headerRight: ( <View style={styles.headerButtonContainer}>
          {/* This is the first button when looking from the left.*/}
          <TouchableHighlight onPress={() => {
                                                // if we are already in the Hint Menue, goBack if the light bulb is touched again
                                                if(navigation.state.routeName==='Hint'){
                                                  navigation.goBack()
                                                } 
                                                else{
                                                  navigation.navigate('Hint',{originScreenName: navigation.state.routeName})
                                                }
                                              }
                                      } style={styles.navigationBarIcons}>
            <IconEntypo name="light-bulb" size={hp("3.5%")} color="rgba(96,100,109, 1)"/>
          </TouchableHighlight>
          {/* This is the second button when looking from the left.*/}
          <TouchableHighlight onPress={() => {
                                                // if we are already in the Map Menue, goBack if the map icon is touched again
                                                if(navigation.state.routeName==='Map'){
                                                  navigation.goBack()
                                                } 
                                                else{
                                                  navigation.navigate('Map')
                                                }
                                              }
                                        } style={styles.navigationBarIcons}>
            <IconEntypo name="map" size={hp("3.5%")} color="rgba(96,100,109, 1)"/>
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

