import React, { Component } from 'react';
import { Platform,Animated, Text, View, Image,NativeModules, TouchableHighlight,InteractionManager } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import IconEntypo from 'react-native-vector-icons/Entypo';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document in /constants/Styles.js
import { ScrollView, WebView } from 'react-native-gesture-handler';
import { Easing } from 'react-native-reanimated';

// workaround to have the arrows stopping in front of the header
const {StatusBarManager} = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT - hp("0.7%");
const NAVIGATIONHEADER_HEIGHT = hp("7%"); // from ../navigation/StackNavigator/headerstyle.height

export default class TutorialScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { screenView : 1 };
      };

    componentWillMount(){
        // arrows from bottom to navigation bar
        this.animatedMapArrow = new Animated.Value(0)
        this.animatedHintArrow = new Animated.Value(0),
        this.animatedOverviewArrow = new Animated.Value(0), 

        // arrows fading out
        this.animatedMapArrowOpacity = new Animated.Value(0),
        this.animatedHintArrowOpacity = new Animated.Value(0),
        this.animatedOverviewArrowOpacity = new Animated.Value(0)

        // info text opacity controller
        this.animatedTutorialInfoTextOpacity = new Animated.Value(1)

    };

    componentDidMount(){
        setTimeout(()=>{
            // first show map arrow and slide it upwards
            Animated.sequence([
                Animated.timing(
                    this.animatedTutorialInfoTextOpacity,
                    {
                        toValue:   0,
                        duration: 1000,       
                    }
                ),
                Animated.timing(
                    this.animatedMapArrowOpacity,
                    {
                        toValue:   1,
                        duration: 1000,       
                    }
                ),
                Animated.spring(
                    this.animatedMapArrow,
                    {
                        toValue:   -hp('89.1%') + STATUSBAR_HEIGHT + NAVIGATIONHEADER_HEIGHT,
                        friction: 5.5,
                        tension: 10,
                    }
                )
            ]).start();

            // LEVEL 1: go to mapview for three seconds, then go back and put hint arrow up
            InteractionManager.runAfterInteractions(() => {
                this.setState({screenView: 2});
                setTimeout(()=>{
                    this.setState({screenView:1});
                    // if you are back, fade the map arrow and show hint arrow and then go up
                    Animated.sequence([
                        Animated.timing(
                            this.animatedMapArrowOpacity,
                            {
                                toValue:0,
                                duration: 1000,
                            }
                        ),
                        Animated.timing(
                            this.animatedHintArrowOpacity,
                            {
                                toValue:   1,
                                duration: 1000,       
                            }
                        ),
                        Animated.spring(
                            this.animatedHintArrow,
                            {
                                toValue: -hp('29.3%') + STATUSBAR_HEIGHT + NAVIGATIONHEADER_HEIGHT,
                                friction: 5.5,
                                tension: 10,                            }
                        ),
                    ]).start();

                    // LEVEL 2: go to hint screen and put third arrow up
                    InteractionManager.runAfterInteractions(()=>{
                        //go to the hint screen
                        this.setState({screenView: 3});
                        setTimeout(()=>{
                            this.setState({screenView:1});
                            // if you are back, fade the arrow and show third arrow and then go up
                            Animated.sequence([
                                Animated.timing(
                                    this.animatedHintArrowOpacity,
                                    {
                                        toValue:0,
                                        duration: 1000,
                                    }
                                ),
                                Animated.timing(
                                    this.animatedOverviewArrowOpacity,
                                    {
                                        toValue:   1,
                                        duration: 1000,       
                                    }
                                ),
                                Animated.spring(
                                    this.animatedOverviewArrow,
                                    {
                                        toValue: -hp('89.1%') + STATUSBAR_HEIGHT + NAVIGATIONHEADER_HEIGHT,
                                        friction: 5.5,
                                        tension: 10,                                    }
                                ),
                            ]).start();

                            // LEVEL 3: go to overview screen and fade third arrow
                            InteractionManager.runAfterInteractions(()=>{
                                // go to overview screen
                                this.setState({screenView: 4});
                                setTimeout(()=>{
                                    this.setState({screenView:1});
                                    // if you are back, fade the last arrow and TODO show finish button
                                    Animated.timing(
                                        this.animatedOverviewArrowOpacity,
                                        {
                                            toValue:0,
                                            duration: 1000,
                                        }
                                    ).start();

                                    // LEVEL 4: go to the station 1 screen to start the quiz
                                    InteractionManager.runAfterInteractions(()=>{
                                        this.props.navigation.navigate('Station1');
                                    });

                                },5000);
                            });

                        },5000);
                    });

                },5000);                
            });

        },5000);
    };

    render() {
        const animatedMapArrowStyle = {transform: [{ translateY: this.animatedMapArrow }]};
        const animatedHintArrowStyle = {transform: [{ translateY: this.animatedHintArrow }]};
        const animatedOverviewArrowStyle = {transform: [{ translateY: this.animatedOverviewArrow }]};
        const animatedMapArrowOpacityStyle = {opacity: this.animatedMapArrowOpacity};
        const animatedHintArrowOpacityStyle = {opacity: this.animatedHintArrowOpacity};
        const animatedOverviewArrowOpacityStyle = {opacity: this.animatedOverviewArrowOpacity};
        const animatedTutorialInfoTextOpacityStyle = {opacity: this.animatedTutorialInfoTextOpacity};

        // show tutorial screen
        if(this.state.screenView === 1){
            return (
                <View style={styles.anyWholeScreen}>
                    
                    <View style={styles.tutorialTitleContainer}>
                        <Text style={styles.tutorialTitleTextFormat}>
                            Tutorial     
                        </Text>
                    </View>
    
                    <View style={styles.tutorialBackground}>
    
                        <View style={styles.tutorialBottom1Container}>
                            <Animated.View style={[styles.tutorialArrowOverviewContainer, animatedOverviewArrowStyle, animatedOverviewArrowOpacityStyle]}>
                                <IconEntypo name='arrow-long-up' size={hp('10%')} color='#C92732' style={styles.tutorialOverviewArrowSytle}/>
                            </Animated.View>
                        </View>
    
                        <View style={styles.tutorialBottom2Container}>
                            <Animated.View style={[styles.tutorialArrowHintContainer, animatedHintArrowStyle, animatedHintArrowOpacityStyle]}>
                                <IconEntypo name='arrow-long-up' size={hp('10%')} color='#C92732' style={styles.tutorialHintArrowStyle}/>
                            </Animated.View>
                            <Animated.Text style={[styles.tutorialInfoTextFormat, animatedTutorialInfoTextOpacityStyle]}>
                                Dieses Tutorial zeigt Ihnen eine kurze Übersicht über die Funktionen.
                            </Animated.Text>
                        </View>
    
                        <View style={styles.tutorialBottom3Container}>
                            <Animated.View style={[styles.tutorialArrowMapContainer, animatedMapArrowStyle, animatedMapArrowOpacityStyle]}>
                                <IconEntypo name='arrow-long-up' size={hp('10%')} color='#C92732' style={styles.tutorialMapArrowSytle}/>
                            </Animated.View>
                        </View>
    
                    </View>
            </View>
            );
        }
        // show map screen
        else if (this.state.screenView===2){

            // differ between iOS and Android since on Android the scrollview is not implemented and we need to make a workaround on the webview
            if(Platform.OS === 'ios') {
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
                    <ScrollView scrollEnabled={true}
                                centerContent={true} 
                                maximumZoomScale={4}
                                minimumZoomScale={0.5} 
                                automaticallyAdjustContentInsets={true}
                                contentContainerStyle={styles.mapScrollViewStyle}>
                        <Image source={require('../assets/images/planFestung.png')} style={styles.mapImageStyle}/>
                    </ScrollView>
                    </View>
    
                    {/*Set the navigation to go back since no header in Map*/}    
                    <View style={styles.mapBottomContainer}>
                    <TouchableHighlight onPress={() => this.props.navigation.goBack()} underlayColor="rgba(96,100,109, 1)" style={styles.mapButtonStyle}>
                        <Text style={styles.anyButtonText} numberOfLines={1}>
                            Zurück
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
                    <View style={styles.mapTitleTextContainer}>
                    <Text style={styles.mapTitleTextFormat} numberOfLines={2}>
                        Plan der{"\n"}Festung
                    </Text>
                    </View>     
    
                    {/*Set the map image with zoom capabilities in here*/}                    
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
                        <Text style={styles.anyButtonText} numberOfLines={1}>
                            Zurück
                        </Text>
                    </TouchableHighlight>
                    </View>
            
                </View>
                );
            }
        }
        // show hint screen
        else if(this.state.screenView===3){
            return (      
                <View style={styles.anyWholeScreen}>                  
                    <View style={styles.hintTopContainer}>
                        <View style={styles.hintTitleTextContainer}>
                            <Text style={styles.hintTitleTextFormat} numberOfLines={2}>
                                Schlau wie {"\n"}der Fuchs
                            </Text>
                        </View>             
                        <View style={styles.hintImageContainer}>
                            <Image source={require('../assets/images/foxGivesHint.png')} style={styles.hintImageStyle}/>
                        </View>
                    </View>
           
                    <View style={styles.hintTextContainer}>
                        <Text style={styles.hintTextFormat}>
                            Hier würde ein Tipp zu der Aufgabe stehen!
                        </Text>
                    </View>
                </View>
              );     

        }
        // show overview screen
        else{
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
                            <TouchableHighlight onPress={()=>{}} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText} numberOfLines={1}>
                                    Station 1
                                </Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => {}} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText}>
                                    zur Frage
                                </Text>
                            </TouchableHighlight>                          
                        </View>
    
                        <View style={styles.overviewRowButtonContainer}>
                            <TouchableHighlight onPress={()=>{}} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText} numberOfLines={1}>
                                    Station 2
                                </Text>
                            </TouchableHighlight>
                            
                            <TouchableHighlight onPress={() => {}} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText}>
                                    zur Frage
                                </Text>
                            </TouchableHighlight>
                        </View>
    
                        <View style={styles.overviewRowButtonContainer}>
                            <TouchableHighlight onPress={()=>{}} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText} numberOfLines={1}>
                                    Station 3
                                </Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => {}} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText}>
                                    zur Frage
                                </Text>
                            </TouchableHighlight>
                        </View>
    
                        <View style={styles.overviewRowButtonContainer}>
                            <TouchableHighlight onPress={()=>{}} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText} numberOfLines={1}>
                                    Station 4
                                </Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => {}} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText}>
                                    zur Frage
                                </Text>
                            </TouchableHighlight>
                        </View>
    
                        <View style={styles.overviewRowButtonContainer}>
                            <TouchableHighlight onPress={()=>{}} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText} numberOfLines={1}>
                                    Station 5
                                </Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => {}} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText}>
                                    zur Frage
                                </Text>
                            </TouchableHighlight>
                        </View>
    
                        <View style={styles.overviewRowButtonContainer}>
                            <TouchableHighlight onPress={()=>{}} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText} numberOfLines={1}>
                                    Station 6
                                </Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => {}} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText}>
                                    zur Frage
                                </Text>
                            </TouchableHighlight>
                        </View>
    
                        <View style={styles.overviewRowButtonContainer}>
                            <TouchableHighlight onPress={()=>{}} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText} numberOfLines={1}>
                                    Station 7
                                </Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => {}} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText}>
                                    zur Frage
                                </Text>
                            </TouchableHighlight>
                        </View>
    
                        <View style={styles.overviewRowButtonContainer}>
                            <TouchableHighlight onPress={()=>{}} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText} numberOfLines={1}>
                                    Station 8
                                </Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => {}} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText}>
                                    zur Frage
                                </Text>
                            </TouchableHighlight>
                        </View>
    
                        <View style={styles.overviewRowButtonContainer}>
                            <TouchableHighlight onPress={()=>{}} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText} numberOfLines={1}>
                                    Station 9
                                </Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => {}} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText}>
                                    zur Frage
                                </Text>
                            </TouchableHighlight>
                        </View>
                        
                        <View style={styles.overviewRowButtonContainer}>
                            <TouchableHighlight onPress={()=>{}} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                                <Text style={styles.overviewButtonText} numberOfLines={1}>
                                    Station 10
                                </Text>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => {}} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
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
                        <TouchableHighlight onPress={()=>{}} underlayColor="rgba(96,100,109, 1)" style={styles.overviewButtonStyle}>
                            <Text style={styles.overviewButtonText} numberOfLines={1}>
                                Zurück
                            </Text>
                        </TouchableHighlight> 
                        <TouchableHighlight onPress={() =>{}} underlayColor="rgb(211, 211, 211)" style={styles.overviewButtonStyleNotSubmitable}>
                            <Text style={styles.overviewButtonText} numberOfLines={1}>
                                Abgabe
                            </Text>
                        </TouchableHighlight>                      
    
                    </View>
                </View>
    
                </View>
            );
        }
    };
};

