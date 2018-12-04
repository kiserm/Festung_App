import {StyleSheet, Platform, NativeModules} from 'react-native'; // we need this for using CSS like design patterns

// to be able to have a proper design on every platform, I downloaded this package from 
// this website: https://www.npmjs.com/package/react-native-responsive-screen
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



/**
 * IDEA:
 * the styles list for the whole app, this is only done for a good organisation and for reusing code in the app development
 */
const styles = StyleSheet.create({
  
    //anyStyles for reusability
    // -----------------------------------------------------------------------------------------------------------------
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
      marginHorizontal: wp("5%"),
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
      textAlign: 'center',
      fontWeight: 'bold',
      marginHorizontal: wp("7%"),
      marginTop: hp("3%"),
    },

    // HomeScreenStyles    
    // -----------------------------------------------------------------------------------------------------------------
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
    homeButtonStyle:{
      backgroundColor: 'rgba(96,100,109, 1)',
      borderRadius: hp("1%"),
      borderColor: 'rgba(96,100,109, 1)',
      borderWidth: hp("1%"),
      marginBottom: hp("3%"),
      alignSelf: 'stretch',
      justifyContent: 'center',
      marginHorizontal: wp("5%"),
    },
    homeButtonText:{
      fontSize: hp("3%"),
      color: 'white',
      lineHeight: hp("4%"),
      fontWeight: 'normal',
      textAlign: 'center',
      justifyContent:'center',
    },

   //HowToScreenStyles
   // -----------------------------------------------------------------------------------------------------------------
   howToTitleTextContainer:{
     flex: 1,
     marginTop: hp("6%"),
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
   howToButtonStyle:{
    backgroundColor: 'rgba(96,100,109, 1)',
    borderRadius: hp("1%"),
    borderColor: 'rgba(96,100,109, 1)',
    borderWidth: hp("1%"),
    marginBottom: hp("3%"),
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginHorizontal: wp("5%"),
   },
   howToButtonText:{
    fontSize: hp("3%"),
    color: 'white',
    lineHeight: hp("4%"),
    fontWeight: 'normal',
    textAlign: 'center',
    justifyContent:'center'
   },
   
   // navigationBarIcons style
   // -----------------------------------------------------------------------------------------------------------------
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
   // -----------------------------------------------------------------------------------------------------------------
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
  overviewButtonStyleDone:{
    backgroundColor: 'white',
    borderRadius: hp("1%"),
    borderColor: 'rgba(96,100,109, 1)',
    borderWidth: hp("1%"),
    justifyContent: 'center',
    paddingHorizontal: wp("2%"),
    marginVertical: hp("1%"),
    marginHorizontal: wp("2%"),
    width: wp("40%")
  },
  overviewButtonStyleNotSubmitable:{
    backgroundColor: 'rgb(211, 211, 211)',
    borderColor: 'rgb(211, 211, 211)',
    borderRadius: hp("1%"),
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
  // -----------------------------------------------------------------------------------------------------------------
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
    flex: 1,
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
    textAlign: 'left',
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
  // -----------------------------------------------------------------------------------------------------------------
  mapTitleTextContainer:{
    flex:2.3,
    marginTop: hp("3%"),
  },
  mapMiddleContainer: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: wp("100%"),
    backgroundColor: '#fff'
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
  mapScrollViewStyle:{
    flex:1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  mapWebViewStyle:{
    alignSelf: 'center',
    justifyContent: 'center',
    width: wp("100%"),
    height: hp("70%"),
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
  // -----------------------------------------------------------------------------------------------------------------
  resultTitleTextContainer:{
    flex:2,
    alignItems: 'center',
    marginTop: hp("6%"),
  },
  resultMiddleTextContainer:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  resultBottomContainer:{
    flex:0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultRowButtonContainer:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp("2%"),
    marginBottom: hp("1%"),
  },
  resultMiddleContainer:{
    flex:8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  resultMiddleTitleContainer:{
    flex:0.6,
  },
  resultIconContainer:{
    flex:4,
    alignItems: 'center',
  },
  resultMiddleText:{
    fontSize: hp("3%"),
    color: 'rgba(96,100,109, 1)',
    lineHeight: hp("4%"),
    fontWeight: 'normal',
    textAlign: 'center',
    marginBottom: hp("2%"),
    marginHorizontal: wp("7%"),
  },
  resultMiddleTextBold:{
    fontSize: hp("3%"),
    color: 'rgba(96,100,109, 1)',
    lineHeight: hp("4%"),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: hp("2%"),
    marginHorizontal: wp("7%"),
  },
  resultSubtitleTextFormat:{
    fontSize: hp("4%"),
    color: 'rgba(96,100,109, 1)',
    lineHeight: hp("4%"),
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: hp("1%"),
    marginHorizontal: wp("7%"),
  },
  resultIconStyle:{
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'flex-start',
  },
  resultButtonStyle:{
    backgroundColor: 'rgba(96,100,109, 1)',
    borderRadius: hp("1%"),
    borderColor: 'rgba(96,100,109, 1)',
    borderWidth: hp("1%"),
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginHorizontal: wp("7%"),
    flex:1,
    alignItems:'center',
  },
  //certificateScreen styles
  // -----------------------------------------------------------------------------------------------------------------
  certificateTitleTextContainer:{
    flex:2,
    marginTop: hp("5%"),
  },
  certificateBottomContainer:{
    flex:6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  certificateImageContainer:{
    flex:2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  certificateBottomTextContainer:{
    flex: 1,
    alignItems: 'center',
    marginBottom: hp("3%"),
    justifyContent: 'center',
  },
  certificateBottomTextFormat:{
    fontSize: hp("4%"),
    color: 'rgba(96,100,109, 1)',
    lineHeight: hp("5%"),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: hp("2%"),
    marginHorizontal: wp("7%"),
  },
  certificateTitleTextFormat:{
    fontSize: hp("7%"),
    color: 'rgba(96,100,109, 1)',
    lineHeight: hp("8%"),
    textAlign: 'center',
    fontWeight: 'bold',
    marginHorizontal: wp("7%"),
    marginTop: hp("3%"),
  },

  // station 12 style
  // -----------------------------------------------------------------------------------------------------------------
  station12ButtonStyleDone:{
    backgroundColor: 'rgba(96,100,109, 1)',
    borderRadius: hp("1%"),
    borderColor: 'rgba(96,100,109, 1)',
    borderWidth: hp("1%"),
    marginBottom: hp("3%"),
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginHorizontal: wp("5%"),
  },
  station12ButtonStyleNotSubmitable:{
    backgroundColor: 'rgb(211, 211, 211)',
    borderColor: 'rgb(211, 211, 211)',
    borderRadius: hp("1%"),
    borderWidth: hp("1%"),
    marginBottom: hp("3%"),
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginHorizontal: wp("5%")
  },
  station12ButtonText: {
    fontSize: hp("3%"),
    color: 'white',
    lineHeight: hp("4%"),
    fontWeight: 'normal',
    textAlign: 'center',
    justifyContent:'center'
  },
  station12SubmitButtonContainer:{
    alignItems: 'center',
    justifyContent: 'center',
  },

  // stations style
  // -----------------------------------------------------------------------------------------------------------------
  chosenButtonStyle:{
    backgroundColor: 'white',
    borderRadius: hp("1%"),
    borderColor: 'rgba(96,100,109, 1)',
    borderWidth: hp("1%"),
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginHorizontal: wp("2%"),
    flex: 1,
    alignItems:'center',
  },
  unchosenButtonStyle:{
    backgroundColor: 'rgba(96,100,109, 1)',
    borderRadius: hp("1%"),
    borderColor: 'rgba(96,100,109, 1)',
    borderWidth: hp("1%"),
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginHorizontal: wp("2%"),
    flex:1,
    alignItems:'center',
  },
  chosenButtonText:{
    fontSize: hp("3%"),
    color: 'rgba(96,100,109, 1)',
    lineHeight: hp("4%"),
    fontWeight: 'normal',
    textAlign: 'center',
    justifyContent:'center'
  },
  stationTitleTextContainer:{
    flex: 2,
  },
  stationTextContainer:{
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stationAnswerContainer:{
    flex: 3
  },
  stationAnswerVerticalContainer:{
    flex:1,
    flexDirection: 'row',
    marginHorizontal: wp("2%"),
    marginBottom: hp("1%"),
  },
  stationRowContainer:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp("2%"),
    marginBottom: hp("1%"),
  },
  stationRowMiddleContainer:{
    flex:0.7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp("2%"),
    marginBottom: hp("1%"),
  },
  stationBottomNextContainer:{
    flex:0.8,
    flexDirection: 'row',
    marginHorizontal: wp("2%"),
    marginBottom: hp("1%"),
  },
  station10NotSubmittableButtonStyle:{
    backgroundColor: 'rgb(211, 211, 211)',
    borderRadius: hp("1%"),
    borderColor: 'rgb(211, 211, 211)',
    borderWidth: hp("1%"),
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginHorizontal: wp("2%"),
    flex:1,
    alignItems:'center'
  },
  stationTextFormat:{
    fontSize: hp("3%"),
    color: 'rgba(96,100,109, 1)',
    lineHeight: hp("4%"),
    textAlign: 'left',
    fontWeight: 'normal',
    marginHorizontal: wp("7%"),
    marginTop: hp("3%"),
  },

  // TutorialScreenStyles    
  // ----------------------------------------------------------------------------------------------------------------- 
  tutorialBackground:{
    flex: 8,
    flexDirection:'row',
  },
  tutorialTitleTextFormat:{
    fontSize: hp("7%"),
    color: 'rgba(96,100,109, 1)',
    lineHeight: hp("8%"),
    textAlign: 'left',
    fontWeight: 'bold',
    marginHorizontal: wp("7%"),
    marginTop: hp("5%"),
  },
  tutorialTitleTextContainer:{
    flex:2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  tutorialSubtitleContainer:{
    flex:1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  tutorialTextContainer:{
    flex:4,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },  
  tutorialBottomContainer:{
    flex:0.7,
    flexDirection: 'row',
    marginHorizontal: wp("2%"),
    marginBottom: hp("1%"),
  },
  tutorialRowContainer:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp("2%"),
    marginBottom: hp("1%"),
  },
  tutorialArrowOverviewContainer:{
    flex:1,
    backgroundColor: 'rgba(1,1,1,0)',
    alignSelf: 'stretch', // horizontally -> need this for the absolute position in the child element
  },
  tutorialArrowHintContainer:{
    flex:1,
    backgroundColor: 'rgba(1,1,1,0)',
    alignSelf: 'stretch', // horizontally -> need this for the absolute position in the child element
  },
  tutorialArrowMapContainer:{
    flex:1,
    backgroundColor: 'rgba(1,1,1,0)',
    alignSelf: 'stretch', // horizontally -> need this for the absolute position in the child element
  },
  tutorialSubtitleTextFormat:{
    fontSize: hp("4%"),
    color: 'rgba(96,100,109, 1)',
    lineHeight: hp("4%"),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: hp("1%"),
    marginHorizontal: wp("7%"),
  },
  tutorialHintArrowStyle:{
    flex: 1,
    position: "absolute", 
    top: DISTANCETOTHETOP, 
    right: Platform.OS === 'ios' ? wp('16%') : wp('15%'),
    zIndex: 100,
  },
  tutorialHintAloneArrowStyle:{
    flex: 1,
    position: "absolute", 
    top: DISTANCETOTHETOP, 
    right: Platform.OS === 'ios' ? wp('11.5%') : wp('10.5%'),
    zIndex: 100,
  },
  tutorialMapArrowStyle:{
    flex: 1,
    position: "absolute", 
    top: DISTANCETOTHETOP, 
    right: Platform.OS === 'ios' ? wp('3.5%') : wp('3%'),
    zIndex: 100,    
  },
  tutorialOverviewArrowStyle:{
    flex: 1,
    position: "absolute", 
    top: DISTANCETOTHETOP,
    left: wp("4%"),
    zIndex: 100,
  },
  tutorialInfoTextFormat:{
    fontSize: hp("4%"),
    color: 'rgba(96,100,109, 1)',
    lineHeight: hp("5%"),
    fontWeight: 'normal',
    textAlign: 'center',
    marginBottom: hp("10%"),
    marginHorizontal: wp("7%"),
    alignSelf: 'center',
    justifyContent: 'center'
  },
  tutorialMapTitleTextContainer:{
    flex:3,
    marginTop: hp("2%"),
  },
  tutorialRowMiddleContainer:{
    flex:0.8,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginHorizontal: wp("0.1%"),
    marginBottom: hp("1%"),
  },
  tutorialButtonStyle:{
    backgroundColor: 'rgba(96,100,109, 1)',
    borderRadius: hp("1%"),
    borderColor: 'rgba(96,100,109, 1)',
    borderWidth: hp("1%"),
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginHorizontal: wp("2%"),
    flex:1,
    alignItems:'center',
  },
  tutorialButtonText:{
    fontSize: hp("3%"),
    color: 'white',
    lineHeight: hp("4%"),
    fontWeight: 'normal',
    textAlign: 'center',
    justifyContent:'center',
    flexWrap: 'wrap',
  },
  tutorialRowBottomContainer:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp("2%"),
    marginBottom: hp("1%"),
  },
  tutorialTextFormat:{
    fontSize: hp("3%"),
    color: 'rgba(96,100,109, 1)',
    lineHeight: hp("4%"),
    textAlign: 'left',
    fontWeight: 'normal',
    marginHorizontal: wp("7%"),
    marginTop: hp("3%"),
  },
  tutorialButtonStyle:{
    backgroundColor: 'rgba(96,100,109, 1)',
    borderRadius: hp("1%"),
    borderColor: 'rgba(96,100,109, 1)',
    borderWidth: hp("1%"),
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginHorizontal: wp("2%"),
    flex:1,
    alignItems:'center',
  },
  tutorialButtonText:{
    fontSize: hp("3%"),
    color: 'white',
    lineHeight: hp("4%"),
    fontWeight: 'normal',
    textAlign: 'center',
    justifyContent:'center',
  },
});

// always export the variables, function and classes for inter document use
export default styles;

// workaround to have the arrows stopping in front of the header
const {StatusBarManager} = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? hp("1%") : StatusBarManager.HEIGHT - hp("0.7%");
const NAVIGATIONHEADER_HEIGHT = hp("7%"); // from ../navigation/StackNavigator/headerstyle.height
const DISTANCETOTHETOP = NAVIGATIONHEADER_HEIGHT + STATUSBAR_HEIGHT;