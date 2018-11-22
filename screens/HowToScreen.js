import React from 'react';
import {Text,View,TouchableHighlight,Platform,WebView} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document in /constants/Styles.js
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default class HowToScreen extends React.Component {
    // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js
    static navigationOptions = {
    title: "HowToScreen",
  };

  render() {
    // differ between iOS and Android since on Android the textAlign:justify is only available through the workaround over a webview
    if(Platform.OS === 'ios') {
        return (      
            <View style={styles.anyWholeScreen}>
              
              {/*Set the title of the Screen*/}        
              <View style={styles.howToTitleTextContainer}>
                <Text style={styles.howToTitleTextFormat}>
                  So geht's!
                </Text>
              </View>  

              {/*Do a scrollview for the text in iOS*/}   
              <View style={styles.howToTextContainer}>
                  <ScrollView showsVerticalScrollIndicator={true}>
                      <Text style={styles.howToTextFormat}>
                          Oben rechts siehst Du eine Karte. Drücke darauf und Du siehst 
                          den Übersichtsplan der Festung Fürigen. Anhand des Plans kannst Du die nächste
                          Rätselstation finden. {"\n"} {"\n"}
      
                          Bei jeder Station gilt es etwas herauszufinden. Wenn Du alle Rätsel richtig gelöst
                          hast, kannst Du am Ende einen Preis abholen. Falls Dir ein paar Fehler unterlaufen 
                          sollten, musst Du nicht traurig sein. Denn es gibt für jeden, der sich in das Abenteuer 
                          gestürzt hat, eine kleine Belohnung. {"\n"} {"\n"}
      
                          Falls Du mal nicht mehr weiter weisst, kannst Du die Glühbirne oben rechts berühren und die
                          schlauen Füchse Finja und Dario werden Dir den einen oder anderen Tipp verraten.
                      </Text>
                  </ScrollView>
              </View>

              {/*The button to get to the start of the quiz*/}   
              <View style={styles.howToButtonContainer}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Station1')} underlayColor="rgba(96,100,109, 1)" style={styles.anyButtonStyle}>
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
              <View style={styles.howToTitleTextContainer}>
                <Text style={styles.howToTitleTextFormat}>
                  So geht's!
                </Text>
              </View>  
                         
              {/*Do a scrollview for the text in android*/}   
              <View style={styles.howToTextContainer}>
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

                    "Falls Du mal nicht mehr weiter weisst, kannst Du die Glühbirne oben rechts berühren und die"+
                    "schlauen Füchse Finja und Dario werden Dir den einen oder anderen Tipp verraten. "+
                    "</p></html>"}} 
                    style={styles.howToTextFormatAndroid}
                    />
                  </ScrollView>
              </View>

              {/*The button to get to the start of the quiz*/}   
              <View style={styles.howToButtonContainer}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Station1')} underlayColor="rgba(96,100,109, 1)" style={styles.anyButtonStyle}>
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