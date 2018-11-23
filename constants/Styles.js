import {StyleSheet} from 'react-native'; // we need this for using CSS like design patterns

// to be able to have a proper design on every platform, I downloaded this package from 
// this website: https://www.npmjs.com/package/react-native-responsive-screen
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

/* the styles list for the whole app, this is only done for a good organisation and for reusing code in the app development */
const styles = StyleSheet.create({
    //anyStyles for reusability
    anyWholeScreen: {
      backgroundColor: '#fff',
      width: wp("100%"),
      height: hp("100%"),
      flex: 1,
      flexDirection: 'column'
    },
    anyButtonStyle: {
      backgroundColor: 'rgba(96,100,109, 1)',
      borderRadius: hp("1%"),
      borderColor: 'rgba(96,100,109, 1)',
      borderWidth: hp("1%"),
      marginBottom: hp("3%"),
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
    anyTitleTextFormat:{
      fontSize: hp("7%"),
      color: 'rgba(96,100,109, 1)',
      lineHeight: hp("8%"),
      textAlign: 'left',
      fontWeight: 'bold',
      marginHorizontal: wp("7%"),
      marginTop: hp("2%"),
    },

    // HomeScreenStyles    
    homeImageContainer: {
      flex: 4,
    },
    homeImageStyle: {
      width: wp("60%"),
      height: hp("50%"),
      marginVertical: hp("5%"),
      marginHorizontal: wp("15%"),
      resizeMode: 'contain',
      alignSelf: 'center',
      justifyContent: 'center'
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

   //HowToScreenStyles
   howToTitleTextContainer:{
     flex: 1,
     marginTop: hp("3%"),
     justifyContent: 'center'
   },
   howToTextContainer:{
    flex: 6,
    marginVertical: hp("3%"),
   },
   howToButtonContainer:{
    flex: 1
  },
  howToTitleTextFormat: {
    fontSize: hp("7%"),
    color: 'rgba(96,100,109, 1)',
    lineHeight: hp("8%"),
    textAlign: 'left',
    fontWeight: 'bold',
    marginHorizontal: wp("7%"),
    marginTop: hp("2%"),
   },
   howToTextFormat:{
    fontSize: hp("3%"),
    color: 'rgba(96,100,109, 1)',
    lineHeight: hp("4%"),
    fontWeight: 'normal',
    textAlign: 'justify',
    marginBottom: hp("4%"),
    marginHorizontal: wp("7%"),
   },
   howToTextFormatAndroid:{
    width: wp("89%"),
    height: hp("60%"),
    alignSelf: 'center',
   },
   
   // navigationBarIcons style
   headerButtonContainer:{
    flex: 1, 
    flexDirection: 'row', // makes that we have two icons horizontally listed
    alignItems: 'center', //makes that the icon is centered vertically -> cross axis
    marginHorizontal: wp("3%"),
   },
   navigationBarIcons:{
    marginHorizontal: wp("2%"),
   },

   //overviewScreen styles
   overviewTopContainer: {
    flex:4,
    justifyContent: 'center',
    marginTop: hp("3%")
  },
   overviewMiddleContainer: {
    flex: 16, 
    paddingVertical: hp("5%"),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',  
   },
   overviewBottomContainer:{
    flex: 3, 
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  overviewRowButtonContainer: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  overviewTitleTextFormat:{
    fontSize: hp("7%"),
    color: 'rgba(96,100,109, 1)',
    lineHeight: hp("8%"),
    textAlign: 'left',
    fontWeight: 'bold',
    marginHorizontal: wp("7%"),
    marginTop: hp("2%"),
  },
  overviewButtonStyle: {
    backgroundColor: 'rgba(96,100,109, 1)',
    borderRadius: hp("1%"),
    borderColor: 'rgba(96,100,109, 1)',
    borderWidth: hp("1%"),
    justifyContent: 'center',
    paddingHorizontal: wp("2%"),
    marginVertical: hp("1%"),
    marginHorizontal: wp("2%"),
    width: wp("40%")
  },
  overviewButtonText: {
    fontSize: hp("3%"),
    color: 'white',
    lineHeight: hp("4%"),
    fontWeight: 'normal',
    textAlign: 'center',
    justifyContent:'center'
  },

  // HintScreen Styles
  hintTopContainer:{
    flex: 2.5,
    marginTop: hp("3%"),
    flexDirection: 'row',
  },
  hintTitleTextContainer: {
    flex: 5,
    alignItems: 'flex-start'
  },
  hintMiddleContainer:{
    flex: 7,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  hintSubtitleContainer:{
    flex:1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  hintTextContainer:{
    flex:8,
    alignItems: 'flex-start',
    justifyContent:'flex-start'
  },
  hintSubtitleFormat:{
    fontSize: hp("4%"),
    color: 'rgba(96,100,109, 1)',
    lineHeight: hp("4%"),
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: hp("1%"),
    marginHorizontal: wp("7%"),
  },
  hintImageContainer:{
    flex: 1,
    alignItems: 'flex-end'
  },
  hintBottomContainer: {
    flex: 1,
    alignItems: 'center'
  },
  hintTitleTextFormat: {
    fontSize: hp("7%"),
    color: 'rgba(96,100,109, 1)',
    lineHeight: hp("8%"),
    textAlign: 'left',
    fontWeight: 'bold',
    marginHorizontal: wp("7%"),
    marginTop: hp("2%"),
  },
  hintTextFormat:{
    fontSize: hp("3%"),
    color: 'rgba(96,100,109, 1)',
    lineHeight: hp("4%"),
    fontWeight: 'normal',
    textAlign: 'center',
    marginBottom: hp("4%"),
    marginHorizontal: wp("7%"),
  },
  hintImageStyle:{
    width: wp("30%"),
    height: hp("20%"),
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    justifyContent: 'center'
  },

  // MapScreen styles
  mapTitleTextContainer:{
    flex:2.3,
    marginTop: hp("3%"),
  },
  mapMiddleContainer: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  mapBottomContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapTitleTextFormat:{
    fontSize: hp("7%"),
    color: 'rgba(96,100,109, 1)',
    lineHeight: hp("8%"),
    textAlign: 'left',
    fontWeight: 'bold',
    marginHorizontal: wp("7%"),
    marginTop: hp("2%"),
  },
  mapImageStyle:{
    width: wp("100%"),
    height: hp("70%"),
    resizeMode: 'contain',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  mapWebViewStyle:{
    alignSelf: 'center',
    justifyContent: 'center',
  },
  mapButtonStyle:{
    backgroundColor: 'rgba(96,100,109, 1)',
    borderRadius: hp("1%"),
    borderColor: 'rgba(96,100,109, 1)',
    borderWidth: hp("1%"),
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginHorizontal: wp("5%"),
    marginVertical: hp("1%"),
  },

  // resultScreen styles
  resultTitleTextContainer:{
    flex:1,
    alignItems: 'center',
    marginTop: hp("3%"),
  },
  resultTextContainer:{
    flex:3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  resultBottomContainer:{
    flex:1,
    alignItems: 'center',
  },
  resultRowButtonContainer:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  //certificateScreen styles
  certificateTitleTextContainer:{
    flex:1,
    alignItems: 'center',
    marginTop: hp("3%"),
  },

});

// always export the variables, function and classes for inter document use
export default styles;