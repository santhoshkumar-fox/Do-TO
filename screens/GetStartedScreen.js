import {Image, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, IMAGES, SIZE} from '../constants';
import Animated, {FadeIn, FadeInLeft, FadeInUp, LinearTransition, SlideInDown, SlideInLeft, ZoomIn} from 'react-native-reanimated';
import Feather from 'react-native-vector-icons/Feather';
import { BlurView } from '@react-native-community/blur';
const GetStartedScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar hidden />
      {/* bgContainer */}
      <View style={StyleSheet.absoluteFill}>
        {/* animation-sl */}
        <Animated.View entering={FadeIn.springify()} style={{flex: 3, backgroundColor: 'black'}}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={IMAGES.sparkles}
          />
          {/* animation-pendol */}
          <Animated.View entering={FadeInUp.delay(300).duration(2000)} style={[StyleSheet.absoluteFill]}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={IMAGES.god_ray}
            />
          </Animated.View>
        </Animated.View>
        {/* empty space */}
        <View style={{flex: 1.2}}></View>
      </View>
      {/* content */}
      <Animated.View
      
       style={styles.contentContainer}>
        {/* logo */}
        <Animated.View
        sharedTransitionTag="sharedTag"
        layout={LinearTransition}
         style={{width: 132, height: 59}}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={IMAGES.wato_logo}
          />
        </Animated.View>
        {/* des */}
        <Animated.View
        
         style={{width: SIZE.width - 50,marginTop:24}}>
         
          <Animated.View
          entering={SlideInLeft.delay(1500).springify().damping(14).stiffness()}
          >
          <Text style={{...FONTS.title01,color:"white"}}>Zero Cost</Text>
          </Animated.View>
          <Animated.View
           entering={SlideInLeft.delay(1600).springify().damping(14).stiffness()}
          >
          <Text style={{...FONTS.title01,color:"white"}}>WhatsApp Messaging</Text>
          </Animated.View>
          <Animated.View
           entering={SlideInLeft.delay(1700).springify().damping(14).stiffness()}
          >
          <Text style={{...FONTS.title01,color:"white"}}>platform</Text>
          </Animated.View>
        </Animated.View>
        {/* button container */}
        <Animated.View
           layout={LinearTransition.duration(700)}
          //  entering={SlideInDown.delay(2000).springify().damping(14).stiffness()}
         style={{width:'100%',alignItems:"center",justifyContent:"center",paddingVertical:SIZE.padding,marginTop:72}}>
           {/* blur button */}
           <TouchableOpacity
           onPress={()=>{
            navigation.navigate('signUp')
           }}
            activeOpacity={.9} style={{
            width:'100%',
            height:48,
            borderRadius:SIZE.radius,
            // backgroundColor:COLORS.primarColor,
            alignItems:"center",
            justifyContent:"center",
            borderWidth:1,
            borderColor:'white',
            overflow:"hidden"
           }}>
           {/* blur */}
           <View style={[StyleSheet.absoluteFill,{}]}>
           <View style={[StyleSheet.absoluteFill,{borderWidth:4,borderRadius:SIZE.radius,
            borderColor:'rgba(255,255,255,.2)',}]}/>
           <BlurView
        style={[StyleSheet.absoluteFill,{opacity:.7}]}
        blurType="light"
        blurAmount={13}
        reducedTransparencyFallbackColor="white"
      />
           </View>
           <Text style={{...FONTS.body02,color:"white"}}>Get Started</Text>


           </TouchableOpacity>

           <View style={{width:"100%",alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
           <Text style={{...FONTS.lable03,color:COLORS.greyColor,marginVertical:SIZE.margin}}>Already have an account?</Text>
           <TouchableOpacity 
           onPress={()=>{
            navigation.navigate('signIn')
           }}
           >
           <Text style={{...FONTS.lable03,color:COLORS.primarColor,marginLeft:3}}>Sign in instead</Text>
           </TouchableOpacity>

           </View>
        </Animated.View>
      </Animated.View>
    </View>
  );
};



export default GetStartedScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  contentContainer: {
    flex: 1,
    padding:SIZE.margin,
    flexDirection:"column",
    // alignItems:'center',
    justifyContent:"flex-end",
    marginBottom:SIZE.height * .1
  },
});
