import { Dimensions, FlatList, Image, Modal, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Blackcolor, DarkOrangecolor, LightBlackcolor, LightLightBlackcolor, Whitecolor } from '../../Components/Colors'
import { BackButtonHeader, BlackButton, getFontSize } from '../../Components/UiComps'
const { width, height } = Dimensions.get('window')
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { PERMISSIONS, RESULTS, check, request } from 'react-native-permissions'


const Slide = [
  {
    id: 1,
    image: require('../../Assets/bmw.png'),
    name: "Bmw M8",
    color: "silver",
    rate: 1400000,
    for: "For Sale"
  },
  {
    id: 2,
    image: require('../../Assets/bmw.png'),
    name: "Bmw i8",
    color: "red",
    rate: 8400000,
    for: "For Rent"
  },
  {
    id: 3,
    image: require('../../Assets/bmw.png'),
    name: "Bmw M3",
    color: "silver",
    rate: 1400000,
    for: "For Sale"
  },
  {
    id: 4,
    image: require('../../Assets/bmw.png'),
    name: "Bmw M6",
    color: "silver",
    rate: 1400000,
    for: "For Sale"
  },
  {
    id: 5,
    image: require('../../Assets/bmw.png'),
    name: "Bmw X6",
    color: "silver",
    rate: 1400000,
    for: "For Sale"
  },
  {
    id: 6,
    image: require('../../Assets/bmw.png'),
    name: "Bmw X6 M Sports",
    color: "yellow",
    rate: 9400000,
    for: "For Sale"
  },
  {
    id: 7,
    image: require('../../Assets/bmw.png'),
    name: "Bmw M2",
    color: "blue",
    rate: 4400000,
    for: "For Rent"
  },
  {
    id: 8,
    image: require('../../Assets/bmw.png'),
    name: "Bmw M6 X Sports",
    color: "silver",
    rate: 1400000,
    for: "For Sale"
  },
  {
    id: 9,
    image: require('../../Assets/bmw.png'),
    name: "Bmw SUV",
    color: "silver",
    rate: 1400000,
    for: "For Sale"
  },
  {
    id: 10,
    image: require('../../Assets/bmw.png'),
    name: "Bmw Guv",
    color: "silver",
    rate: 8800000,
    for: "For Sale"
  },
]

const WishlistScreen = () => {
  const [OptionsModal, SetOptionsModal] = useState(false)

  
  const EmpytComp=()=>{
    return(
      <View>
        <Text style={{fontFamily:"Poppins-Medium",fontSize:getFontSize(16),textAlign:'center',color:Blackcolor,marginTop:width*0.04}}>Not Found Any Cars</Text>
        <Image source={require('../../Assets/no-content.png')} style={{width:width*0.8,height:width*0.8,resizeMode:'contain'}}/>
      </View>
    )
  }


  return (
    <View style={{ flex: 1, backgroundColor: Whitecolor }}>
      <Modal transparent={true}
        animationType='fade'
        visible={OptionsModal}
        onRequestClose={() => {
          SetOptionsModal(false)
        }}
      >
        <Pressable style={{ flex: 1, backgroundColor: LightBlackcolor }}
          onPress={() => {
            SetOptionsModal(false)
          }}
        >
          <View style={{ backgroundColor: Whitecolor, width: width * 0.44, alignItems: 'center', paddingVertical: width * 0.024, borderRadius: width * 0.02, position: 'absolute', alignSelf: 'flex-end', marginTop: width * 0.11, right: width * 0.1 }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: width * 0.01 }}>
              <FontAwesome5 name="car" size={24} color={Blackcolor} />
              {/* <Ionicons name="exit-outline" size={24} color={DarkOrangecolor} /> */}
              <Text style={{ fontFamily: 'Poppins-Medium', color: Blackcolor, marginLeft: width * 0.01 }}>Sedan Car</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: width * 0.02 }}>
              <FontAwesome5 name="car" size={24} color={Blackcolor} />
              {/* <Ionicons name="exit-outline" size={24} color={DarkOrangecolor} /> */}
              <Text style={{ fontFamily: 'Poppins-Medium', color: Blackcolor, marginLeft: width * 0.01 }}>Hatchback Car</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: width * 0.02 }}>
              <FontAwesome5 name="car" size={24} color={Blackcolor} />
              {/* <Ionicons name="exit-outline" size={24} color={DarkOrangecolor} /> */}
              <Text style={{ fontFamily: 'Poppins-Medium', color: Blackcolor, marginLeft: width * 0.01 }}>SUV Car</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: width * 0.066, marginVertical: width * 0.06, width }}>
        <View style={{ flexDirection: 'row' }}>
          <AntDesign name="heart" size={width * 0.06} color={LightBlackcolor} />
          <Text style={{ fontFamily: 'Poppins-Medium', marginLeft: width * 0.02, color: LightBlackcolor, fontSize: getFontSize(15) }}>Your Favourite Cars</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            SetOptionsModal(true)
          }}
        >
          <Entypo name="dots-three-horizontal" size={24} color={LightBlackcolor} />
        </TouchableOpacity>
      </View>

      <View style={{ backgroundColor: LightLightBlackcolor, width: width * 0.88, height: width * 0.004, alignSelf: 'center' }} />
      <View style={{ flex: 1,alignItems:'center', }}>
        <FlatList
        showsVerticalScrollIndicator={false}
          data={Slide}
          ListEmptyComponent={EmpytComp}
          renderItem={({ item }) => {
            return (
              <View style={{flexDirection:'row',backgroundColor:Whitecolor,alignItems:'center',width:width*0.92,paddingVertical:width*0.02,borderColor:Blackcolor,borderWidth:0.2,borderRadius:width*0.04,paddingHorizontal:width*0.02,marginVertical:width*0.014}}>
                <View>
                  <Image source={item.image} style={{ width: width * 0.24, resizeMode: 'contain', height: width * 0.24, backgroundColor: LightLightBlackcolor, borderRadius: width*0.04 }} />
                </View>
                <View style={{marginLeft:width*0.04}}>
                  <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: getFontSize(15),width:width*0.6, color: Blackcolor}}>{item.name}</Text>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                      <View style={{ width: width * 0.03, height: width * 0.03, backgroundColor: item.color, borderRadius: 100 }} />
                      <Text style={{ fontFamily: 'Poppins-Medium', fontSize: getFontSize(13), marginLeft: width * 0.01, color: Blackcolor,width:width*0.3 }}>{item.color}</Text>
                    </View>
                    <View>
                      <Text style={{fontFamily:'Poppins-Medium',marginLeft:width*0.04,color:Blackcolor,backgroundColor:LightLightBlackcolor,paddingVertical:width*0.014,borderRadius:width*0.02,paddingHorizontal:width*0.02}}>{item.for}</Text>
                    </View>
                  </View>
                  <View style={{flexDirection:'row',alignItems:'center',marginTop:width*0.02}}>
                    {/* <View style={{ flexDirection: "row", alignItems: 'center' }}> */}
                      {/* <View style={{ width: width * 0.03, height: width * 0.03, backgroundColor: item.color, borderRadius: 100 }} /> */}
                      <Text style={{ fontFamily: 'Poppins-Medium',width:width*0.3, fontSize: getFontSize(13), marginLeft: width * 0.01, color: Blackcolor }}>{'\u20A8'+' '+item.rate}</Text>
                    {/* </View> */}
                    <TouchableOpacity style={{backgroundColor:Blackcolor,paddingVertical:width*0.02,paddingHorizontal:width*0.02,borderRadius:100}}>
                      <Text style={{fontFamily:'Poppins-Medium',color:Whitecolor,borderRadius:width*0.02}}>{'View Details'}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )
          }}
        />
      </View>
    </View>
  )
}

export default WishlistScreen

const styles = StyleSheet.create({})