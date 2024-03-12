import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SIZE, FONTS, COLORS, IMAGES} from '../constants';
import InputText from '../components/InputText';
import Feather from 'react-native-vector-icons/Feather';
import Animated, { Easing, LinearTransition, SlideInDown, interpolate, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import { BlurView } from '@react-native-community/blur';
const SignInScreen = ({navigation}) => {
  const [isSecure, setIsSecure] = useState(true);
  const bgAnimation = useSharedValue(0);
  const [cred, setCred] = useState({
    email: '',
    password: '',
  });
  return (
    <View style={styles.mainContainer}>
      <Animated.View entering={SlideInDown.delay(300).springify().damping(14).stiffness()} layout={LinearTransition} style={{width:'100%',marginBottom:32}}>
      <Text style={{...FONTS.body01, color: 'white'}}>
        Please sign-in to your account
      </Text>
      </Animated.View>
      {/* login container */}
      <Animated.View entering={SlideInDown.delay(400).springify().damping(14).stiffness()} layout={LinearTransition} style={styles.loginContainer}>
        
        {/* blur */}
        <View style={[StyleSheet.absoluteFill,{}]}>
          <Animated.View style={[{width:'50%',height:'60%',backgroundColor:COLORS.primarColor30,position:'absolute',right:-40,top:-100,borderTopLeftRadius:140,borderTopRightRadius:40,borderBottomLeftRadius:120,borderBottomRightRadius:100,},
          ]}/>
          <BlurView
        style={[StyleSheet.absoluteFill,{opacity:.98}]}
        blurRadius={5}
        // blurAmount={1}
        // blurType='light'
        reducedTransparencyFallbackColor="white"
      />
        </View>
        
        <InputText
          initialvalue={cred.email}
          secureTextEntry={false}
          leftIcon={
            <Feather name={'at-sign'} size={15} color={'white'} />
          }
          containerStyle={{marginBottom: 12}}
          onChangeCallback={(text, i) => {
            setCred(e => ({...e, email: text}));
          }}
          placeholder={'Email'}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <InputText
          initialvalue={cred.password}
          secureTextEntry={isSecure}
          placeholder={'Password'}
          leftIcon={
            <Feather name={'lock'} size={15} color={'white'} />
          }
          rightIcon={
            <TouchableOpacity
              style={{
                height: '100%',
                width: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                setIsSecure(!isSecure);
              }}>
              {isSecure ? (
                <Feather name={'eye'} size={15} color={'white'} />
              ) : (
                <Feather name={'eye-off'} size={15} color={'white'} />
              )}
            </TouchableOpacity>
          }
          containerStyle={{marginBottom: 12}}
          onChangeCallback={(text, i) => {
            setCred(e => ({...e, password: text}));
          }}
        />
        <Animated.View
        entering={SlideInDown.delay(400).springify().damping(14).stiffness()}
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity>
            <Text
              style={{
                ...FONTS.lable03,
                color: COLORS.primarColor,
                marginLeft: 3,
                marginBottom: 42,
              }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
         entering={SlideInDown.delay(500).springify().damping(14).stiffness()}
         style={{width: '100%'}}>
         {/* button */}
         <View
            style={{
              width: '100%',
              height: 48,
              borderRadius: SIZE.radius,
              overflow: 'hidden',
            }}>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.primarColor,
              }}>
              <Text style={{...FONTS.lable01, color: 'black'}}>Login</Text>
            </TouchableOpacity>
          </View>
          {/* BTN label */}
          <Animated.View
          entering={SlideInDown.delay(600).springify().damping(14).stiffness()}
           style={{width:"100%",alignItems:"center",justifyContent:"center",flexDirection:"row"}}>
           <Text style={{...FONTS.lable03,color:COLORS.textColor,marginVertical:SIZE.margin}}>New to our platform?</Text>
           <TouchableOpacity 
           onPress={()=>{
            navigation.navigate('signUp')
           }}
           >
           <Text style={{...FONTS.lable03,color:COLORS.primarColor,marginLeft:3}}>Create an account</Text>
           </TouchableOpacity>

           </Animated.View>
        </Animated.View>
        {/* or label */}
        <Animated.View
        entering={SlideInDown.delay(600).springify().damping(14).stiffness()}
         style={{width:"100%",alignItems:"center",justifyContent:"center",marginBottom:24}}>
          <Text style={{...FONTS.lable03,color:COLORS.textColor}}>Or</Text>
        </Animated.View>


           {/* google signin button */}
           <Animated.View
           entering={SlideInDown.delay(700).springify().damping(14).stiffness()}
            style={{
              width: '100%',
              height: 48,
              borderColor:'white',
              borderWidth:1,

                borderRadius:4,
              overflow: 'hidden',
            }}>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection:"row"
                
              }}>
              <View style={{width:18,height:18,marginRight:9}}>
              <Image style={{width:'100%',height:"100%"}} source={IMAGES.google_logo}/>

              </View>
              <Text style={{...FONTS.lable01, color:'white'}}>Continue with Google</Text>
            </TouchableOpacity>
          </Animated.View>

        
      </Animated.View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SIZE.margin,
    backgroundColor: 'black',
  },
  loginContainer: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: SIZE.radius,
    backgroundColor: 'rgba(255,255,255,.4)',
    overflow:"hidden"
  },
});
