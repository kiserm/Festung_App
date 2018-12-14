import React from 'react';
import {Text,View,TouchableHighlight,Platform,WebView,Image} from 'react-native';
import styles from '../constants/Styles'; // for design purpose, import the styles from the self-made Style-Document
import QuestionSheet from '../constants/QuestionSheet';
import { ScrollView } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';// to be able to have a proper design on every platform, I downloaded this package from this website: https://www.npmjs.com/package/react-native-responsive-screen
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AudioFile from '../constants/AudioFile';

/**
 * IDEA:
 * This class carries all own customed elements like the three audio buttons in the info screens.
 * the idea is to write those standard elements once and get them over functions to the screens
 * where they get rendered.
 */
export class OwnElements extends React.Component{

    /**
     * IDEA:
     * write once the title, use it twice on android and ios
     */
    showStationInfoTitle(StationNumber){
        return(
            <View style={styles.stationInfoTitleTextContainer}>
                <Text style={styles.stationInfoTitleTextFormat}>
                    Station {StationNumber} - Info
                </Text>
            </View>  
        );
    }
}

OwnElement = new OwnElements();

export default OwnElement;