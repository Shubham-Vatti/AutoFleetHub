import { Animated, Dimensions, FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Blackcolor, LightBlackcolor, LightWhitecolor, Whitecolor } from '../Components/Colors'
import { getFontSize } from '../Components/UiComps'
const { width, height } = Dimensions.get('window')
import AsyncStorage from '@react-native-async-storage/async-storage';

const Slide = [
  {
    id: 1,
    img: require('../Assets/s1.jpg'),
    Title: "Welcome to Auto Fleet Hub",
    Desc: "Buy, Sell, or Rent Cars with ease. Get started in just a few steps!"
  },
  {
    id: 2,
    img: require('../Assets/s2.jpg'),
    Title: "Locate Cars Near You",
    Desc: "Enable location services to find cars available in your area. We'll help you discover the best deals nearby."
  },
  {
    id: 3,
    img: require('../Assets/s3.jpg'),
    Title: "Find Your Perfect Match",
    Desc: "Let's narrow down your search. Select the types of cars you're interested in - whether it's for buying or renting."
  },
]
let flatList1;
const WelcomeScreen = ({navigation}) => {
  const scrollX = useRef(new Animated.Value(0)).current
  const [currentIndex, setCurrentIndex] = useState(0)
  const onViewRef = React.useRef((viewableItems) => {
    setCurrentIndex(viewableItems.viewableItems[0].index)
  })
  const SkipButton = () => {
    if (flatList1 != undefined && flatList1 != null) {
      flatList1.scrollToOffset({ animated: true, offset: width * (3) })
      navigation.navigate('LoginScreen')
    }
  }
  const ClickedNext = () => {
    if (flatList1 != undefined && flatList1 != null) {
      flatList1.scrollToOffset({ animated: true, offset: width * (currentIndex + 1) })
    }
  }
  const ClickedBack = () => {
    if (flatList1 != undefined && flatList1 != null) {
      flatList1.scrollToOffset({ animated: true, offset: width * (currentIndex - 1) })
    }
  }

  const GetCurrentSlide = async () => {
    try {
      console.log('--asyncdata--', currentIndex.toString())
      await AsyncStorage.setItem('CurrentSlide', currentIndex.toString())
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    GetCurrentSlide()
  }, [currentIndex])


  return (
    <View style={{ flex: 1, backgroundColor: Blackcolor }}>
      <View>
        <FlatList
          data={Slide}
          ref={(flatList) => { flatList1 = flatList }}
          pagingEnabled
          bounces={false}
          onViewableItemsChanged={onViewRef.current}
          showsHorizontalScrollIndicator={false}
          keyExtractor={key => key.id.toString()}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 25,
            minimumViewTime: 200,
          }}
          scrollEventThrottle={16}
          decelerationRate={"normal"}
          horizontal
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false },
          )}
          scrollEnabled
          renderItem={({ item }) => {
            return (
              <ImageBackground source={item.img} style={{ height, width, paddingTop: width * 0.06, paddingHorizontal: width * 0.01 }}>
                {/* <Image source={} style={{ width: width * 0.8, height: width * 0.8, resizeMode: "contain" }} /> */}
                <Text style={{ color: Whitecolor, fontFamily: 'Poppins-Medium', fontSize: getFontSize(60), width: width * 0.88 }}>{item.Title}</Text>
                <Text style={{ color: Whitecolor, fontFamily: 'Poppins-Regular', fontSize: getFontSize(20), width: width * 0.88 }}>{item.Desc}</Text>
              </ImageBackground>
            )
          }}
        />
        <View style={{ alignItems: "center", zIndex: 4, bottom: width * 0.04, width, position: "absolute" }}>
          {/* <TouchableOpacity
            onPress={() =>{}}
          >
            <Text style={{ fontFamily: 'Poppins-Medium', fontSize: getFontSize(15) }}>Skip</Text>
          </TouchableOpacity> */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {Slide.map((ele, i) => {
              const inputRange = [(i - 1) * width, i * width, (i + 1) * width]
              const DotStyling = scrollX.interpolate({
                inputRange,
                outputRange: [6, 10, 6],
                extrapolate: 'clamp'

              })
              const bgColor = scrollX.interpolate({
                inputRange,
                outputRange: [LightWhitecolor, Whitecolor, LightWhitecolor],
                extrapolate: 'clamp'

              })
              return (
                <Animated.View key={ele.id} style={[{ width: DotStyling, margin: width * 0.008, height: DotStyling, backgroundColor: bgColor, borderRadius: 100,marginBottom:width*0.04 }]} />
              )
            })}
          </View>
          <TouchableOpacity
            style={{ backgroundColor: LightBlackcolor, width: width * 0.88, borderColor: Whitecolor, borderWidth: 0.4, paddingVertical: width * 0.04, borderRadius: width * 0.02 }}
            onPress={() => {
               currentIndex != 2 ? ClickedNext() : navigation.navigate('LoginScreen')
            }}
          >
            <Text style={{ fontFamily: 'Poppins-Medium', color: Whitecolor, fontSize: getFontSize(14), textAlign: 'center' }}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({})