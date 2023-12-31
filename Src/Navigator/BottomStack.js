import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from  '../Screens/BottomScreen/HomeScreen';
import WishlistScreen from '../Screens/BottomScreen/WishlistScreen';
import SearchedScreen from '../Screens/BottomScreen/SearchedScreen';
import ProfileScreen from '../Screens/BottomScreen/ProfileScreen';
import { Blackcolor, DarkOrangecolor, LightBlackcolor } from '../Components/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
const {width, height} =Dimensions.get('window')
const Bottom=createBottomTabNavigator();

const BottomStack = () => {
  return (
    <Bottom.Navigator screenOptions={{headerShown:false,tabBarHideOnKeyboard:true}} >
        <Bottom.Screen name='Home' component={HomeScreen} options={
                    {
                        tabBarIcon: (tabinfo) => {
                            return (tabinfo.focused ?<AntDesign name="home" size={width*0.066} color={DarkOrangecolor}/> :<AntDesign name="home" size={width*0.066} color={LightBlackcolor}/>)
                        },
                        // tabBarStyle:{borderTopColor:'red',borderTopWidth:1,},
                        tabBarActiveTintColor: DarkOrangecolor,
                        tabBarInactiveTintColor: LightBlackcolor,
                        tabBarLabelStyle: { fontFamily: 'Poppins-Medium', textAlign: 'center' }
                        // tabBarLabel:"",
                    }
                }
                />
        <Bottom.Screen name='Searchscreen' component={SearchedScreen}  options={
                    {
                        tabBarIcon: (tabinfo) => {
                            return (tabinfo.focused ? <Feather name="search" size={width*0.066} color={DarkOrangecolor} />: <Feather name="search" size={width*0.066} color={LightBlackcolor} />)
                        },
                        // tabBarStyle:{borderTopColor:'red',borderTopWidth:1,},
                        tabBarActiveTintColor: DarkOrangecolor,
                        tabBarInactiveTintColor: LightBlackcolor,
                        // tabBarInactiveTintColor: LightBottomBlackColor,
                        tabBarLabelStyle: { fontFamily: 'Poppins-Medium', textAlign: 'center' },
                        tabBarLabel:"Search",
                    }
                }/>
        <Bottom.Screen name='Likedscreen' component={WishlistScreen}  options={
                    {
                        tabBarIcon: (tabinfo) => {
                            return (tabinfo.focused ? <AntDesign name="hearto" size={width*0.066} color={DarkOrangecolor} />:<AntDesign name="hearto" size={width*0.066} color={LightBlackcolor} />)
                        },
                        // tabBarStyle:{borderTopColor:'red',borderTopWidth:1,},
                        // tabBarActiveTintColor: Blackcolor,
                        // tabBarInactiveTintColor: LightBottomBlackColor,
                        tabBarActiveTintColor: DarkOrangecolor,
                        tabBarInactiveTintColor: LightBlackcolor,
                        tabBarLabelStyle: { fontFamily: 'Poppins-Medium', textAlign: 'center' },
                        tabBarLabel:"Saved",
                    }
                }/>
        <Bottom.Screen name='Profilescreen' component={ProfileScreen}  options={
                    {
                        tabBarIcon: (tabinfo) => {
                            return (tabinfo.focused ?<AntDesign name="user" size={width*0.066} color={DarkOrangecolor} />: <AntDesign name="user" size={width*0.066} color={LightBlackcolor} />)
                        },
                        // tabBarStyle:{borderTopColor:'red',borderTopWidth:1,},
                        // tabBarActiveTintColor: Blackcolor,
                        
                        tabBarActiveTintColor: DarkOrangecolor,
                        tabBarInactiveTintColor: LightBlackcolor,
                        // tabBarInactiveTintColor: LightBottomBlackColor,
                        tabBarLabelStyle: { fontFamily: 'Poppins-Medium', textAlign: 'center' },
                        tabBarLabel:"Profile",
                    }
                }/>
    </Bottom.Navigator>
  )
}

export default BottomStack

const styles = StyleSheet.create({})