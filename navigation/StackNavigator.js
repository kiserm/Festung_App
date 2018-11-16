// import the StackNavigator to be able to switch between screens by putting the 
// screens on to the stack and if you go back, then the last screen pops from the stack
import { createStackNavigator } from 'react-navigation';

// import all screens in the order in which they appear in the app
import HomeScreen from '../screens/HomeScreen';
import UserFormScreen from '../screens/UserFormScreen';
import HowToScreen from '../screens/HowToScreen';
import HistoryScreen from '../screens/HistoryScreen';
import StationOneScreen from '../screens/StationOneScreen';

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
      headerTintColor: '#rgba(96,100,109, 1)',
      headerTitleStyle: {
        fontWeight: 'normal',
      }
    }
  }
);

// always export the variables, function and classes for inter document use
export default NavigationStack;