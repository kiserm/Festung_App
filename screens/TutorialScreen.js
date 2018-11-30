import React, { Component } from 'react';
import { Animated, Text, View, NativeModules, Platform } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import IconEntypo from 'react-native-vector-icons/Entypo';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document

// workaround to have the arrows stopping in front of the header
const {StatusBarManager} = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT - hp("0.7%");
const NAVIGATIONHEADER_HEIGHT = hp("7%"); // from ../navigation/StackNavigator/headerstyle.height

export default class TutorialScreen extends Component {

    componentWillMount(){
        // arrows from bottom to navigation bar
        this.animatedMapArrow = new Animated.Value(0)
        this.animatedHintArrow = new Animated.Value(0),
        this.animatedOverviewArrow = new Animated.Value(0), 

        // arrows fading out
        this.animatedMapArrowOpacity = new Animated.Value(1),
        this.animatedHintArrowOpacity = new Animated.Value(1),
        this.animatedOverviewArrowOpacity = new Animated.Value(1)

    };

    componentDidMount(){
        Animated.sequence([
            Animated.timing(
                this.animatedMapArrow,
                {
                    toValue:   -hp('89.1%') + STATUSBAR_HEIGHT + NAVIGATIONHEADER_HEIGHT,
                    duration: 1000,       
                }
            ),
            Animated.timing(
                this.animatedMapArrowOpacity,
                {
                    toValue:0,
                    duration: 1000,
                }
            ),
            Animated.timing(
                this.animatedHintArrow,
                {
                    toValue: -hp('89.1%') + STATUSBAR_HEIGHT + NAVIGATIONHEADER_HEIGHT,
                    duration: 1000,       
                }
            ),
            Animated.timing(
                this.animatedHintArrowOpacity,
                {
                    toValue:0,
                    duration: 1000,
                }
            ),
            Animated.timing(
                this.animatedOverviewArrow,
                {
                    toValue: -hp('89.1%') + STATUSBAR_HEIGHT + NAVIGATIONHEADER_HEIGHT,
                    duration: 1000,       
                }
            ),
            Animated.timing(
                this.animatedOverviewArrowOpacity,
                {
                    toValue:0,
                    duration: 1000,
                }
            ),            
        ]).start();
    }


    render() {
        const animatedMapArrowStyle = {transform: [{ translateY: this.animatedMapArrow }]};
        const animatedHintArrowStyle = {transform: [{ translateY: this.animatedHintArrow }]};
        const animatedOverviewArrowStyle = {transform: [{ translateY: this.animatedOverviewArrow }]};
        const animatedMapArrowOpacityStyle = {opacity: this.animatedMapArrowOpacity};
        const animatedHintArrowOpacityStyle = {opacity: this.animatedHintArrowOpacity};
        const animatedOverviewArrowOpacityStyle = {opacity: this.animatedOverviewArrowOpacity};


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
                    </View>

                    <View style={styles.tutorialBottom3Container}>
                        <Animated.View style={[styles.tutorialArrowMapContainer, animatedMapArrowStyle, animatedMapArrowOpacityStyle]}>
                            <IconEntypo name='arrow-long-up' size={hp('10%')} color='#C92732' style={styles.tutorialMapArrowSytle}/>
                        </Animated.View>
                    </View>

                </View>
        </View>
        );
    };
};

