import React from 'react';
import {Text,View,Button,TextInput,Keyboard} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document


export default class UserFormScreen extends React.Component {
  // set a title for the navigation bar at the top
  static navigationOptions = {
    title: 'Willkommen!',
  };

  // we need a state and an event handler for the textinput
  state = {
    inputValue: '',
  };
  _handleTextChange = inputValue => {
    this.setState({ inputValue });
  };

  render() {   
    return (
      <View style={styles.anyWholeScreen}>
        <View style={styles.titleView}>
          <Text style={styles.questionText}>
            Wie heisst Du?
          </Text>
          {/*Handle the text input with events and store it in the state object. */}
          <TextInput 
            value={this.state.inputValue}
            onChangeText={this._handleTextChange}
            style={styles.textInput}
          />
        </View>    
        {/* Set a button to get to the specific quiz with a state which name the user has */}
        <View style = {styles.toQuizButton}>
          <Button title="Start Quiz!" color="#fff" onPress={() => this.props.navigation.navigate('HowTo',{ Username: this.state.inputValue })}/> 
        </View>  
      </View>  
    );
  }
}