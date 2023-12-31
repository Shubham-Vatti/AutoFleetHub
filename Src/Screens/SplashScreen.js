import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Blackcolor, Whitecolor } from '../Components/Colors'
const {width, height} =Dimensions.get('window')
const SplashScreen = ({navigation}) => {
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('WelcomeScreen')
    },1000)
  },[])
  return (
    <View style={{flex:1,backgroundColor:Blackcolor,justifyContent:"center",alignItems:'center'}}>
      <Image source={require('../Assets/cariconlogo.png')} style={{width:width,height:width,resizeMode:'contain',}}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})