import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../Screens/SplashScreen'
import WelcomeScreen from '../Screens/WelcomeScreen'
import LoginScreen from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignupScreen';
import ForgetScreen from '../Screens/ForgetScreen';
import BottomStack from './BottomStack';
import OTPScreen from '../Screens/OTPScreen';
import SetNewPasswordScreen from '../Screens/SetNewPasswordScreen';
const Stack=createStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false,presentation:"transparentModal"}}>
        <Stack.Screen name='SplashScreen' component={SplashScreen}/>
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen}/>
        <Stack.Screen name='LoginScreen' component={LoginScreen}/>
        <Stack.Screen name='SignupScreen' component={SignupScreen}/>
        <Stack.Screen name='ForgetScreen' component={ForgetScreen}/>
        <Stack.Screen name='OtpScreen' component={OTPScreen}/>
        <Stack.Screen name='NewPassScreen' component={SetNewPasswordScreen}/>
        <Stack.Screen name='BottomStack' component={BottomStack}/>
    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})