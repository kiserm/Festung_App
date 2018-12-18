import React from 'react';
import {Text,View,TouchableHighlight,Image, Platform,Modal} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document in /constants/Styles.js
import { ScrollView } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'; // to be able to have a proper design on every platform, I downloaded this package from this website: https://www.npmjs.com/package/react-native-responsive-screen
import PinchZoomView from 'react-native-pinch-zoom-view';

/**
 * IDEA:
 * this screen should give the user an overview of the Festung such that she or he can navigate through the rooms easily
 */
export default class MapScreen extends React.Component {      
  static navigationOptions = {
    title: "MapScreen", // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js
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

          {/*Set the map image with zoom capabilities in here*/}                    
          <View style={styles.mapMiddleContainer}>

            <PinchZoomView maxScale={5} minScale={0.25}>
              <Image source={require('../assets/images/planFestung.png')} style={styles.mapImageStyle}/>
            </PinchZoomView>

          </View>

          {/*Set the navigation to go back since no header in Map*/}    
          {this.showBackButton()}
  
        </View>
      );
    }

  /**
   * IDEA:
   * the back button to write it once and not twice once for android and once for ios
   */
  showBackButton(){
    return (
      <View style={styles.mapBottomContainer}>
          <TouchableHighlight onPress={() => this.props.navigation.goBack()} underlayColor="rgba(96,100,109, 1)" style={styles.mapButtonStyle}>
              <Text style={styles.mapButtonText} numberOfLines={1}>
                Zurück
              </Text>
          </TouchableHighlight>
        </View>
    );
  }
}