import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './Src/Navigator/AuthStack';
import BottomStack from './Src/Navigator/BottomStack';

const App = () => {
  return (
    <NavigationContainer>
      <AuthStack/>
      {/* <BottomStack/> */}
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})