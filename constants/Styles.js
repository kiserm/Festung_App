import {StyleSheet, Platform, NativeModules} from 'react-native'; // we need this for using CSS like design patterns 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'; // to be able to have a proper design on every platform, I downloaded this package from this website: https://www.npmjs.com/package/react-native-responsive-screen

// workaround to have the arrows stopping in front of the header
const {StatusBarManager} = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? hp("1%") : StatusBarManager.HEIGHT - hp("3.3%");
const NAVIGATIONHEADER_HEIGHT = -hp("2%"); // from ../navigation/StackNavigator/headerstyle.height
const DISTANCETOTHETOP = NAVIGATIONHEADER_HEIGHT + STATUSBAR_HEIGHT;

/**
 * IDEA:
 * the complete styles list for the whole app, this is only done for a good organisation
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
      justifyContent:'center'
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
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    homeButtonStyle:{
      backgroundColor: 'rgba(96,100,109, 1)',
      borderRadius: hp("1%"),
      borderColor: 'rgba(96,100,109, 1)',
      borderWidth: hp("1%"),
      marginBottom: hp("2%"),
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
     flex: 1.5,
     marginTop: hp("6%"),
     justifyContent: 'flex-start',
   },
   howToTextContainer:{
    flex: 7,
    marginVertical: hp("3%"),
    alignItems:'center',
    justifyContent:'center',
   },
   howToBottomContainer:{
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-end',
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
    textAlign: 'left',
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
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginHorizontal: wp("5%"),
    flex:1,
   },
   howToButtonAudioStyle:{
    backgroundColor: 'white',
    borderColor: 'rgba(96,100,109, 1)',
    borderWidth: hp("1%"),
    marginBottom: hp("2%"),
    alignSelf: 'center',
    justifyContent: 'center',
    marginHorizontal: wp("11%"),
   },
   howToButtonText:{
    fontSize: hp("3%"),
    color: 'white',
    lineHeight: hp("4%"),
    fontWeight: 'normal',
    textAlign: 'center',
    justifyContent:'center'
   },
   howToAudioContainer:{
     flex:2,
     flexDirection: 'row',
     justifyContent: 'space-evenly',
   },
   howToNextScreenContainer:{
    flex:1,
    alignSelf:'stretch',
    justifyContent:'center',
    marginBottom: hp("2%"),
   },
   howToBadgersContainer:{
     position: 'absolute',
     top: -hp("3%"),
     right: 0,
     left: wp("76%"),
     bottom:0,
     zIndex:100,
     width: wp("50%"),
     height: hp("50%"),
     backgroundColor: 'rgba(255,255,255,0)',
   },
   howToBadgerImageStyle:{
    width: wp("40%"),
    height: hp("30%"),
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
   },
   
   // navigationBarIcons style
   // -----------------------------------------------------------------------------------------------------------------
   headerButtonContainer:{
    flex: 1, 
    flexDirection: 'row', // makes that we have two icons horizontally listed
    alignItems: 'center', //makes that the icon is centered vertically -> cross axis
    marginHorizontal: wp("3%"),
   },
   headerBarIcons:{
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
  overviewButtonHowToStyle:{
    backgroundColor: 'rgba(96,100,109, 1)',
    borderRadius: hp("1%"),
    borderColor: 'rgba(96,100,109, 1)',
    borderWidth: hp("1%"),
    justifyContent: 'center',
    paddingHorizontal: wp("2%"),
    marginVertical: hp("1%"),
    marginHorizontal: wp("2%"),
    width: wp("84%")
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
  overviewButtonToDoStyleNotSubmitable:{
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
  overviewButtonDoneStyleNotSubmitable:{
    backgroundColor: 'white',
    borderRadius: hp("1%"),
    borderColor: 'rgb(211, 211, 211)',
    borderWidth: hp("1%"),
    justifyContent: 'center',
    paddingHorizontal: wp("2%"),
    marginVertical: hp("1%"),
    marginHorizontal: wp("2%"),
    width: wp("40%")
  },
  overviewButtonDoneTextNotSubmittable:{
    fontSize: hp("3%"),
    color: 'rgb(211, 211, 211)',
    lineHeight: hp("4%"),
    fontWeight: 'normal',
    textAlign: 'center',
    justifyContent:'center'
  },
  overviewButtonText: {
    fontSize: hp("3%"),
    color: 'white',
    lineHeight: hp("4%"),
    fontWeight: 'normal',
    textAlign: 'center',
    justifyContent:'center'
  },
  overviewChosenButtonText:{
    fontSize: hp("3%"),
    color: 'rgba(96,100,109, 1)',
    lineHeight: hp("4%"),
    fontWeight: 'normal',
    textAlign: 'center',
    justifyContent:'center',
  },
  overviewImageStyle:{
    position: 'absolute',
    top: Platform.OS==='ios'?hp("10%"):hp("7%"),
    right: wp("0%"),
    width: wp("35%"),
    height: wp("18%"),
    zIndex: 100,
    backgroundColor: 'rgba(255,255,255,0)',
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
    width: wp("100%"),
    height: hp("70%"),
    flex:1,
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
  mapButtonText:{
    fontSize: hp("3%"),
    color: 'white',
    lineHeight: hp("4%"),
    fontWeight: 'normal',
    textAlign: 'center',
    justifyContent:'center'
  },

  // resultScreen styles 
  // -----------------------------------------------------------------------------------------------------------------
  resultTitleTextContainer:{
    flex:1.5,
    alignItems: 'center',
    marginTop: hp("6%"),
  },
  resultMiddleTextContainer:{
    flex:1,
    alignItems: 'stretch',
    alignSelf: 'stretch',
    justifyContent: 'center',
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
    justifyContent: 'center',
  },
  resultMiddleTitleContainer:{
    flex:0.6,
  },
  resultIconContainer:{
    flex:4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultMiddleText:{
    fontSize: hp("3%"),
    color: 'rgba(96,100,109, 1)',
    lineHeight: hp("4%"),
    fontWeight: 'normal',
    textAlign: 'center',
    marginVertical: hp("1%"),
    marginHorizontal: wp("5%"),
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
  resultTitleTextFormat:{
    fontSize: hp("7%"),
    color: 'rgba(96,100,109, 1)',
    lineHeight: hp("8%"),
    textAlign: 'center',
    fontWeight: 'bold',
    marginHorizontal: wp("7%"),
    marginTop: hp("3%"),
  },
  resultCompareContainer:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: wp("90%"),
    height: hp("9%"),
    marginVertical: hp("0.2%"),
  },
  resultStationButtonStyle:{
    flex: 2.5,
    marginHorizontal: wp("2%"),
    backgroundColor: 'rgba(96,100,109, 1)',
    borderRadius: hp("1%"),
    borderColor: 'rgba(96,100,109, 1)',
    borderWidth: hp("1%"),
    justifyContent: 'center',
    alignSelf:'center',
  },
  resultArrowButtonStyle:{
    flex: 1.2,
    marginHorizontal: wp("2%"),
    backgroundColor: 'rgba(96,100,109, 1)',
    borderRadius: hp("1%"),
    borderColor: 'rgba(96,100,109, 1)',
    borderWidth: hp("1%"),
    justifyContent: 'center',
    alignSelf:'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultAnswerButtonStyle:{
    flex: 0.7,
    marginHorizontal: wp("1%"),
    backgroundColor: 'rgba(96,100,109, 1)',
    borderRadius: hp("1%"),
    borderColor: 'rgba(96,100,109, 1)',
    borderWidth: hp("1%"),
    justifyContent: 'center',
    alignSelf:'center',
  },
  resultRightAnswerButtonStyle:{
    flex: 0.7,
    marginHorizontal: wp("1%"),
    backgroundColor: 'green',
    borderRadius: hp("1%"),
    borderColor: 'green',
    borderWidth: hp("1%"),
    justifyContent: 'center',
    alignSelf:'center',
  },
  resultWrongAnswerButtonStyle:{
    flex: 0.7,
    marginHorizontal: wp("1%"),
    backgroundColor: '#C92732',
    borderRadius: hp("1%"),
    borderColor: '#C92732',
    borderWidth: hp("1%"),
    justifyContent: 'center',
    alignSelf:'center',
  },
  resultButtonText:{
    fontSize: hp("3.5%"),
    color: 'white',
    lineHeight: hp("5%"),
    fontWeight: 'normal',
    textAlign: 'center',
    justifyContent:'center'
  },
  resultImageStyle1:{
    position: 'absolute',
    bottom: Platform.OS==='ios'?wp("17%"):wp("15%"),
    right: wp("15%"),
    width: wp("10%"),
    height: wp("9.5%"),
    zIndex: 100,
    backgroundColor: 'rgba(255,255,255,0)',
  },
  resultImageStyle2:{
    position: 'absolute',
    bottom: hp("7%"),
    right: wp("2%"),
    width: wp("10%"),
    height: wp("9.5%"),
    zIndex: 100,
    backgroundColor: 'rgba(255,255,255,0)',
  },

  //certificateScreen styles
  // -----------------------------------------------------------------------------------------------------------------
  certificateTitleTextContainer:{
    flex:1.5,
    marginTop: hp("5%"),
  },
  certificateBottomContainer:{
    flex:6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  certificateBottomTitleContainer:{
    flex: 1,
    alignItems: 'center',
    marginBottom: hp("1%"),
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  certificateBottomSubtitleContainer:{
    flex: 3,
    alignItems: 'center',
    marginBottom: hp("1%"),
    justifyContent: 'flex-start',
    backgroundColor: 'green',
  },
  certificateBottomCashDeskContainer:{
    flex: 2,
    alignItems: 'center',
    marginBottom: hp("2%"),
    justifyContent: 'flex-end',
    backgroundColor: 'red',
  },
  certificateBottomTextFormat:{
    fontSize: hp("5%"),
    color: 'rgba(96,100,109, 1)',
    lineHeight: hp("5.2%"),
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: wp("7%"),
  },
  certificateBottomInfoTextFormat:{
    fontSize: hp("3%"),
    color: 'rgba(96,100,109, 1)',
    lineHeight: hp("3.5%"),
    fontWeight: 'normal',
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
  certificateIconStyle:{
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  certificateImageStyle:{
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    width: wp("100%"),
    height: wp("52%"),
    zIndex: 100,
    backgroundColor: 'rgba(255,255,255,0)',
    flex:4,
  },

  // stationsInfo style
  // -----------------------------------------------------------------------------------------------------------------
  stationInfoTitleTextContainer:{
    flex:0.8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'ios' ? hp("1%") : hp("3%")
  },
  stationInfoTitleTextFormat:{
    fontSize: Platform.OS === 'ios' ? hp("5.4%") : hp("6%"),
    color: 'rgba(96,100,109, 1)',
    lineHeight: hp("6.5%"),
    textAlign: 'center',
    fontWeight: 'bold',
    marginHorizontal: wp("5%"),
  },
  stationInfoTextContainer:{
    flex:4,
    marginVertical: hp("3%"),
  },
  stationInfoTextIOS:{
    fontSize: hp("3%"),
    color: 'rgba(96,100,109, 1)',
    lineHeight: hp("4%"),
    fontWeight: 'normal',
    textAlign: 'left',
    marginBottom: hp("4%"),
    marginHorizontal: wp("7%"),
  },
  stationInfoTextAndroid:{
    width: wp("89%"),
    height: hp("60%"),
    alignSelf: 'center',
  },
  stationInfoBottomContainer:{
    flex: 1.6,
  },
  stationInfoAudioContainer:{
    flex:2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  stationInfoButtonAudioStyle:{
    backgroundColor: 'white',
    borderColor: 'rgba(96,100,109, 1)',
    borderWidth: hp("1%"),
  },
  stationInfoNextButtonStyle:{
    backgroundColor: 'rgba(96,100,109, 1)',
    borderRadius: hp("1%"),
    borderColor: 'rgba(96,100,109, 1)',
    borderWidth: hp("1%"),
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginHorizontal: wp("5%"),
    alignItems:'center',
    width: wp("40%"),
  },
  stationInfoNextButtonText:{
    fontSize: hp("3%"),
    color: 'white',
    lineHeight: hp("4%"),
    fontWeight: 'normal',
    alignSelf:'center',
  },
  stationInfoBottomNextContainer:{
    flex:1,
    alignSelf:'center',
    alignItems: 'center',
    justifyContent:'space-evenly',
    flexDirection: 'row',
    marginVertical: hp("1.5%"),
  },

  // stations style
  // -----------------------------------------------------------------------------------------------------------------
  stationChosenButtonStyle:{
    backgroundColor: 'white',
    borderRadius: hp("1%"),
    borderColor: 'rgba(96,100,109, 1)',
    borderWidth: hp("1%"),
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginHorizontal: wp("1%"),
    flex: 1,
    alignItems:'center',
  },
  stationChosenAndRightButtonStyle:{
    backgroundColor: 'white',
    borderRadius: hp("1%"),
    borderColor: 'green',
    borderWidth: hp("1%"),
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginHorizontal: wp("1%"),
    flex: 1,
    alignItems:'center',
  },
  stationUnchosenButtonStyle:{
    backgroundColor: 'rgba(96,100,109, 1)',
    borderRadius: hp("1%"),
    borderColor: 'rgba(96,100,109, 1)',
    borderWidth: hp("1%"),
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginHorizontal: wp("1%"),
    flex:1,
    alignItems:'center',
  },
  stationUnchosenAndRightButtonStyle:{
    backgroundColor: 'rgba(96,100,109, 1)',
    borderRadius: hp("1%"),
    borderColor: 'green',
    borderWidth: hp("1%"),
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginHorizontal: wp("1%"),
    flex:1,
    alignItems:'center',
  },
  stationChosenButtonText:{
    fontSize: hp("2.5%"),
    color: 'rgba(96,100,109, 1)',
    lineHeight: hp("2.75%"),
    fontWeight: 'normal',
    textAlign: 'right',
    justifyContent:'center',
    paddingHorizontal: wp("1%"),
    flex:7
  },
  stationChosenButtonLetter:{
    fontSize: hp("3%"),
    color: 'rgba(96,100,109, 1)',
    lineHeight: hp("4%"),
    fontWeight: 'bold',
    justifyContent:'center',
    alignSelf:'center',
    flex:1,
    paddingHorizontal: wp("1%"),
  },
  stationTitleTextContainer:{
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stationTitleTextFormat:{
    fontSize: Platform.OS === 'ios' ? hp("5.4%") : hp("6%"),
    color: 'rgba(96,100,109, 1)',
    lineHeight: hp("8%"),
    textAlign: 'center',
    fontWeight: 'bold',
    marginHorizontal: wp("7%"),
    marginTop: Platform.OS === 'ios' ? hp("1%") : hp("3%")
  },
  stationTextContainer:{
    flex: 4,
    alignSelf: 'center',
    justifyContent:'center',
    flexDirection: 'row',
    flexWrap:'wrap',
    marginBottom: hp("2%"),
  },
  stationTextContainerSlimFit:{
    flex: 8,
    alignSelf: 'center',
    justifyContent:'center',
    flexDirection: 'row',
    flexWrap:'wrap',
    marginBottom: hp("2%"),
  },
  stationAnswerContainer:{
    flex: 3
  },
  station1AnswerVerticalContainer:{
    flex:8,
    flexDirection: 'column',
    marginHorizontal: wp("2%"),
    marginBottom: hp("1%"),
  },
  station2AnswerVerticalContainer:{
    flex:8,
    flexDirection: 'column',
    marginHorizontal: wp("2%"),
    marginBottom: hp("1%"),
  },
  station3AnswerVerticalContainer:{
    flex:7,
    flexDirection: 'column',
    marginHorizontal: wp("2%"),
    marginBottom: hp("1%"),
  },
  station4AnswerVerticalContainer:{
    flex:8.5,
    flexDirection: 'column',
    marginHorizontal: wp("2%"),
    marginBottom: hp("1%"),
  },
  station5AnswerVerticalContainer:{
    flex:7.5,
    flexDirection: 'column',
    marginHorizontal: wp("2%"),
    marginBottom: hp("1%"),
  },
  station6AnswerVerticalContainer:{
    flex:8,
    flexDirection: 'column',
    marginHorizontal: wp("2%"),
    marginBottom: hp("1%"),
  },
  station7AnswerVerticalContainer:{
    flex:8.5,
    flexDirection: 'column',
    marginHorizontal: wp("2%"),
    marginBottom: hp("1%"),
  },
  station8AnswerVerticalContainer:{
    flex:6.5,
    flexDirection: 'column',
    marginHorizontal: wp("2%"),
    marginBottom: hp("1%"),
  },
  station9AnswerVerticalContainer:{
    flex:6,
    flexDirection: 'column',
    marginHorizontal: wp("2%"),
    marginBottom: hp("1%"),
  },
  station10AnswerVerticalContainer:{
    flex:8,
    flexDirection: 'column',
    marginHorizontal: wp("2%"),
    marginBottom: hp("1%"),
  },

  stationRowContainer:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp("0.5%"),
    marginBottom: hp("0.5%"),
  },
  stationUnchosenButtonText:{
    fontSize: hp("2.5%"),
    color: 'white',
    lineHeight: hp("2.75%"),
    fontWeight: 'normal',
    textAlign: 'right',
    justifyContent:'center',
    alignSelf:'center',
    flex:7,
    paddingHorizontal: wp("1%"),
  },
  stationUnchosenButtonLetter:{
    fontSize: hp("3%"),
    color: 'white',
    lineHeight: hp("4%"),
    fontWeight: 'bold',
    justifyContent:'center',
    alignSelf:'center',
    flex:1,
    paddingHorizontal: wp("1%")
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
    flex:1.2,
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
    alignItems:'center',
  },
  stationTextFormat:{
    fontSize: hp("3%"),
    color: 'rgba(96,100,109, 1)',
    lineHeight: hp("4%"),
    textAlign: 'left',
    fontWeight: 'normal',
    marginHorizontal: wp("5%"),
    marginTop: hp("3%"),
    alignSelf: 'center',
    flex:1,
    flexWrap:'wrap',
    justifyContent:'center',
  },
  station1BadgerImageStyle:{
    width: wp("20%"),
    height: wp("15%"),
    alignSelf: 'flex-start',
    marginHorizontal: wp("7%"),
    zIndex:100,
    backgroundColor: 'rgba(255,255,255,0)',
  },
  station2FoxImageStyle:{
    width: wp("20%"),
    height: wp("20%"),
    zIndex:100,
    backgroundColor: 'rgba(255,255,255,0)',
  },
  station2QuestionFoxContainer:{
    position: 'absolute',
    left: wp("50%"),
    bottom: -hp("1%"),
    zIndex:100,
    width: wp("20%"),
    height: wp("20%"),
    backgroundColor: 'rgba(255,255,255,0)',
  },
  station3FoxImageStyle:{
    alignSelf: 'flex-end',
    marginHorizontal: wp("7%"),
    marginVertical: -hp("1%"),
    justifyContent: 'center',
    width: wp("25%"),
    height: wp("25%"),
    zIndex:100,
    backgroundColor: 'rgba(255,255,255,0)',
  },
  station4BadgerImageStyle:{
    alignSelf: 'flex-end',
    marginHorizontal: -wp("21%"),
    marginVertical: hp("1%"),
    justifyContent: 'center',
    width: wp("40%"),
    height: wp("25%"),
    zIndex:100,
    backgroundColor: 'rgba(255,255,255,0)',
    transform: [{rotate: '15deg'}],
  },
  station5QuestionFoxContainer:{
    position: 'absolute',
    right: wp("2%"),
    top: -wp("0.75%"),
    zIndex:100,
    width: wp("10%"),
    height: wp("10%"),
    backgroundColor: 'rgba(255,255,255,0)',
    transform: [{rotate: '-180deg'}],
  },
  station5FoxImageStyle:{
    width: wp("10%"),
    height: wp("10%"),
    zIndex:100,
    backgroundColor: 'rgba(255,255,255,0)',
  },
  station6InfoFoxImageStyle:{
    position: 'absolute',
    left: wp("30%"),
    bottom: -hp("0.5%"),
    width: wp("15%"),
    height: wp("15%"),
    zIndex:100,
    backgroundColor: 'rgba(255,255,255,0)',
    transform: [{rotate: '-90deg'}],
  },
  station6InfoBadgerImageStyle:{
    position: 'absolute',
    right: wp("30%"),
    bottom: -hp("0.5%"),
    width: wp("18%"),
    height: wp("15%"),
    zIndex:100,
    backgroundColor: 'rgba(255,255,255,0)',
  },
  station7ImageStyle:{
    alignSelf:'flex-end',
    marginHorizontal: wp("7%"),
    height: wp("15%"),
    width: wp("17%"),
    zIndex:100,
    backgroundColor: 'rgba(255,255,255,0)',
  },

  station8FoxImageStyle:{
    marginHorizontal: wp("4%"),
    marginTop: Platform.OS === 'ios' ? -hp("2.5%") : -hp("1.6%"),
    width: wp("15%"),
    height: wp("15%"),
    zIndex:100,
    backgroundColor: 'rgba(255,255,255,0)',
    transform: [{rotate: '-180deg'}],
  },
  station9InfoFoxImageStyle:{
    position: 'absolute',
    left: wp("30%"),
    bottom: -hp("0.5%"),
    width: wp("12%"),
    height: wp("12%"),
    zIndex:100,
    backgroundColor: 'rgba(255,255,255,0)',
    transform: [{rotate: '-90deg'}],
  },
  station9InfoBadgerImageStyle:{
    position: 'absolute',
    right: wp("30%"),
    bottom: -hp("0.5%"),
    width: wp("14%"),
    height: wp("12%"),
    zIndex:100,
    backgroundColor: 'rgba(255,255,255,0)',
  },
  station10ImageStyle:{
    alignSelf: 'flex-end',
    marginHorizontal: -wp("7%"),
    marginVertical: -hp("0.35%"),
    width: wp("35%"),
    height: wp("12.5%"),
    zIndex:100,
    backgroundColor: 'rgba(255,255,255,0)',
  },

  // submitStation styles
  // --------------------------------------------------------------------------------------------------------------------------
  SubmitStationBackButtonStyle:{
    backgroundColor: 'rgba(96,100,109, 1)',
    borderRadius: hp("1%"),
    borderColor: 'rgba(96,100,109, 1)',
    borderWidth: hp("1%"),
    alignSelf: 'center',
    justifyContent: 'center',
    width: wp("90%"),
    marginVertical: hp("1%"),
  },
  submitStationBottomContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp("1%"),
    marginHorizontal: wp("2.5%")
  },
  submittedStationChosenButtonStyle:{
    backgroundColor: 'white',
    borderRadius: hp("1%"),
    borderColor: 'rgb(211, 211, 211)',
    borderWidth: hp("1%"),
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginHorizontal: wp("1%"),
    flex: 1,
    alignItems:'center',
  },
  submittedStationChosenAndRightButtonStyle:{
    backgroundColor: 'white',
    borderRadius: hp("1%"),
    borderColor: 'green',
    borderWidth: hp("1%"),
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginHorizontal: wp("1%"),
    flex: 1,
    alignItems:'center',
  },
  submittedStationUnchosenButtonStyle:{
    backgroundColor: 'rgb(211, 211, 211)',
    borderRadius: hp("1%"),
    borderColor: 'rgb(211, 211, 211)',
    borderWidth: hp("1%"),
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginHorizontal: wp("1%"),
    flex:1,
    alignItems:'center',
  },
  submittedStationBackButtonStyle:{
    backgroundColor: 'rgba(96,100,109, 1)',
    borderRadius: hp("1%"),
    borderColor: 'rgba(96,100,109, 1)',
    borderWidth: hp("1%"),
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginHorizontal: wp("1%"),
    flex:1,
    alignItems:'center',
  },
  submittedStationUnchosenAndRightButtonStyle:{
    backgroundColor: 'rgb(211, 211, 211)',
    borderRadius: hp("1%"),
    borderColor: 'green',
    borderWidth: hp("1%"),
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginHorizontal: wp("1%"),
    flex:1,
    alignItems:'center',
  },
  submittedStationChosenButtonText:{
    fontSize: hp("2.5%"),
    color: 'rgb(211, 211, 211)',
    lineHeight: hp("2.75%"),
    fontWeight: 'normal',
    textAlign: 'right',
    justifyContent:'center',
    paddingHorizontal: wp("1%"),
    flex:9
  },
  submittedStationChosenButtonLetter:{
    fontSize: hp("3%"),
    color: 'rgb(211, 211, 211)',
    lineHeight: hp("4%"),
    fontWeight: 'bold',
    justifyContent:'center',
    alignSelf:'center',
    flex:1,
    paddingHorizontal: wp("1%"),
  },
  submittedStationTitleTextContainer:{
    flex: 3,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginHorizontal: wp("5%"),
    marginTop: hp("4%"),
  },
  submittedStationTitleTextFormat:{
    fontSize: Platform.OS === 'ios' ? hp("6%") : hp("6.5%"),
    color: 'rgba(96,100,109, 1)',
    lineHeight: Platform.OS === 'ios' ? hp("6.25%") : hp("6.75%"),
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: hp("3%"),
  },
  submittedStationTextContainer:{
    flex: 5,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  submittedStationAnswerContainer:{
    flex: 3
  },
  submittedStationAnswerVerticalContainer:{
    flex:8,
    flexDirection: 'column',
    marginHorizontal: wp("2%"),
    marginBottom: hp("1%"),
  },
  submittedStationRowContainer:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp("0.5%"),
    marginBottom: hp("0.5%"),
  },
  submittedStationA6RowContainer:{
    flex:1.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp("0.5%"),
    marginBottom: hp("0.5%"),
  },
  submittedStationB6RowContainer:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp("0.5%"),
    marginBottom: hp("0.5%"),
  },
  submittedStationC6RowContainer:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp("0.5%"),
    marginBottom: hp("0.5%"),
  },
  submittedStationD6RowContainer:{
    flex:2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp("0.5%"),
    marginBottom: hp("0.5%"),
  },
  submittedStationUnchosenButtonText:{
    fontSize: hp("2.5%"),
    color: 'white',
    lineHeight: hp("2.75%"),
    fontWeight: 'normal',
    textAlign: 'right',
    justifyContent:'center',
    alignSelf:'center',
    flex:9,
    paddingHorizontal: wp("1%")
  },
  submittedStationUnchosenButtonLetter:{
    fontSize: hp("3%"),
    color: 'white',
    lineHeight: hp("3.25%"),
    fontWeight: 'bold',
    justifyContent:'center',
    alignSelf:'center',
    flex:1,
    paddingHorizontal: wp("1%")
  },
  submittedStationRowMiddleContainer:{
    flex:0.7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp("2%"),
    marginBottom: hp("1%"),
  },
  submittedStationBottomNextContainer:{
    flex:0.7,
    flexDirection: 'row',
    marginHorizontal: wp("2%"),
    marginBottom: hp("1%"),
  },
  submittedStation10NotSubmittableButtonStyle:{
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
  submittedStationTextFormat:{
    fontSize: hp("2.5%"),
    color: 'rgba(96,100,109, 1)',
    lineHeight: hp("2.75%"),
    textAlign: 'left',
    fontWeight: 'normal',
    marginHorizontal: wp("7%"),
    marginTop: hp("3%"),
  },
  submittedStationBackButtonText:{
    fontSize: hp("3%"),
    color: 'white',
    lineHeight: hp("4%"),
    textAlign: 'center',
    fontWeight: 'normal',
    marginHorizontal: wp("7%"),
    alignSelf: 'center',
    justifyContent:'center'
  },
  submittedStationStampContainer:{
    position: 'absolute',
    left: wp("40%"),
    right: 0,
    bottom: 0,
    top: hp("7%"),
    width: wp("60%"),
    height: hp("16%"),
    transform: [{rotate: '-30deg'}],
    zIndex: 100,
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: wp("4%"),
    flex:1,
    flexDirection:'row',
  },
  submittedStationStampTextWrong:{
    flex:1,
    color: 'rgba(201,39,50,0.2)',
    fontSize: hp("8%"),
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
  },
  submittedStationStampTextRight:{
    flex:1,
    color: 'rgba(0,153,0,0.2)',
    fontSize: hp("8%"),
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
  },
  submittedStationImageStyle1:{
    position: 'absolute',
    top: hp("0%"),
    left: wp("2%"),
    width: wp("10%"),
    height: wp("9.5%"),
    zIndex: 100,
    backgroundColor: 'rgba(255,255,255,0)',
  },
  submittedStationImageStyle2:{
    position: 'absolute',
    bottom: hp("0%"),
    right: wp("2%"),
    width: wp("10%"),
    height: wp("9.5%"),
    zIndex: 100,
    backgroundColor: 'rgba(255,255,255,0)',
  },

  // images in the app
  // -----------------------------------------------------------------------------------------------------
  station1InfoFoxContainer:{
    position: 'absolute',
    top: hp("2%"),
    right: 0,
    left: -wp("1.3%"),
    bottom:0,
    zIndex:100,
    width: wp("20%"),
    height: wp("23%"),
    backgroundColor: 'rgba(255,255,3,0)',
  },
  station1InfoFoxImageStyle:{
    width: wp("20%"),
    height: wp("23%"),
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0)',
  },
  station2InfoBadgerImageStyle:{
    position: 'absolute',
    top: -hp("2%"),
    right: wp("7%"),
    width: wp("13%"),
    height: wp("12%"),
    backgroundColor: 'rgba(255,255,255,0)',
    transform: [{rotate: '180deg'}],
  },
  station3InfoImageStyle:{
    position: 'absolute',
    bottom: hp("7%"),
    right: -wp("9.5%"),
    width: wp("20%"),
    height: wp("12%"),
    backgroundColor: 'rgba(255,255,255,0)',
    transform: [{rotate: '15deg'}],
  },
  station4InfoImageStyle:{
    position: 'absolute',
    bottom: -hp("0.5%"),
    left: wp("45.5%"),
    width: wp("8.5%"),
    height: wp("9%"),
    backgroundColor: 'rgba(255,255,255,0)',
    transform: [{rotate: '-90deg'}],
  },
  station5InfoImageStyle1:{
    position: 'absolute',
    bottom: hp("7.35%"),
    left: wp("30%"),
    width: wp("13%"),
    height: wp("12%"),
    backgroundColor: 'rgba(255,255,255,0)',
  },
  station5InfoImageStyle2:{
    position: 'absolute',
    bottom: hp("7%"),
    right: wp("29%"),
    width: wp("12%"),
    height: wp("12%"),
    backgroundColor: 'rgba(255,255,255,0)',
  },
  station6InfoImageStyle:{
    position: 'absolute',
    top: hp("8%"),
    left: -wp("2%"),
    width: wp("13%"),
    height: wp("12%"),
    backgroundColor: 'rgba(255,255,255,0)',
    transform: [{rotate: '90deg'}],
  },
  station7InfoImageStyle:{
    position: 'absolute',
    bottom: hp("15%"),
    right: -wp("2%"),
    width: wp("13%"),
    height: wp("12%"),
    backgroundColor: 'rgba(255,255,255,0)',
    transform: [{rotate: '-90deg'}],
  },
  station8InfoImageStyle:{
    position: 'absolute',
    bottom: Platform.OS === 'ios'? hp("1%"): -hp("0.5%"),
    left: wp("13.5%"),
    width: wp("36%"),
    height: wp("35%"),
    opacity: 0.3,
    backgroundColor: 'rgba(255,255,255,0)',
    transform: [{rotate: '-90deg'}],
    zIndex:-50,
  },
  station9InfoImageStyle:{
    position: 'absolute',
    bottom: hp("20%"),
    right: -wp("8%"),
    width: wp("21%"),
    height: wp("20%"),
    backgroundColor: 'rgba(255,255,255,0)',
    transform: [{rotate: '-50deg'}],
  },
  station10InfoImageStyle1:{
    position: 'absolute',
    top: hp("7%"),
    left: wp("1%"),
    width: wp("10%"),
    height: wp("9.5%"),
    zIndex: 100,
    backgroundColor: 'rgba(255,255,255,0)',
  },
  station10InfoImageStyle2:{
    position: 'absolute',
    top: hp("7%"),
    right: wp("1%"),
    width: wp("10%"),
    height: wp("9.5%"),
    zIndex: 100,
    backgroundColor: 'rgba(255,255,255,0)',
  },
});

// always export the variables, function and classes for inter document use
export default styles;