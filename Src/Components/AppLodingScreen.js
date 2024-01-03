import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AnimatedLottieView from 'lottie-react-native'
import { Blackcolor, LightBlackcolor, Whitecolor } from './Colors'
import { getFontSize } from './UiComps'
const { width, height } = Dimensions.get('window')

const AppLodingScreen = () => {
  return (
    <View style={{flex:1,position: 'absolute',alignItems:'center',justifyContent:"center",zIndex:100,backgroundColor:LightBlackcolor,height,width}}>
      <View style={{backgroundColor:Whitecolor,alignItems:'center',width:width*0.32,borderRadius:100}}>
      {/* <Text style={{fontFamily:'Poppins-Medium',color:Blackcolor,fontSize:getFontSize(16)}}>Loading ...</Text> */}
      <AnimatedLottieView autoPlay loop source={require('../Assets/Animationss.json')} style={{width:width*0.3,height:width*0.3}}/>
      </View>
    </View>
  )
}

export default AppLodingScreen

const styles = StyleSheet.create({})