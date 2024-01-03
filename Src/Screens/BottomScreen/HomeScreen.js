import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Blackcolor, DarkOrangecolor, LightBlackcolor, LightLightBlackcolor, Whitecolor } from '../../Components/Colors'
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { getFontSize } from '../../Components/UiComps';
const { width, height } = Dimensions.get('window')
import Carousel, { Pagination } from 'react-native-snap-carousel';

const Slide = [
  {
    id: 1,
    img: require('../../Assets/audi.png')
  },
  {
    id: 2,
    img: require('../../Assets/bmw.png')
  },
  {
    id: 3,
    img: require('../../Assets/lambo.png')
  },
  {
    id: 4,
    img: require('../../Assets/mers.png')
  },
  {
    id: 5,
    img: require('../../Assets/audi.png')
  },
  {
    id: 6,
    img: require('../../Assets/bmw.png')
  },
  {
    id: 7,
    img: require('../../Assets/lambo.png')
  },
  // {
  //   id: 5,
  //   img: require('../../Assets/toyota.jpg')
  // },
]
const CarSlide = [
  {
    id: 1,
    img: require('../../Assets/tyre.png'),
    name:"Hatchback"
  },
  {
    id: 2,
    img: require('../../Assets/tyre.png'),
    name:"SUV"
  },
  {
    id: 3,
    img: require('../../Assets/tyre.png'),
    name:"Hatchback"
  },
  {
    id: 4,
    img: require('../../Assets/tyre.png'),
    name:"Hatchback"
  },
  {
    id: 5,
    img: require('../../Assets/tyre.png'),
    name:"Hatchback"
  },
  {
    id: 6,
    img: require('../../Assets/tyre.png'),
    name:"Hatchback"
  },
  {
    id: 7,
    img: require('../../Assets/tyre.png'),
    name:"Hatchback"
  },
  // {
  //   id: 5,
  //   img: require('../../Assets/toyota.jpg')
  // },
]


const banner = [
  {
    id: 1,
    img: require('../../Assets/banner1.jpg'),
  },
  {
    id: 2,
    img: require('../../Assets/banner2.jpg'),
  },
]
const HomeScreen = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  const PaginationView = () => {

    return (
      <Pagination
        dotsLength={banner.length}
        activeDotIndex={activeSlide}
        containerStyle={{ paddingVertical: 10 }}
        dotStyle={{

          marginTop: width * 0.04,
          backgroundColor: '#4F4F4F'
        }}
        inactiveDotStyle={{
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: Whitecolor }}>
      <ScrollView>
      <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: "row", marginTop: width * 0.06, paddingHorizontal: width * 0.03 }}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="location-outline" size={width * 0.066} color="black" />
          <Text style={{ fontFamily: 'Poppins-Medium', color: Blackcolor, width: width * 0.5, marginLeft: width * 0.01 }}>Singarbhat kanker chhattisgarh near gpndawanan cg bastar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../Assets/ppic.jpg')} style={{ width: width * 0.2, height: width * 0.2, borderRadius: width * 0.02 }} />
        </TouchableOpacity>
      </View>
      <View style={{ alignSelf: 'center',flex:1 }}>
        <Carousel
          loop={true}
          autoplay={true}
          autoplayDelay={2000}
          autoplayInterval={2000}
          layout={'default'}
          sliderWidth={width}
          slideStyle={{ width: width }}
          itemWidth={width}
          data={banner}
          renderItem={({ item }) => {
            return (
              <View style={{ width, alignItems: 'center' }}>
                <Image source={item.img} style={{ width: width * 0.9, height: width * 0.5, resizeMode: 'contain' }} />
              </View>
            )
          }}
          onSnapToItem={(index) => setActiveSlide(index)}
        />
        {/* <PaginationView /> */}
        {/* <Text style={{fontFamily:'Poppins-SemiBold',color:Blackcolor,fontSize:getFontSize(18)}}>Find Your Favourite Car !</Text>
        <TouchableOpacity style={{backgroundColor:LightLightBlackcolor,paddingHorizontal:width*0.02,flexDirection:'row',alignItems:'center',width:width*0.94,borderRadius:width*0.02}}>
        <FontAwesome name="search" size={width*0.06} color={LightBlackcolor} />
        <TextInput 
        placeholder='Search'
        style={{fontFamily:'Poppins-Medium',marginLeft:width*0.01,fontSize:getFontSize(14),color:Blackcolor,width:width*0.8}}
        />
        </TouchableOpacity> */}
      </View>
      <View style={{  paddingHorizontal: width * 0.03,}}>
        <Text style={{ fontFamily: 'Poppins-SemiBold', color: Blackcolor, fontSize: getFontSize(18) }}>Top Brands</Text>
        <FlatList
          data={Slide}
          horizontal
          // numColumns={4}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={{ marginRight: width * 0.024,marginVertical:width*0.02,borderRadius:100,padding:width*0.03,backgroundColor:LightLightBlackcolor }}>
                <Image source={item.img} style={{ width: width * 0.1, height: width * 0.1, resizeMode: 'contain' }} />
              </TouchableOpacity>
            )
          }}
        />
      </View>
      <View style={{  paddingHorizontal: width * 0.03,}}>
        <Text style={{ fontFamily: 'Poppins-SemiBold', color: Blackcolor, fontSize: getFontSize(18) }}>Car Types</Text>
        <FlatList
          data={CarSlide}
          horizontal
          // numColumns={4}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={{ marginRight: width * 0.024,marginVertical:width*0.02,borderRadius:100,padding:width*0.03,backgroundColor:LightLightBlackcolor ,alignItems:'center'}}>
                {/* <Image source={item.img} style={{opacity:0.8 , width: width * 0.1, height: width * 0.1, resizeMode: 'contain' }} /> */}
                <Text style={{fontFamily:'Poppins-Medium',color:Blackcolor}}>{item.name}</Text>
              </TouchableOpacity>
            )
          }}
        />
      </View>
      <View style={{ marginTop: width * 0.06, paddingHorizontal: width * 0.03 }}>
        <Text style={{ fontFamily: 'Poppins-SemiBold', color: Blackcolor, fontSize: getFontSize(18) }}>Fuel Types</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <TouchableOpacity style={{ alignItems: 'center', borderColor: DarkOrangecolor, borderWidth: 1, height: width * 0.22,backgroundColor:LightLightBlackcolor, width: width * 0.22, borderRadius: width * 0.02, justifyContent: 'center' }}>
            <Image source={require('../../Assets/gas-station.png')} style={{ width: width * 0.1, height: width * 0.1, resizeMode: 'contain' }} />
            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: getFontSize(14), color: Blackcolor }}>Diesel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center', borderColor: DarkOrangecolor, borderWidth: 1, height: width * 0.25,backgroundColor:LightLightBlackcolor, width: width * 0.25, borderRadius: width * 0.02, justifyContent: 'center' }}>
            <Image source={require('../../Assets/petrol.png')} style={{ width: width * 0.1, height: width * 0.1, resizeMode: 'contain' }} />
            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: getFontSize(14), color: Blackcolor }}>Petrol</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center', borderColor: DarkOrangecolor, borderWidth: 1, height: width * 0.22, width: width * 0.22, borderRadius: width * 0.02, justifyContent: 'center',backgroundColor:LightLightBlackcolor }}>
            <Image source={require('../../Assets/fuel.png')} style={{ width: width * 0.1, height: width * 0.1, resizeMode: 'contain' }} />
            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: getFontSize(14), color: Blackcolor }}>Cng</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: width * 0.06, paddingHorizontal: width * 0.03 }}>
        <Text style={{ fontFamily: 'Poppins-SemiBold', color: Blackcolor, fontSize: getFontSize(18) }}>Car Buy/Sell</Text>
        <View style={{ }}>
          <TouchableOpacity style={{ alignItems: 'center', borderColor: Blackcolor, borderWidth: 1, height: width * 0.22,backgroundColor:LightLightBlackcolor, borderRadius: width * 0.02,marginVertical:width*0.02, justifyContent: 'center',flexDirection:'row' }}>
            <Image source={require('../../Assets/car-rental.png')} style={{ width: width * 0.16, height: width * 0.16, resizeMode: 'contain' }} />
            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: getFontSize(18),marginLeft:width*0.02, color: Blackcolor }}>Rent a Car</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={{ alignItems: 'center', borderColor: DarkOrangecolor, borderWidth: 1, height: width * 0.25,backgroundColor:LightLightBlackcolor, width: width * 0.25, borderRadius: width * 0.02, justifyContent: 'center' }}>
            <Image source={require('../../Assets/petrol.png')} style={{ width: width * 0.1, height: width * 0.1, resizeMode: 'contain' }} />
            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: getFontSize(14), color: Blackcolor }}>Petrol</Text>
          </TouchableOpacity> */}
          <TouchableOpacity style={{ alignItems: 'center', borderColor: Blackcolor, borderWidth: 1, height: width * 0.22,backgroundColor:LightLightBlackcolor, borderRadius: width * 0.02,marginVertical:width*0.02, justifyContent: 'center',flexDirection:'row' }}>
            <Image source={require('../../Assets/new-car.png')} style={{ width: width * 0.16, height: width * 0.16, resizeMode: 'contain' }} />
            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: getFontSize(18),marginLeft:width*0.02, color: Blackcolor }}>Buy a Car</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    // borderRadius: 8
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
})