import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { Blackcolor, DarkOrangecolor, LightBlackcolor, LightLightBlackcolor, Whitecolor } from '../Components/Colors'
import { BackButtonHeader, BlackButton, getFontSize } from '../Components/UiComps'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const { width, height } = Dimensions.get('window')

const OTPScreen = ({ navigation }) => {
    const et1 = useRef()
    const et2 = useRef()
    const et3 = useRef()
    const et4 = useRef()
    const [data1, Setdata1] = useState('')
    const [data2, Setdata2] = useState('')
    const [data3, Setdata3] = useState('')
    const [data4, Setdata4] = useState('')


    const HandleFunction = () => {
        navigation.navigate('NewPassScreen')
    }

    return (
        <View style={{ flex: 1, backgroundColor: Whitecolor }}>
            <View style={{ marginTop: width * 0.06 }}>
                <BackButtonHeader txt={"Verify OTP"} navigation={navigation} />
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
                <View style={{ marginTop: width * 0.1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width, paddingHorizontal: width * 0.06 }}>
                    <TextInput
                        keyboardType='number-pad'
                        value={data1}
                        maxLength={1}
                        style={{ width: width * 0.16, fontFamily: 'Poppins-Medium', color: Blackcolor, fontSize: getFontSize(18), textAlign: 'center', textAlignVertical: 'center', height: width * 0.16, borderBottomWidth: 3, borderColor: data1.length >= 1 ? DarkOrangecolor : Blackcolor, borderWidth: 1, borderRadius: width * 0.02 }}
                        ref={et1}
                        onChangeText={(txt) => {
                            Setdata1(txt)
                            if (txt.length >= 1) {
                                et2.current.focus();
                            }
                        }}
                    />
                    <TextInput
                        keyboardType='number-pad'
                        maxLength={1}
                        ref={et2}
                        value={data2}
                        onChangeText={(txt) => {
                            Setdata2(txt)
                            if (txt.length >= 1) {
                                et3.current.focus();
                            }
                            else if (txt.length < 1) {
                                et1.current.focus();
                            }
                        }}
                        style={{ width: width * 0.16, fontFamily: 'Poppins-Medium', color: Blackcolor, fontSize: getFontSize(18), textAlign: 'center', textAlignVertical: 'center', height: width * 0.16, borderBottomWidth: 3, borderColor: data2.length >= 1 ? DarkOrangecolor : Blackcolor, borderWidth: 1, borderRadius: width * 0.02 }}
                    />
                    <TextInput
                        keyboardType='number-pad'
                        ref={et3}
                        maxLength={1}
                        value={data3}
                        onChangeText={(txt) => {
                            Setdata3(txt)
                            if (txt.length >= 1) {
                                et4.current.focus();
                            }
                            else if (txt.length < 1) {
                                et2.current.focus();
                            }
                        }}
                        style={{ width: width * 0.16, fontFamily: 'Poppins-Medium', color: Blackcolor, fontSize: getFontSize(18), textAlign: 'center', textAlignVertical: 'center', height: width * 0.16, borderBottomWidth: 3, borderColor: data3.length >= 1 ? DarkOrangecolor : Blackcolor, borderWidth: 1, borderRadius: width * 0.02 }}
                    />
                    <TextInput
                        keyboardType='number-pad'
                        maxLength={1}
                        ref={et4}
                        value={data4}
                        onChangeText={(txt) => {
                            Setdata4(txt)
                            // if(txt.length>=1)
                            // {
                            //     et3.current.focus();
                            // }
                            if (txt.length < 1) {
                                et3.current.focus();
                            }
                        }}
                        style={{ width: width * 0.16, fontFamily: 'Poppins-Medium', color: Blackcolor, fontSize: getFontSize(18), textAlign: 'center', textAlignVertical: 'center', height: width * 0.16, borderBottomWidth: 3, borderColor: data4.length >= 1 ? DarkOrangecolor : Blackcolor, borderWidth: 1, borderRadius: width * 0.02 }}
                    />
                </View>
                <View style={{ marginTop: width * 0.16 }}>
                    <BlackButton txt={"Verify OTP"} HandleFunc={HandleFunction} />
                </View>
            </View>
        </View>
    )
}

export default OTPScreen

const styles = StyleSheet.create({
    TextInputView: { flexDirection: 'row', alignItems: 'center', backgroundColor: LightLightBlackcolor, paddingHorizontal: width * 0.016, width: width * 0.88, borderRadius: width * 0.022 },
    ConTextin: { fontFamily: 'Poppins-Regular', color: Blackcolor, fontSize: getFontSize(13), width: width * 0.75, marginLeft: width * 0.01 },
    InputTitle: { fontFamily: 'Poppins-SemiBold', color: Blackcolor, fontSize: getFontSize(14) }
})