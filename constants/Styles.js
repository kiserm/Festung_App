import {StyleSheet} from 'react-native'; // we need this for using CSS like design patterns

// to be able to have a proper design on every platform, I downloaded this package from 
// this website: https://www.npmjs.com/package/react-native-responsive-screen
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

/* the styles list for the whole app, this is only done for a good organisation and for reusing code in the app development */
const styles = StyleSheet.create({
    // HomeScreenStyles
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
      color: 'white',
      lineHeight: hp("4%"),
      fontWeight: 'normal',
      textAlign: 'center',
      justifyContent:'center'
    },
    // UserFormScreenStyles is useless as far as I know, because I would not ask them their Names...
    /*
    titleView: {
      alignItems: 'center',
      marginHorizontal: 50,
      marginTop: 50,
    },
    titleText: {
      fontSize: 35,
      color: 'rgba(96,100,109, 1)',
      lineHeight: 45,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    questionText: {
      fontSize: 25,
      color: 'rgba(96,100,109, 1)',
      lineHeight: 30,
      textAlign: 'center',
      fontWeight: 'bold',
      marginTop: 50,
    },
    toQuizButton: {
      fontSize: 5,
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
      marginTop: 50,
      marginLeft: 40,
      marginRight: 40,
      marginBottom: 500,
      backgroundColor: 'rgba(96,100,109, 1)',
      borderColor: 'rgba(96,100,109, 1)',
      borderWidth: 2,
      borderRadius: 10,       
    },
    textInput:{
      width: 200, 
      height: 44, 
      padding: 8, 
      borderWidth: 2,
      borderColor: 'rgba(96,100,109, 1)', 
      borderRadius: 10, 
      textAlign: 'center', 
      marginVertical: 10,
    },
    */
   //HowToScreenStyles
   anyTitleTextContainer:{
     flex: 1,
   },
   anyTitleTextFormat: {
    fontSize: hp("7%"),
    color: 'rgba(96,100,109, 1)',
    lineHeight: hp("8%"),
    textAlign: 'left',
    fontWeight: 'bold',
    marginHorizontal: wp("7%"),
    marginTop: hp("2%"),
   },
   HowToTextContainer:{
    flex: 6,
    marginVertical: hp("3%"),
   },
   anyTextFormat:{
    fontSize: hp("3%"),
    color: 'rgba(96,100,109, 1)',
    lineHeight: hp("4%"),
    fontWeight: 'normal',
    textAlign: 'justify',
    marginBottom: hp("4%"),
    marginHorizontal: wp("7%"),
   },
   anyTextFormatAndroid:{
    width: wp("89%"),
    height: hp("60%"),
    alignSelf: 'center',
   },
   HowToButtonContainer:{
     flex: 1
   },
   // navigationBarIcons style
   headerButtonContainer:{
    flex: 1, 
    flexDirection: 'row', // makes that we have two icons horizontally listed
    alignItems: 'center', //makes that the icon is centered
    marginHorizontal: wp("3%"),
   },
   navigationBarIcons:{
    marginHorizontal: wp("2%"),
   },
   //overviewScreen styles
   overviewScrollContainer: {
    flex: 8, 
    marginVertical: hp("5%"),
    alignItems: 'center',
    justifyContent: 'center',
   },
   overviewButtonStyle: {
    backgroundColor: 'rgba(96,100,109, 1)',
    borderRadius: hp("1%"),
    borderColor: 'rgba(96,100,109, 1)',
    borderWidth: hp("1%"),
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginHorizontal: wp("5%"),
    marginVertical: hp("2%"),
  },
  overviewButtonText: {
    fontSize: hp("3%"),
    color: 'white',
    lineHeight: hp("4%"),
    fontWeight: 'normal',
    textAlign: 'center',
    justifyContent:'center'
  },
  overviewBackButtonContainer:{
    flex: 1, 
    marginBottom: hp("5%"),
  }
});

// always export the variables, function and classes for inter document use
export default styles;