import React from 'react';
import {Text,View,TouchableHighlight,ScrollView} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document


export default class OverviewScreen extends React.Component {
      // set a title for the navigation bar at the top and the design is in the file ../navigation/StackNavigator.js
      static navigationOptions = {
        title: "OverviewScreen",    
      };
      


      render() {
        return (      
          <View style={styles.anyWholeScreen}>
            
            {/*Set the title of the Screen*/}        
            <View style={styles.anyTitleTextContainer}>
              <Text style={styles.anyTitleTextFormat}>
                Übersicht
              </Text>
            </View>     
            
            <ScrollView contentContainerStyle={styles.overviewScrollContainer}>
                <View style={styles.HowToButtonContainer}>
                {/* Set a button to get to the next page where you can find the quizzes, self customized button with
                    component TouchableOpacity from https://facebook.github.io/react-native/docs/touchableopacity */}
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Station1')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                    {/*use NumberOfLines to say how much lines the text should take*/}
                    <Text style={styles.overviewButtonText} numberOfLines={1}>
                        Station 1
                    </Text>
                </TouchableHighlight>
                </View>

                <View style={styles.HowToButtonContainer}>
                {/* Set a button to get to the next page where you can find the quizzes, self customized button with
                    component TouchableOpacity from https://facebook.github.io/react-native/docs/touchableopacity */}
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Station2')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                    {/*use NumberOfLines to say how much lines the text should take*/}
                    <Text style={styles.overviewButtonText} numberOfLines={1}>
                        Station 2
                    </Text>
                </TouchableHighlight>
                </View>


                <View style={styles.HowToButtonContainer}>
                {/* Set a button to get to the next page where you can find the quizzes, self customized button with
                    component TouchableOpacity from https://facebook.github.io/react-native/docs/touchableopacity */}
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Station3')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                    {/*use NumberOfLines to say how much lines the text should take*/}
                    <Text style={styles.overviewButtonText} numberOfLines={1}>
                        Station 3
                    </Text>
                </TouchableHighlight>
                </View>


                <View style={styles.HowToButtonContainer}>
                {/* Set a button to get to the next page where you can find the quizzes, self customized button with
                    component TouchableOpacity from https://facebook.github.io/react-native/docs/touchableopacity */}
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Station4')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                    {/*use NumberOfLines to say how much lines the text should take*/}
                    <Text style={styles.overviewButtonText} numberOfLines={1}>
                        Station 4
                    </Text>
                </TouchableHighlight>
                </View>


                <View style={styles.HowToButtonContainer}>
                {/* Set a button to get to the next page where you can find the quizzes, self customized button with
                    component TouchableOpacity from https://facebook.github.io/react-native/docs/touchableopacity */}
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Station5')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                    {/*use NumberOfLines to say how much lines the text should take*/}
                    <Text style={styles.overviewButtonText} numberOfLines={1}>
                        Station 5
                    </Text>
                </TouchableHighlight>
                </View>


                <View style={styles.HowToButtonContainer}>
                {/* Set a button to get to the next page where you can find the quizzes, self customized button with
                    component TouchableOpacity from https://facebook.github.io/react-native/docs/touchableopacity */}
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Station6')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                    {/*use NumberOfLines to say how much lines the text should take*/}
                    <Text style={styles.overviewButtonText} numberOfLines={1}>
                        Station 6
                    </Text>
                </TouchableHighlight>
                </View>


                <View style={styles.HowToButtonContainer}>
                {/* Set a button to get to the next page where you can find the quizzes, self customized button with
                    component TouchableOpacity from https://facebook.github.io/react-native/docs/touchableopacity */}
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Station7')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                    {/*use NumberOfLines to say how much lines the text should take*/}
                    <Text style={styles.overviewButtonText} numberOfLines={1}>
                        Station 7
                    </Text>
                </TouchableHighlight>
                </View>


                <View style={styles.HowToButtonContainer}>
                {/* Set a button to get to the next page where you can find the quizzes, self customized button with
                    component TouchableOpacity from https://facebook.github.io/react-native/docs/touchableopacity */}
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Station8')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                    {/*use NumberOfLines to say how much lines the text should take*/}
                    <Text style={styles.overviewButtonText} numberOfLines={1}>
                        Station 8
                    </Text>
                </TouchableHighlight>
                </View>


                <View style={styles.HowToButtonContainer}>
                {/* Set a button to get to the next page where you can find the quizzes, self customized button with
                    component TouchableOpacity from https://facebook.github.io/react-native/docs/touchableopacity */}
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Station9')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                    {/*use NumberOfLines to say how much lines the text should take*/}
                    <Text style={styles.overviewButtonText} numberOfLines={1}>
                        Station 9
                    </Text>
                </TouchableHighlight>
                </View>

                
                <View style={styles.HowToButtonContainer}>
                {/* Set a button to get to the next page where you can find the quizzes, self customized button with
                    component TouchableOpacity from https://facebook.github.io/react-native/docs/touchableopacity */}
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Station10')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                    {/*use NumberOfLines to say how much lines the text should take*/}
                    <Text style={styles.overviewButtonText} numberOfLines={1}>
                        Station 10
                    </Text>
                </TouchableHighlight>
                </View>


                <View style={styles.HowToButtonContainer}>
                {/* Set a button to get to the next page where you can find the quizzes, self customized button with
                    component TouchableOpacity from https://facebook.github.io/react-native/docs/touchableopacity */}
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Station11')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                    {/*use NumberOfLines to say how much lines the text should take*/}
                    <Text style={styles.overviewButtonText} numberOfLines={1}>
                        Station 11
                    </Text>
                </TouchableHighlight>
                </View>

                
                <View style={styles.HowToButtonContainer}>
                {/* Set a button to get to the next page where you can find the quizzes, self customized button with
                    component TouchableOpacity from https://facebook.github.io/react-native/docs/touchableopacity */}
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Station12')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                    {/*use NumberOfLines to say how much lines the text should take*/}
                    <Text style={styles.overviewButtonText} numberOfLines={1}>
                        Station 12
                    </Text>
                </TouchableHighlight>
                </View>


                <View style={styles.HowToButtonContainer}>
                {/* Set a button to get to the next page where you can find the quizzes, self customized button with
                    component TouchableOpacity from https://facebook.github.io/react-native/docs/touchableopacity */}
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Result')} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                    {/*use NumberOfLines to say how much lines the text should take*/}
                    <Text style={styles.overviewButtonText} numberOfLines={1}>
                        Abgabe
                    </Text>
                </TouchableHighlight>
                </View>
            
            </ScrollView>

            <View style={styles.overviewBackButtonContainer}>
                <View style={styles.HowToButtonContainer}>
                {/* Set a button to get to the next page where you can find the quizzes, self customized button with
                    component TouchableOpacity from https://facebook.github.io/react-native/docs/touchableopacity */}
                <TouchableHighlight onPress={() => this.props.navigation.goBack()} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                    {/*use NumberOfLines to say how much lines the text should take*/}
                    <Text style={styles.overviewButtonText} numberOfLines={1}>
                        Zurück!
                    </Text>
                </TouchableHighlight>
                </View>
            </View>


    
          </View>
        );
      }
}