import React from 'react';
import {BackHandler} from 'react-native';
// import the self defined NavigationStack from the following document
import NavigationStack from './navigation/StackNavigator';

export default class App extends React.Component {
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
      }
      
      componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
      }      
      handleBackButton() {
        return true;
      }
  render() {
      return (
          <NavigationStack />
      );
  }
}
  