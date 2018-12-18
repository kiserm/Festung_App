import React from 'react';

// import this handler to be able to turn off the android back button!
import {BackHandler} from 'react-native';

// import the self defined NavigationStack from the following document
import NavigationStack from './navigation/StackNavigator';

export default class App extends React.Component {
    /**
     * IDEA:
     * with these three methods we can turn off the back button on android during the app, 
     * such that after the user submitted his solutions, he can not go back anymore. this should be even impossible with the
     * android default back button.
     */
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
      }      
      componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
      }      
      handleBackButton() {
        return true;
      }
    
    // launch the app by calling the StackNavigator with its initial screen
    render() {
        return (
            <NavigationStack />
        );
  }
}
  