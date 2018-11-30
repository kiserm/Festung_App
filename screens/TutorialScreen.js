import React, { Component } from 'react';
import { Animated, TouchableWithoutFeedback, Text, View, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import IconEntypo from 'react-native-vector-icons/Entypo';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document


export default class TutorialScreen extends Component {

    componentWillMount(){
        this.animatedMapArrow = new Animated.Value(0)
        this.animatedHintArrow = new Animated.Value(0),
        this.animatedOverviewArrow = new Animated.Value(0)
    }

    componentDidMount(){
        Animated.sequence([
            Animated.timing(
                this.animatedMapArrow,
                {
                    toValue: -hp('79.6%'),
                    duration: 1000        
                }
            ),
            Animated.timing(
                this.animatedHintArrow,
                {
                    toValue: -hp('79.6%'),
                    duration: 1000        
                }
            ),
            Animated.timing(
                this.animatedOverviewArrow,
                {
                    toValue: -hp('79.6%'),
                    duration: 1000        
                }
            )
        ]).start();
    }


    render() {
        const animatedMapArrowStyle = {transform: [{ translateY: this.animatedMapArrow }]};
        const animatedHintArrowStyle = {transform: [{ translateY: this.animatedHintArrow }]};
        const animatedOverviewArrowStyle = {transform: [{ translateY: this.animatedOverviewArrow }]};
        

        return (
            <View style={styles.anyWholeScreen}>
                
                <View style={styles.tutorialTitleContainer}>
                    <Text style={styles.tutorialTitleTextFormat}>
                        Tutorial     
                    </Text>
                </View>

                <View style={styles.tutorialBackground}>

                    <View style={styles.tutorialBottom1Container}>
                        <Animated.View style={[styles.tutorialArrowOverviewContainer, animatedOverviewArrowStyle]}>
                            <IconEntypo name='arrow-long-up' size={hp('10%')} color='#C92732' style={styles.tutorialOverviewArrowSytle}/>
                        </Animated.View>
                    </View>

                    <View style={styles.tutorialBottom2Container}>
                        <Animated.View style={[styles.tutorialArrowHintContainer, animatedHintArrowStyle]}>
                            <IconEntypo name='arrow-long-up' size={hp('10%')} color='#C92732' style={styles.tutorialHintArrowStyle}/>
                        </Animated.View>
                    </View>

                    <View style={styles.tutorialBottom3Container}>
                        <Animated.View style={[styles.tutorialArrowMapContainer, animatedMapArrowStyle]}>
                            <IconEntypo name='arrow-long-up' size={hp('10%')} color='#C92732' style={styles.tutorialMapArrowSytle}/>
                        </Animated.View>
                    </View>

                </View>
        </View>
        );
    };
};

