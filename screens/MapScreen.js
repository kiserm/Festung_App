import React from 'react';
import {Text,View,TouchableHighlight,Image} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document in /constants/Styles.js
import PinchZoomView from 'react-native-pinch-zoom-view';

/**
 * IDEA:
 * this screen should give the user an overview of the Festung such that she or he can zoom in the shown map of the exhibition
 * and find the place of the next station
 */
export default class MapScreen extends React.Component {      
  static navigationOptions = {
    title: "MapScreen", // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js
    header: null,  // do not show the header for design purpose
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

        {/*Set the map image with zoom capabilities in here*/}                    
        <View style={styles.mapMiddleContainer}>
          {/* works fine for iOS */}
          <PinchZoomView maxScale={10} minScale={0.25}>
            <Image source={require('../assets/images/planFestungz.png')} style={styles.mapImageStyle}/>
          </PinchZoomView> 
        </View>

        {/*Set the navigation to go back*/}    
        <View style={styles.mapBottomContainer}>
          <TouchableHighlight onPress={() => this.props.navigation.goBack()} underlayColor="rgba(96,100,109, 1)" style={styles.mapButtonStyle}>
            <Text style={styles.mapButtonText} numberOfLines={1}>
              Zurück 
            </Text>
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}
