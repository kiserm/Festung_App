import React from 'react';
import {Text,View,TouchableHighlight,Animated,NativeModules} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';
// to be able to have a proper design on every platform, I downloaded this package from 
// this website: https://www.npmjs.com/package/react-native-responsive-screen
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class TutorialScreen2 extends React.Component {
  // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js
  static navigationOptions = ({navigation}) => ({
    title:'TutorialScreen2',
    headerLeft:(<View style={styles.headerButtonContainer}>
                  <TouchableHighlight onPress={() => {}} style={styles.navigationBarIcons}>
                    <IconMaterialCommunityIcons name="format-list-bulleted" size={hp("2%")} color="rgba(96,100,109, 1)"/>
                  </TouchableHighlight>
                </View>
    ),
    headerRight: ( <View style={styles.headerButtonContainer}>
                      {/* This is the first button when looking from the left.*/}
                      <TouchableHighlight onPress={() => {}} style={styles.navigationBarIcons}>
                        <IconEntypo name="light-bulb" size={hp("2%")} color="rgba(96,100,109, 1)"/>
                      </TouchableHighlight>
                      {/* This is the second button when looking from the left.*/}
                      <TouchableHighlight onPress={() => {navigation.navigate('Map')}} style={styles.navigationBarIcons}>
                        <IconEntypo name="map" size={hp("5%")} color="#C92732"/>
                      </TouchableHighlight>          
                    </View>
    ),
  });
    
      render() {


        return (      
          <View style={styles.anyWholeScreen}>
            
            {/*Set the title of the Screen*/}        
            <View style={styles.tutorialTitleTextContainer}>
              <Text style={styles.tutorialTitleTextFormat}>
                Tutorial
              </Text>
            </View>     
            <View style={styles.tutorialSubtitleContainer}>
              <Text style={styles.tutorialSubtitleTextFormat}>
                Schritt 3 von 3
              </Text>
            </View>
            <View style={styles.tutorialTextContainer}>
                <Text style={styles.stationTextFormat}>
                  Wenn Du auf obiges rotes Symbol drückst, öffnet sich der Übersichtsplan der Festung Fürigen, der Dir
                  als Orientierungshilfe dienen sollte.
                </Text>
            </View>

            <View style={styles.tutorialBottomContainer}>

              <View style={styles.stationRowContainer}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Tutorial3')} underlayColor="rgba(96,100,109, 1)" style={styles.unchosenButtonStyle}>
                    <Text style={styles.anyButtonText}>
                            Zurück
                    </Text>
                </TouchableHighlight>
              </View>

             <View style={styles.tutorialRowMiddleContainer}>
                <TouchableHighlight onPress={()=>{}} underlayColor="rgba(96,100,109, 1)" style={styles.unchosenButtonStyle}>
                    <Text style={styles.anyButtonText}>
                      3 / 3
                    </Text>
                </TouchableHighlight>
              </View>

              <View style={styles.stationRowContainer}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Tutorial5')} underlayColor="rgba(96,100,109, 1)" style={styles.unchosenButtonStyle}>
                      <Text style={styles.anyButtonText}>
                            Weiter
                      </Text>
                </TouchableHighlight>
              </View>

            </View>

            <IconMaterialCommunityIcons name='numeric-3-box' size={hp('7%')} color='#C92732' style={styles.tutorialMapArrowStyle}/>
            

            </View>

   
        );
      }          
}