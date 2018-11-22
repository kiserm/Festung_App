import React from 'react';
import {Text,View,TouchableHighlight} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document in /constants/Styles.js


export default class HintScreen extends React.Component {
    // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js
    static navigationOptions = {
      title: "HintScreen", 
      header: null,  // do not show the header, else there is a problem for the hint screen because then we do not
                     // know from which screen we are coming hence we would have the wrong hint rendered
    };
  
    render() {
        return (      
          <View style={styles.anyWholeScreen}>
            
            {/*Set the title of the Screen*/}        
            <View style={styles.hintTitleTextContainer}>
              <Text style={styles.hintTitleTextFormat} numberOfLines={2}>
                Tipps von Finja {"\n"}und Dario
              </Text>
            </View>   

            {/*give the hint according to the screen you are coming*/}   
            <View style={styles.hintTextContainer}>
                <Text style={styles.hintTextFormat}>
                    Du kommst von dieser Station {this.props.navigation.getParam('originScreenName')}! {"\n"}
                    Du hast Dir einen Tipp verdient.
                </Text>
            </View>

            {/*give the back navigation since we do not have a header*/}     
            <View style={styles.hintBottomContainer}>
              <TouchableHighlight onPress={() => this.props.navigation.goBack()} underlayColor="rgba(96,100,109, 1)" style={styles.anyButtonStyle}>
                  <Text style={styles.anyButtonText} numberOfLines={1}>
                    Zurück zur Frage!
                  </Text>
              </TouchableHighlight>
            </View>
    
          </View>
        );     
    }
}