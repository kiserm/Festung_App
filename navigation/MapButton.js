import React from 'react';
import {Image,Text,View,TouchableHighlight,} from 'react-native';



 const MapButton = (props) =>{
    let testButton = <TouchableHighlight onPress={() => props.navigation.navigate('Home')}>
    <Icon name='close' />
  </TouchableHighlight>
  return testButton 
 }
 
  export default MapButton;
