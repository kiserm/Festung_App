import React from 'react';
import {Image,StyleSheet,Text,View,TouchableHighlight,Button,Linking,TextInput} from 'react-native';


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
      <View style={styles.wholeScreen}>
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

/* the styles list */
const styles = StyleSheet.create({
  wholeScreen: {
    backgroundColor: '#fff',
  },
  titleView: {
    alignItems: 'center',
    marginHorizontal: 50,
    marginTop: 50,
  },
  titleText: {
    fontSize: 35,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 45,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  questionText: {
    fontSize: 25,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 50,
  },
  toQuizButton: {
    fontSize: 5,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 50,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 500,
    backgroundColor: 'rgba(96,100,109, 1)',
    borderColor: 'rgba(96,100,109, 1)',
    borderWidth: 2,
    borderRadius: 10,       
  },
  textInput:{
    width: 200, 
    height: 44, 
    padding: 8, 
    borderWidth: 2,
    borderColor: 'rgba(96,100,109, 1)', 
    borderRadius: 10, 
    textAlign: 'center', 
    marginVertical: 10,
  }
});