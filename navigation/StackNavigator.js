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
import HistoryScreen from '../screens/HistoryScreen';
import StationOneScreen from '../screens/StationOneScreen';
import styles from '../constants/Styles';

// here we create the StackNavigator. Every screen we want to Navigate to, needs to be
// in this definition, else the screen is not accessible
const NavigationStack = createStackNavigator(
  {
    // the convention is that we navigate to the screens, but the screen names are without the suffix 'screen'
    Home:  HomeScreen,
    UserForm: UserFormScreen,
    HowTo: HowToScreen,
    History: HistoryScreen,
    StationOne: StationOneScreen    
  },
  {
    // here we say on which screen the app should start
    initialRouteName: 'Home',
    // here we can design the Navigation Tab Bar at the top for all screens
    navigationOptions: { 
        headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: 'rgba(96,100,109, 1)',
      headerTitleStyle: {
        fontWeight: 'normal',
        textAlign: 'center',
        flex:1
      },
      headerRight: (<View style={styles.headerButtonContainer}>
          {/* This is the first button when looking from the left.*/}
          <TouchableHighlight onPress={() => alert('kukuuu!')} title="Hint-Icon">
            <IconEntypo name="light-bulb" size={hp("3.5%")} color="rgba(96,100,109, 1)"/>
          </TouchableHighlight>
          {/* This is the second button when looking from the left.*/}
          <TouchableHighlight onPress={() => alert('This is the map!')} title="Map-Icon">
            <IconEntypo name="map" size={hp("3.5%")} color="rgba(96,100,109, 1)"/>
          </TouchableHighlight>
          
        </View>
      ),    
    }
  }
);

// always export the variables, function and classes for inter document use
export default NavigationStack;

