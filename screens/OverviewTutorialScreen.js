import React from 'react';
import {Text,View,TouchableHighlight,ScrollView,Alert} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document in /constants/Styles.js


/**
 * IDEA:
 * This screen should help the users to get around in the quiz world. Firstly, they should get an overview of all
 * quizzes, secondly they should be able to see which stations they already did and which they still have to do.
 * Thirdly, if two or more users solve the quizzes, they have a short way to compare their answers with the help of 
 * this overview screen.
 */
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

            {/* this section shows the buttons of the different stations and their state solved/unsolved. Moreover
                the user can scroll up and down due to the ScrollView */}     
            <View style={styles.overviewMiddleContainer}>
            
                <ScrollView>

                    <View style={styles.overviewRowButtonContainer}>
                        <TouchableHighlight onPress={() => Alert.alert('Achtung',"Klicke unten auf zurück!")} underlayColor="rgb(211, 211, 211)" style={styles.overviewButtonStyleNotSubmitable}>
                            <Text style={styles.overviewButtonText} numberOfLines={1}>
                                Station 1
                            </Text>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => Alert.alert('Achtung',"Klicke unten auf zurück!")} underlayColor="rgb(211, 211, 211)" style={styles.overviewButtonStyleNotSubmitable}>
                            <Text style={styles.overviewButtonText}>
                                zur Frage
                            </Text>
                        </TouchableHighlight>                        
                    </View>

                    <View style={styles.overviewRowButtonContainer}>
                        <TouchableHighlight onPress={() => Alert.alert('Achtung',"Klicke unten auf zurück!")} underlayColor="rgb(211, 211, 211)" style={styles.overviewButtonStyleNotSubmitable}>
                            <Text style={styles.overviewButtonText} numberOfLines={1}>
                                Station 2
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => Alert.alert('Achtung',"Klicke unten auf zurück!")} underlayColor="rgb(211, 211, 211)" style={styles.overviewButtonStyleNotSubmitable}>
                            <Text style={styles.overviewButtonText}>
                                zur Frage
                            </Text>
                        </TouchableHighlight>                   
                    </View>

                    <View style={styles.overviewRowButtonContainer}>
                        <TouchableHighlight onPress={() => Alert.alert('Achtung',"Klicke unten auf zurück!")} underlayColor="rgb(211, 211, 211)" style={styles.overviewButtonStyleNotSubmitable}>
                                <Text style={styles.overviewButtonText} numberOfLines={1}>
                                Station 3
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => Alert.alert('Achtung',"Klicke unten auf zurück!")} underlayColor="rgb(211, 211, 211)" style={styles.overviewButtonStyleNotSubmitable}>
                            <Text style={styles.overviewButtonText}>
                                zur Frage
                            </Text>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.overviewRowButtonContainer}>
                        <TouchableHighlight onPress={() => Alert.alert('Achtung',"Klicke unten auf zurück!")} underlayColor="rgb(211, 211, 211)" style={styles.overviewButtonStyleNotSubmitable}>
                            <Text style={styles.overviewButtonText} numberOfLines={1}>
                                Station 4
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => Alert.alert('Achtung',"Klicke unten auf zurück!")} underlayColor="white" style={styles.overviewButtonStyleNotSubmitable}>
                            <Text style={styles.overviewButtonText}>
                                B
                            </Text>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.overviewRowButtonContainer}>
                        <TouchableHighlight onPress={() => Alert.alert('Achtung',"Klicke unten auf zurück!")} underlayColor="rgb(211, 211, 211)" style={styles.overviewButtonStyleNotSubmitable}>
                            <Text style={styles.overviewButtonText} numberOfLines={1}>
                                Station 5
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => Alert.alert('Achtung',"Klicke unten auf zurück!")} underlayColor="white" style={styles.overviewButtonStyleNotSubmitable}>
                            <Text style={styles.overviewButtonText}>
                                D
                            </Text>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.overviewRowButtonContainer}>
                        <TouchableHighlight onPress={() => Alert.alert('Achtung',"Klicke unten auf zurück!")} underlayColor="rgb(211, 211, 211)" style={styles.overviewButtonStyleNotSubmitable}>
                            <Text style={styles.overviewButtonText} numberOfLines={1}>
                                Station 6
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => Alert.alert('Achtung',"Klicke unten auf zurück!")} underlayColor="rgb(211, 211, 211)" style={styles.overviewButtonStyleNotSubmitable}>
                            <Text style={styles.overviewButtonText}>
                                zur Frage
                            </Text>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.overviewRowButtonContainer}>
                        <TouchableHighlight onPress={() => Alert.alert('Achtung',"Klicke unten auf zurück!")} underlayColor="rgb(211, 211, 211)" style={styles.overviewButtonStyleNotSubmitable}>
                            <Text style={styles.overviewButtonText} numberOfLines={1}>
                                Station 7
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => Alert.alert('Achtung',"Klicke unten auf zurück!")} underlayColor="rgb(211, 211, 211)" style={styles.overviewButtonStyleNotSubmitable}>
                            <Text style={styles.overviewButtonText}>
                                zur Frage
                            </Text>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.overviewRowButtonContainer}>
                        <TouchableHighlight onPress={() => Alert.alert('Achtung',"Klicke unten auf zurück!")} underlayColor="rgb(211, 211, 211)" style={styles.overviewButtonStyleNotSubmitable}>
                                <Text style={styles.overviewButtonText} numberOfLines={1}>
                                    Station 8
                                </Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => Alert.alert('Achtung',"Klicke unten auf zurück!")} underlayColor="white" style={styles.overviewButtonStyleNotSubmitable}>
                            <Text style={styles.overviewButtonText}>
                                C 
                            </Text>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.overviewRowButtonContainer}>
                        <TouchableHighlight onPress={() => Alert.alert('Achtung',"Klicke unten auf zurück!")} underlayColor="rgb(211, 211, 211)" style={styles.overviewButtonStyleNotSubmitable}>
                            <Text style={styles.overviewButtonText} numberOfLines={1}>
                                Station 9
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => Alert.alert('Achtung',"Klicke unten auf zurück!")} underlayColor="rgb(211, 211, 211)" style={styles.overviewButtonStyleNotSubmitable}>
                            <Text style={styles.overviewButtonText}>
                                zur Frage
                            </Text>
                        </TouchableHighlight>
                    </View>
                    
                    <View style={styles.overviewRowButtonContainer}>
                        <TouchableHighlight onPress={() => Alert.alert('Achtung',"Klicke unten auf zurück!")} underlayColor="rgb(211, 211, 211)" style={styles.overviewButtonStyleNotSubmitable}>
                            <Text style={styles.overviewButtonText} numberOfLines={1}>
                                Station 10
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => Alert.alert('Achtung',"Klicke unten auf zurück!")} underlayColor="rgb(211, 211, 211)" style={styles.overviewButtonStyleNotSubmitable}>
                            <Text style={styles.overviewButtonText}>
                                zur Frage
                            </Text>
                        </TouchableHighlight>
                    </View>

                </ScrollView>
            </View>

            {/* show at the bottom two buttons, one to get back and one to submit your answers if and only if all quizzes
                has ben solved. */}        
            <View style={styles.overviewBottomContainer}>
                <View style={styles.overviewRowButtonContainer}>
                    <TouchableHighlight onPress={() => this.props.navigation.goBack()} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                        <Text style={styles.overviewButtonText} numberOfLines={1}>
                            zurück
                        </Text>
                    </TouchableHighlight>
                    
                    <TouchableHighlight onPress={() => Alert.alert('Achtung',"Klicke unten auf zurück!")} underlayColor="rgb(211, 211, 211)" style={styles.overviewButtonStyleNotSubmitable}>
                        <Text style={styles.overviewButtonText} numberOfLines={1}>
                            Abgabe
                        </Text>
                </TouchableHighlight>

                </View>
            </View>

            </View>
        );
    }
}