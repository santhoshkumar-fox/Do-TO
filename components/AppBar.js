import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SIZE,FONTS,COLORS } from '../constants'
import { BlurView } from '@react-native-community/blur'
import Feather from "react-native-vector-icons/Feather"
import Animated, { SlideInLeft, SlideInUp, SlideOutUp } from 'react-native-reanimated'
import { TOAST_STATUS, showToast } from './toasts'
const AppBar = ({user}) => {
  return (
    <Animated.View entering={SlideInUp} exiting={SlideOutUp} style={styles.mainContainer}>
     {/* profile */}

     <View style={{flex:1,height:'100%',alignItems:"center",flexDirection:"row"}}>
     <View style={{width:25,height:25,backgroundColor:COLORS.primarColor,borderRadius:15,alignItems:"center",justifyContent:"center"}}>
        <Text style={{...FONTS.lable03}}>{String((user?.name?.split(' '))?.map((el)=>(el?.[0])).join()).toLocaleUpperCase()}</Text>
     </View>
     <Animated.View entering={SlideInLeft.delay(300)} style={{flexDirection:"row",alignItems:"center",overflow:"hidden"}} >
        
        <Text numberOfLines={1} ellipsizeMode='tail' style={{...FONTS.lable01,marginLeft:10,color:"white"}}>Hola,</Text>
       
       <Text numberOfLines={1} ellipsizeMode='tail' style={{...FONTS.lable03,marginLeft:5,color:"white"}}>{(user.name)}</Text>
     </Animated.View>
     </View>

     {/* notifications */}

     <View style={{width:60,height:50,paddingRight:10}}>
     <TouchableOpacity
     onPress={()=>{
      showToast(TOAST_STATUS.info,"Team Invitation WIP",null)
      }}
      style={{flex:1,flexDirection:"row",justifyContent:"flex-end",alignItems:"center"}}>

     <Feather name={'bell'} color={'white'} size={20}/>
     <View style={{width:10,borderWidth:2,borderColor:"black",height:10,position:"absolute",top:10,right:0,backgroundColor:"red",borderRadius:10}}>

     </View>
     </TouchableOpacity>

     </View>

     
     

     
    </Animated.View>
  )
}

export default AppBar

const styles = StyleSheet.create({
    mainContainer:{
        width:SIZE.width,
        height:50,
        backgroundColor:"black",
        // borderBottomColor:"white",
        // borderBottomWidth:StyleSheet.hairlineWidth,
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:10,
    }
})