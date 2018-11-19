import {StyleSheet} from 'react-native'; // we need this for using CSS like design patterns

// to be able to have a proper design on every platform, I downloaded this package from 
// this website: https://www.npmjs.com/package/react-native-responsive-screen
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

/* the styles list for the whole app, this is only done for a good organisation and for reusing code in the app development */
const styles = StyleSheet.create({
    anyWholeScreen: {
      backgroundColor: '#fff',
      width: wp("100%"),
      height: hp("100%"),
      flex: 1,
      flexDirection: 'column'
    },
    homeImageContainer: {
      flex: 3,
    },
    homeImageStyle: {
      width: wp("40%"),
      height: hp("30%"),
      marginTop: hp("7%"),
      marginBottom: hp("10%"),
      marginHorizontal: wp("15%"),
      resizeMode: 'contain',
      alignSelf: 'center'
    },
    homeTitleTextContainer: {
      flex: 3,
    },
    homeTitleTextFormat: {
      fontSize: hp("7%"),
      color: 'rgba(96,100,109, 1)',
      lineHeight: hp("8%"),
      textAlign: 'center',
      alignSelf: 'center',
      fontWeight: 'bold',
      marginHorizontal: wp("7%"),
      marginTop: hp("2%"),
    },
    homeButtonContainer: {
      flex: 1,
      backgroundColor: '#fff',
    },
    anyButtonStyle: {
      backgroundColor: 'rgba(96,100,109, 1)',
      borderRadius: hp("1%"),
      borderColor: 'rgba(96,100,109, 1)',
      borderWidth: hp("1%"),
      marginBottom: hp("5%"),
      alignSelf: 'stretch',
      justifyContent: 'center',
      marginHorizontal: wp("5%")
    },
    anyButtonText: {
      fontSize: hp("3%"),
      fontWeight: 'bold',
      color: 'white',
      lineHeight: hp("4%"),
      alignSelf: 'center',
    },

});

// always export the variables, function and classes for inter document use
export default styles;