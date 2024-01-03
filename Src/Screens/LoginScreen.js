import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Blackcolor, DarkOrangecolor, LightBlackcolor, LightLightBlackcolor, LightWhitecolor, Whitecolor } from '../Components/Colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
const { width, height } = Dimensions.get('window')
import { BackButtonHeader, BlackButton, getFontSize } from '../Components/UiComps'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import AppLodingScreen from '../Components/AppLodingScreen'
const LoginScreen = ({ navigation }) => {

  const HandleFunction=()=>{
    navigation.navigate('BottomStack')
  }
  return (
    <View style={{ flex: 1, backgroundColor: Whitecolor }}>
      <View style={{ marginTop: width * 0.06 }}>
        <BackButtonHeader txt={"Login"} navigation={navigation} />
      </View>
      <View style={{ alignItems: 'center' }}>
        <View style={{ marginTop: width * 0.2, paddingVertical: width * 0.02 }}>
          <Text style={styles.InputTitle}>Email</Text>
          <View style={styles.TextInputView}>
            <MaterialIcons name="alternate-email" size={width * 0.056} color={LightBlackcolor} />
            <TextInput
              placeholder='Sample@gmail.com'
              placeholderTextColor={LightBlackcolor}
              style={styles.ConTextin}
            />
          </View>
        </View>
        <View style={{ paddingVertical: width * 0.02 }}>
          <Text style={styles.InputTitle}>Password</Text>
          <View style={styles.TextInputView}>
            <Feather name="lock" size={width * 0.056} color={LightBlackcolor} />
            <TextInput
              placeholder='Sample'
              placeholderTextColor={LightBlackcolor}
              style={styles.ConTextin}
            />
          </View>
          <View style={{ flexDirection: 'row-reverse' }}>
            <TouchableOpacity onPress={()=>navigation.navigate('ForgetScreen')}>
              <Text style={{ fontFamily: 'Poppins-Regular', marginTop: width * 0.02 }}>Forget Password ?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop:width*0.16}}>
          <BlackButton txt={"Login"} HandleFunc={HandleFunction}/>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',marginVertical:width*0.08,}}>
          <View style={{width:width*0.24,height:width*0.001,backgroundColor:Blackcolor}}/>
          <Text style={{fontFamily:'Poppins-Medium',paddingHorizontal:width*0.04}}>OR</Text>
          <View style={{width:width*0.24,height:width*0.001,backgroundColor:Blackcolor}}/>
        </View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Text style={{fontFamily:'Poppins-Medium',color:Blackcolor}}>{'Create Account '}</Text>
          <TouchableOpacity
          onPress={()=>navigation.navigate('SignupScreen')}
          >
          <Text style={{fontFamily:'Poppins-Medium',color:DarkOrangecolor}}>Sign up !</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <AppLodingScreen/> */}
      {/* <AppLodingScreen/> */}
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  TextInputView: { flexDirection: 'row', alignItems: 'center', backgroundColor: LightLightBlackcolor, paddingHorizontal: width * 0.016, width: width * 0.88, borderRadius: width * 0.022 },
  ConTextin: { fontFamily: 'Poppins-Regular', color: Blackcolor, fontSize: getFontSize(13), width: width * 0.75, marginLeft: width * 0.01 },
  InputTitle: { fontFamily: 'Poppins-SemiBold', color: Blackcolor, fontSize: getFontSize(14) }
})