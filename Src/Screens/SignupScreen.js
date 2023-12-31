import { Dimensions, Image, Modal, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Blackcolor, DarkOrangecolor, LightBlackcolor, LightLightBlackcolor, Whitecolor } from '../Components/Colors'
import { BackButtonHeader, BlackButton, getFontSize } from '../Components/UiComps'
const { width, height } = Dimensions.get('window')
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { PERMISSIONS, RESULTS, check, request } from 'react-native-permissions'
const SignupScreen = ({ navigation }) => {
  const [UserPicModal, SetUserPicModal] = useState(false)
  const [UserProfilePic, SetUserProfilePic] = useState('')
  const HandleFunction = () => {
    alert("Register")
  }


  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
    includeBase64: false,
  };

  const OpenGallery = async () => {
    // request(Platform.OS == 'ios' ? PERMISSIONS.IOS.PHOTO_LIBRARY : PERMISSIONS.ANDROID.READ_MEDIA_IMAGES).then(async () => {
    const Result = await launchImageLibrary(options)
    console.log(Result.assets[0])
    SetUserProfilePic(Result.assets[0])
    // SetImage2(Result.assets[0])
    // })
  }
  const OpenCamera = () => {
    check(PERMISSIONS.ANDROID.CAMERA).then(async (result) => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          console.log('This feature is not available (on this device / in this context)');
          break;
        case RESULTS.DENIED:
          request(Platform.OS == 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA, {
            title: "Ypp would like to take a picture of your product",
            message: "Ypp would like to take a picture of your product"
          }).then(async () => {
            await launchCamera(options, response => {
              if (response.didCancel) {
                console.log('User cancelled camera');
              } else if (response.error) {
                console.log('Camera Error: ', response.error);
              } else {
                let imageUri = response.uri || response.assets?.[0];
                // SetImage1(imageUri)
                SetUserProfilePic(imageUri)
                console.log('Inside = ', imageUri);
              }
            })
          })
          break;
        case RESULTS.LIMITED:
          console.log('The permission is limited: some actions are possible');
          break;
        case RESULTS.GRANTED:
          console.log('granteed')
          await launchCamera(options, response => {
            if (response.didCancel) {
              console.log('User cancelled camera');
            } else if (response.error) {
              console.log('Camera Error: ', response.error);
            } else {
              let imageUri = response.uri || response.assets?.[0];
              // SetImage1(imageUri)
              SetUserProfilePic(imageUri)
              console.log('Inside = ', imageUri);
            }
          })
          break;
        case RESULTS.BLOCKED:
          console.log('The permission is denied and not requestable anymore');
          break;
      }
    })
      .catch((error) => {
        console.log('Inside Error--==', error)
      });
  }



  return (
    <View style={{ flex: 1, backgroundColor: Whitecolor }}>
      <Modal transparent={true} visible={UserPicModal}
        animationType='fade'
        onRequestClose={() => {
          SetUserPicModal(false)
        }}
      >
        <Pressable style={{ flex: 1, backgroundColor: LightBlackcolor }}
          onPress={() => {
            SetUserPicModal(false)
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', backgroundColor: Whitecolor, position: 'absolute', bottom: 0, width, paddingVertical: width * 0.04, borderTopRightRadius: width * 0.045, borderTopLeftRadius: width * 0.045 }}>
            <TouchableOpacity
              onPress={() => {
                SetUserPicModal(false)
                OpenCamera()
              }}
            >
              <Image source={require('../Assets/cam.png')} style={{ width: width * 0.14, resizeMode: 'contain', height: width * 0.14 }} />
              <Text style={{ fontFamily: 'Poppins-Medium', color: Blackcolor }}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {

                SetUserPicModal(false)
                OpenGallery()
              }}
            >
              <Image source={require('../Assets/photo.png')} style={{ width: width * 0.14, resizeMode: 'contain', height: width * 0.14 }} />
              <Text style={{ fontFamily: 'Poppins-Medium', color: Blackcolor }}>Gallery</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
      <View style={{ marginTop: width * 0.06, marginBottom: width * 0.1 }}>
        <BackButtonHeader txt={"Signup"} navigation={navigation} />
      </View>
      <View style={{ flex: 1, marginBottom: width * 0.01, alignItems: 'center' }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginTop: width * 0.06,alignSelf:'center', paddingVertical: width * 0.02 }}>
          <Text style={styles.InputTitle}>Profile Pic</Text>
            <TouchableOpacity style={{ width: width * 0.88, height: width * 0.4, borderColor: LightBlackcolor, borderWidth: 1, borderRadius: width * 0.02, backgroundColor: LightLightBlackcolor, borderStyle: "dashed", alignItems: 'center', justifyContent: 'center' }}
              onPress={() => SetUserPicModal(true)}
            >
              {UserProfilePic?<Image
              source={{uri:UserProfilePic.uri}}
              style={{ width: width * 0.88, height: width * 0.4,borderRadius: width * 0.02,resizeMode:'contain'}}
              />:<Ionicons name="add-circle" size={24} color="black" />}
            </TouchableOpacity>
          </View>
          <View style={{ paddingVertical: width * 0.02 }}>
            <Text style={styles.InputTitle}>Name</Text>
            <View style={styles.TextInputView}>
              <AntDesign name="user" size={width * 0.056} color={LightBlackcolor} />
              <TextInput
                placeholder='Sample'
                placeholderTextColor={LightBlackcolor}
                style={styles.ConTextin}
              />
            </View>
          </View>
          <View style={{ paddingVertical: width * 0.02 }}>
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
            <Text style={styles.InputTitle}>Phone</Text>
            <View style={styles.TextInputView}>
              <Ionicons name="call-outline" size={width * 0.056} color={LightBlackcolor} />
              <TextInput
                placeholder='+91 XXXXXXXXXX'
                placeholderTextColor={LightBlackcolor}
                style={styles.ConTextin}
              />
            </View>
          </View>
          <View style={{ paddingVertical: width * 0.02 }}>
            <Text style={styles.InputTitle}>Location</Text>
            <View style={styles.TextInputView}>
              <Ionicons name="location-outline" size={width * 0.056} color={LightBlackcolor} />
              <TextInput
                placeholder='Location'
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
          </View>
          <View style={{ marginTop: width * 0.14 }}>
            <BlackButton txt={"Register"} HandleFunc={HandleFunction} />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: width * 0.08 }}>
            <Text style={{ fontFamily: 'Poppins-Medium', color: Blackcolor }}>{'Already have an account ? '}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginScreen')}
            >
              <Text style={{ fontFamily: 'Poppins-Medium', color: DarkOrangecolor }}>Login !</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
  TextInputView: { flexDirection: 'row', alignItems: 'center', backgroundColor: LightLightBlackcolor, paddingHorizontal: width * 0.016, width: width * 0.88, borderRadius: width * 0.022 },
  ConTextin: { fontFamily: 'Poppins-Regular', color: Blackcolor, fontSize: getFontSize(13), width: width * 0.75, marginLeft: width * 0.01 },
  InputTitle: { fontFamily: 'Poppins-SemiBold', color: Blackcolor, fontSize: getFontSize(14) }
})