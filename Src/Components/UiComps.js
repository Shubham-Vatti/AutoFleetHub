import { Dimensions, PixelRatio, Text, TouchableOpacity, View } from "react-native";
import { Blackcolor, Whitecolor } from '../Components/Colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
const { width, height } = Dimensions.get('window')

const fontScale = PixelRatio.getFontScale();
export const getFontSize = size => size / fontScale;



export const BackButtonHeader = ({txt,navigation}) => {
    return (

        <View style={{paddingHorizontal: width * 0.02, marginTop: width * 0.06  }}>
            <TouchableOpacity style={{ zIndex: 2 }}
                onPress={() => { navigation.goBack()}}
            >
                <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{ color: Blackcolor, zIndex: 1, fontFamily: 'Poppins-Medium', textAlign: "center", fontSize: getFontSize(18), position: 'absolute', width }}>{txt}</Text>
        </View>
    )
}

export const BlackButton=({txt,HandleFunc})=>{
    return(
        <View>
          <TouchableOpacity style={{backgroundColor:Blackcolor,paddingVertical:width*0.036,width:width*0.88,borderRadius:width*0.02}}
          onPress={()=>HandleFunc()}
          >
            <Text style={{color:Whitecolor,fontFamily:'Poppins-SemiBold',fontSize:getFontSize(15),textAlign:'center'}}>{txt}</Text>
          </TouchableOpacity>
        </View>
    )
}