import React from 'react';
import {Text,View,TouchableHighlight} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document in /constants/Styles.js


export default class MapScreen extends React.Component {
      // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js
      static navigationOptions = {
        title: "MapScreen",
        header: null,  // do not show the header, else there is a problem for the hint screen because then we do not
                       // know from which screen we are coming hence we would have the wrong hint rendered 
      };
    
      render() {
        return (      
          <View style={styles.anyWholeScreen}>
            
            {/*Set the title of the Screen*/}        
            <View style={styles.mapTitleTextContainer}>
              <Text style={styles.mapTitleTextFormat} numberOfLines={2}>
                Plan der{"\n"}Festung
              </Text>
            </View>     

            {/*Set the map image in here*/}                    
            <View style={styles.mapTextContainer}>
                <Text style={styles.mapTextFormat}>
                    Hier kommt das Bild
                </Text>
            </View>

            {/*Set the navigation to go back since no header in Map*/}    
            <View style={styles.mapBottomContainer}>
              <TouchableHighlight onPress={() => this.props.navigation.goBack()} underlayColor="rgba(96,100,109, 1)" style={styles.anyButtonStyle}>
                  <Text style={styles.anyButtonText} numberOfLines={1}>
                    Zurück!
                  </Text>
              </TouchableHighlight>
            </View>
    
          </View>
        );
      }
}