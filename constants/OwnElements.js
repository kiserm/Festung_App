import React from 'react';
import {Text,View} from 'react-native';
import styles from '../constants/Styles';

/**
 * IDEA:
 * This component carries some own customed elements like the stationTitle in the info screens.
 * the idea is to write those standard elements once and get them over methods to the screens
 * where they get rendered.
 */
export class OwnElements extends React.Component{

    /**
     * IDEA:
     * write once the title for the info screens, use it twice on android and ios
     * @param {integer from 1 to 10 to indicate the stationNumber} StationNumber 
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

/**
   * IDEA:
   * Make an instance of this class such that we can export this for an easier access 
   * from all screens without creating always an instance to get access to the methods and values
 */
OwnElement = new OwnElements();

// export this instance to reuse the methods from other classes and files
export default OwnElement;