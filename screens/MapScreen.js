import React from 'react';
import {Text,View,TouchableHighlight,Image, Platform} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document in /constants/Styles.js
import { ScrollView, WebView } from 'react-native-gesture-handler';

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
    /* do not use the scrollview on ios since you get a very bad quality while zooming...
    // differ between iOS and Android since on Android the scrollview is not implemented and we need to make a workaround on the webview
    if(Platform.OS === 'ios') {
      return (      
        <View style={styles.anyWholeScreen}>
          
          {/*Set the title of the Screen*//*}        
          <View style={styles.mapTitleTextContainer}>
            <Text style={styles.mapTitleTextFormat} numberOfLines={2}>
              Plan der{"\n"}Festung
            </Text>
          </View>  

          {/*Set the map image with zoom capabilities in here*//*}                    
          <View style={styles.mapMiddleContainer}>
            <ScrollView scrollEnabled={true}
                        centerContent={true} 
                        maximumZoomScale={4}
                        minimumZoomScale={0.5} 
                        automaticallyAdjustContentInsets={true}
                        contentContainerStyle={styles.mapScrollViewStyle}>
              <Image source={require('../assets/images/planFestung.png')} style={styles.mapImageStyle}/>
            </ScrollView>
          </View>

          {/*Set the navigation to go back since no header in Map*//*}    
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
    else {*/
      return (      
        <View style={styles.anyWholeScreen}>
          
          {/*Set the title of the Screen*/}        
          <View style={styles.mapTitleTextContainer}>
            <Text style={styles.mapTitleTextFormat} numberOfLines={2}>
              Plan der{"\n"}Festung
            </Text>
          </View>     

            {/*Set the map image with zoom capabilities in here, use a webview for android. what it shows is in another html file -> see source path */}                    
            <View style={styles.mapMiddleContainer}>
              <WebView source={require('../constants/MapWebView.html')} 
                        scalesPageToFit={true} 
                        style={styles.mapWebViewStyle}
                        automaticallyAdjustContentInsets={true}
                        />
            </View>

          {/*Set the navigation to go back since no header in Map*/}    
          <View style={styles.mapBottomContainer}>
            <TouchableHighlight onPress={() => this.props.navigation.goBack()} underlayColor="rgba(96,100,109, 1)" style={styles.mapButtonStyle}>
                <Text style={styles.mapButtonText} numberOfLines={1}>
                  Zurück
                </Text>
            </TouchableHighlight>
          </View>
  
        </View>
      );
    //}
  }
}