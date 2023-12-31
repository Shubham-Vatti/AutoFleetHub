import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Blackcolor, DarkOrangecolor, LightBlackcolor, LightLightBlackcolor, Whitecolor } from '../Components/Colors'
import { BackButtonHeader, BlackButton, getFontSize } from '../Components/UiComps'
const { width, height } = Dimensions.get('window')
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const ForgetScreen = ({navigation}) => {

  const HandleFunction=()=>{
    navigation.navigate('OtpScreen')
  }

  return (
    <View style={{flex:1,backgroundColor:Whitecolor}}>
    <View style={{ marginTop: width * 0.06 }}>
      <BackButtonHeader txt={"Forget Password"} navigation={navigation} />
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
        <View style={{marginTop:width*0.16}}>
          <BlackButton txt={"Send OTP"} HandleFunc={HandleFunction}/>
        </View>
        </View>
    </View>
  )
}

export default ForgetScreen

const styles = StyleSheet.create({
  TextInputView: { flexDirection: 'row', alignItems: 'center', backgroundColor: LightLightBlackcolor, paddingHorizontal: width * 0.016, width: width * 0.88, borderRadius: width * 0.022 },
  ConTextin: { fontFamily: 'Poppins-Regular', color: Blackcolor, fontSize: getFontSize(13), width: width * 0.75, marginLeft: width * 0.01 },
  InputTitle: { fontFamily: 'Poppins-SemiBold', color: Blackcolor, fontSize: getFontSize(14) }})