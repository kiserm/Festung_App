import React from 'react';
import {Image,Text,View,TouchableHighlight,Platform,WebView} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default class HowToScreen extends React.Component {
    // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js
    static navigationOptions = {
    title: "HowToScreen",
  };

  render() {
    if(Platform.OS === 'ios') {
        return (      
            <View style={styles.anyWholeScreen}>
              
              {/*Set the title of the Screen*/}        
              <View style={styles.anyTitleTextContainer}>
                <Text style={styles.anyTitleTextFormat}>
                  So geht's!
                </Text>
              </View>  
              
              <View style={styles.HowToTextContainer}>
                  <ScrollView showsVerticalScrollIndicator={true}>
                      <Text style={styles.anyTextFormat}>
                          Oben rechts siehst Du eine Karte. Drücke darauf und Du siehst 
                          den Übersichtsplan der Festung Fürigen. Anhand des Plans kannst Du die nächste
                          Rätselstation finden. {"\n"} {"\n"}
      
                          Bei jeder Station gilt es etwas herauszufinden. Wenn Du alle Rätsel richtig gelöst
                          hast, kannst Du am Ende einen Preis abholen. Falls Dir ein paar Fehler unterlaufen 
                          sollten, musst Du nicht traurig sein. Denn es gibt für jeden, der sich in das Abenteuer 
                          gestürzt hat, eine kleine Belohnung. {"\n"} {"\n"}
      
                          Falls Du mal nicht mehr weiter weisst, kannst Du das Fragezeichen oben rechts berühren und die
                          schlauen Füchse Finja und Dario werden Dir den einen oder anderen Tipp verraten.
                      </Text>
                  </ScrollView>
              </View>
      
              <View style={styles.HowToButtonContainer}>
                {/* Set a button to get to the next page where you can find the quizzes, self customized button with
                    component TouchableOpacity from https://facebook.github.io/react-native/docs/touchableopacity */}
                <TouchableHighlight onPress={() => this.props.navigation.navigate('StationOne')} underlayColor="rgba(96,100,109, 1)" style={styles.anyButtonStyle}>
                    {/*use NumberOfLines to say how much lines the text should take*/}
                    <Text style={styles.anyButtonText} numberOfLines={1}>
                      Auf Los geht's Los!
                    </Text>
                </TouchableHighlight>
              </View>
      
            </View>
          );
    } 
    else{
        return (      
            <View style={styles.anyWholeScreen}>
              
              {/*Set the title of the Screen*/}        
              <View style={styles.anyTitleTextContainer}>
                <Text style={styles.anyTitleTextFormat}>
                  So geht's!
                </Text>
              </View>  
              
              <View style={styles.HowToTextContainer}>
                  <ScrollView contentContainerStyle={{marginRight:wp("2%")}}>
                    {/*fontsize in css for right size according to the screenheight use: https://stackoverflow.com/questions/16056591/font-scaling-based-on-width-of-container */}
                    <WebView source={{ html: "<html><p style='text-align: justify; color:rgba(96,100,109, 1); font-size:6vw;'>"+
                    "Oben rechts siehst Du eine Karte. Drücke darauf und Du siehst "+
                    "den Übersichtsplan der Festung Fürigen. Anhand des Plans kannst Du die nächste "+
                    "Rätselstation finden. <br> <br>"+

                    "Bei jeder Station gilt es etwas herauszufinden. Wenn Du alle Rätsel richtig gelöst "+
                    "hast, kannst Du am Ende einen Preis abholen. Falls Dir ein paar Fehler unterlaufen "+
                    "sollten, musst Du nicht traurig sein. Denn es gibt für jeden, der sich in das Abenteuer "+
                    "gestürzt hat, eine kleine Belohnung. <br> <br>"+

                    "Falls Du mal nicht mehr weiter weisst, kannst Du das Fragezeichen oben rechts berühren und die"+
                    "schlauen Füchse Finja und Dario werden Dir den einen oder anderen Tipp verraten. "+
                    "</p></html>"}} 
                    style={styles.anyTextFormatAndroid}
                    />
                  </ScrollView>
              </View>
      
              <View style={styles.HowToButtonContainer}>
                {/* Set a button to get to the next page where you can find the quizzes, self customized button with
                    component TouchableOpacity from https://facebook.github.io/react-native/docs/touchableopacity */}
                <TouchableHighlight onPress={() => this.props.navigation.navigate('History')} underlayColor="rgba(96,100,109, 1)" style={styles.anyButtonStyle}>
                    {/*use NumberOfLines to say how much lines the text should take*/}
                    <Text style={styles.anyButtonText} numberOfLines={1}>
                      Auf Los geht's Los!
                    </Text>
                </TouchableHighlight>
              </View>
      
            </View>
          );
    }
  }
}