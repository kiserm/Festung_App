import React from 'react';
import {Text,View,TouchableHighlight,Animated,NativeModules} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';
// to be able to have a proper design on every platform, I downloaded this package from 
// this website: https://www.npmjs.com/package/react-native-responsive-screen
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class TutorialScreen5 extends React.Component {
  // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js
  static navigationOptions = () => ({
    title:'TutorialScreen5',
    headerLeft:(<View style={styles.headerButtonContainer}>
                  <TouchableHighlight onPress={() => {}} style={styles.navigationBarIcons}>
                    <IconMaterialCommunityIcons name="format-list-bulleted" size={hp("5%")} color="rgba(96,100,109, 1)"/>
                  </TouchableHighlight>
                </View>
    ),
    headerRight: ( <View style={styles.headerButtonContainer}>
                      {/* This is the first button when looking from the left.*/}
                      <TouchableHighlight onPress={() => {}} style={styles.navigationBarIcons}>
                        <IconEntypo name="light-bulb" size={hp("5%")} color="rgba(96,100,109, 1)"/>
                      </TouchableHighlight>
                      {/* This is the second button when looking from the left.*/}
                      <TouchableHighlight onPress={() => {}} style={styles.navigationBarIcons}>
                        <IconEntypo name="map" size={hp("5%")} color="rgba(96,100,109, 1)"/>
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
              <Text style={styles.tutorialSubtitleTextFormat}/>
            </View>
            <View style={styles.tutorialTextContainer}>
                <Text style={styles.stationTextFormat}>
                  Du hast das Tutorial geschafft. Nun wünscht Dir das Nidwaldner Museum viel Spass
                  beim Lösen der spannenden Aufgaben!
                </Text>
            </View>

            <View style={styles.tutorialBottomContainer}>

              <View style={styles.stationRowContainer}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Station1')} underlayColor="rgba(96,100,109, 1)" style={styles.unchosenButtonStyle}>
                      <Text style={styles.anyButtonText}>     Los gehts!     </Text>
                </TouchableHighlight>
              </View>

            </View>

            <IconMaterialCommunityIcons name='numeric-1-box' size={hp('7%')} color='#C92732' style={styles.tutorialOverviewArrowStyle}/>
            <IconMaterialCommunityIcons name='numeric-2-box' size={hp('7%')} color='#C92732' style={styles.tutorialHintArrowStyle}/>
            <IconMaterialCommunityIcons name='numeric-3-box' size={hp('7%')} color='#C92732' style={styles.tutorialMapArrowStyle}/>

          </View>

   
        );
      }          
}