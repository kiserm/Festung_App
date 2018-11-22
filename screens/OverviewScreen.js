import React from 'react';
import {Text,View,TouchableHighlight,ScrollView} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document in /constants/Styles.js


export default class OverviewScreen extends React.Component {
      // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js
      static navigationOptions = {
        title: "OverviewScreen",
        header: null, // do not show the header, else there is a problem for the hint screen because then we do not
                      // know from which screen we are coming hence we would have the wrong hint rendered
      };
      
      render() {
        return (      
          <View style={styles.anyWholeScreen}>
            
            {/*Set the title of the Screen*/}        
            <View style={styles.overviewTopContainer}>
              <Text style={styles.overviewTitleTextFormat}>
                Übersicht
              </Text>
            </View>     
            
            {/*--------------------------------------------TODO-------------------------------------------------*/}  
            {/*            if a question is answered, make the tag with the answer given as param               */}   
            {/*show the overview table with state 'done,toDo' for every station*/}       
            <View style={styles.overviewMiddleContainer}>
            
                <ScrollView>

                    <View style={styles.overviewRowButtonContainer}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Station1')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                            <Text style={styles.overviewButtonText} numberOfLines={1}>
                                Station 1
                            </Text>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Station1')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                            <Text style={styles.overviewButtonText} numberOfLines={1}>
                                Erledigt!
                            </Text>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.overviewRowButtonContainer}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Station2')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                            <Text style={styles.overviewButtonText} numberOfLines={1}>
                                Station 2
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Station2')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                            <Text style={styles.overviewButtonText} numberOfLines={1}>
                                zur Frage!
                            </Text>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.overviewRowButtonContainer}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Station3')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                            <Text style={styles.overviewButtonText} numberOfLines={1}>
                                Station 3
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Station3')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                            <Text style={styles.overviewButtonText} numberOfLines={1}>
                                zur Frage!
                            </Text>
                        </TouchableHighlight>

                    </View>

                    <View style={styles.overviewRowButtonContainer}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Station4')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                            <Text style={styles.overviewButtonText} numberOfLines={1}>
                                Station 4
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Station4')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                            <Text style={styles.overviewButtonText} numberOfLines={1}>
                                Erledigt!
                            </Text>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.overviewRowButtonContainer}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Station5')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                            <Text style={styles.overviewButtonText} numberOfLines={1}>
                                Station 5
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Station5')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                            <Text style={styles.overviewButtonText} numberOfLines={1}>
                                Erledigt!
                            </Text>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.overviewRowButtonContainer}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Station6')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                            <Text style={styles.overviewButtonText} numberOfLines={1}>
                                Station 6
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Station6')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                            <Text style={styles.overviewButtonText} numberOfLines={1}>
                                zur Frage!
                            </Text>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.overviewRowButtonContainer}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Station7')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                            <Text style={styles.overviewButtonText} numberOfLines={1}>
                                Station 7
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Station7')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                            <Text style={styles.overviewButtonText} numberOfLines={1}>
                                Erledigt!
                            </Text>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.overviewRowButtonContainer}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Station8')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                            <Text style={styles.overviewButtonText} numberOfLines={1}>
                                Station 8
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Station8')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                            <Text style={styles.overviewButtonText} numberOfLines={1}>
                                zur Frage!
                            </Text>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.overviewRowButtonContainer}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Station9')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                            <Text style={styles.overviewButtonText} numberOfLines={1}>
                                Station 9
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Station9')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                            <Text style={styles.overviewButtonText} numberOfLines={1}>
                                zur Frage!
                            </Text>
                        </TouchableHighlight>
                    </View>
                    
                    <View style={styles.overviewRowButtonContainer}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Station10')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                            <Text style={styles.overviewButtonText} numberOfLines={1}>
                                Station 10
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Station10')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                            <Text style={styles.overviewButtonText} numberOfLines={1}>
                                zur Frage!
                            </Text>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.overviewRowButtonContainer}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Station11')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                            <Text style={styles.overviewButtonText} numberOfLines={1}>
                                Station 11
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Station11')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                            <Text style={styles.overviewButtonText} numberOfLines={1}>
                                zur Frage!
                            </Text>
                        </TouchableHighlight>
                    </View>
                    
                    <View style={styles.overviewRowButtonContainer}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Station12')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                            <Text style={styles.overviewButtonText} numberOfLines={1}>
                                Station 12
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Station12')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                            <Text style={styles.overviewButtonText} numberOfLines={1}>
                                zur Frage!
                            </Text>
                        </TouchableHighlight>
                    </View>
    
                </ScrollView>
            </View>

            {/*show at the bottom two buttons, one to get back and one to submit your answers*/}        
            <View style={styles.overviewBottomContainer}>
                <View style={styles.overviewRowButtonContainer}>
                    <TouchableHighlight onPress={() => this.props.navigation.goBack()} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                        <Text style={styles.overviewButtonText} numberOfLines={1}>
                            Zurück!
                        </Text>
                    </TouchableHighlight>
                    {/*--------------------------------------------TODO-------------------------------------------------*/}  
                    {/*  if not all questions has been answert, make an alert and do not go to the submit screen        */}              
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Result')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                        <Text style={styles.overviewButtonText} numberOfLines={1}>
                            Abgabe!
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
    
          </View>
        );
      }
}