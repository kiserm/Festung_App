import React from 'react';
import {Text,View,TouchableHighlight,Image, Platform,Modal} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document in /constants/Styles.js
import { ScrollView } from 'react-native-gesture-handler';
import { WebView } from 'react-native-webview';
import {Asset} from 'expo';
import ImageZoom from 'react-native-image-pan-zoom';
import {PinchZoomView} from 'react-native-pinch-zoom-view';
import {ImageViewer} from 'react-native-image-zoom-viewer';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'; // to be able to have a proper design on every platform, I downloaded this package from this website: https://www.npmjs.com/package/react-native-responsive-screen


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

  render() {/*
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
                        maximumZoomScale={8}
                        minimumZoomScale={0.7} 
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

<WebView source={{ html: "<html><body><div style='width: 100%;height: 100%;vertical-align: middle;display: flex;justify-content: center;'><img src='../assets/images/planFestung.png' style=' display: table-cell; width: 100%;margin: auto auto;'></div></body></html>" }}
                        originWhitelist={['*']}
                        scalesPageToFit={true} 
                        style={styles.mapWebViewStyle}
                        automaticallyAdjustContentInsets={true}
                        />

<html><body><div style='width: 100%;height: 100%;vertical-align: middle;display: flex;justify-content: center;'><img src='../assets/images/planFestung.png' style=' display: table-cell; width: 100%;margin: auto auto;'></div></body></html>

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

          {/*Set the map image with zoom capabilities in here, use a package where you can find here: https://www.npmjs.com/package/react-native-image-pan-zoom */}                    
          <View style={styles.mapMiddleContainer}>
          </View>



          {/*Set the navigation to go back since no header in Map*/}    
          {this.showRightBackButton()}
  
        </View>
      );
    //}
  }

  /**
   * IDEA:
   * the back button coming from the tutorialscreen should carry the iconPressed navigation parameter, hence we need 
   * a function to render the same button but with another functionality in the background
   */
  showRightBackButton(){
    if(this.props.navigation.getParam('originScreenName')==='Tutorial4'){
      return (
        <View style={styles.mapBottomContainer}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Tutorial4',{iconPressed:true})} underlayColor="rgba(96,100,109, 1)" style={styles.mapButtonStyle}>
                <Text style={styles.mapButtonText} numberOfLines={1}>
                  Zurück
                </Text>
            </TouchableHighlight>
          </View>

      );
    }
    else {
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
}