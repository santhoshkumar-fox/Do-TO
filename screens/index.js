import {
    createStackNavigator,
  } from '@react-navigation/stack';
  import { useNavigation } from '@react-navigation/native';
import GetStartedScreen from './GetStartedScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import Animated from 'react-native-reanimated';
import { useEffect } from 'react';
import { Image, View } from 'react-native';
import { IMAGES } from '../constants';
  
  const Stack = createStackNavigator();
  
  // Splash
  
  const Screen = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="getStarted" component={GetStartedScreen} options={{animationEnabled:true,gestureDirection:"horizontal",animationTypeForReplace:"pop"}}/>
        <Stack.Screen name="signIn" component={SignInScreen} options={{animationEnabled:true,presentation:'modal',gestureDirection:"horizontal"}}/>
        <Stack.Screen name="signUp" component={SignUpScreen} options={{animationEnabled:true,presentation:'modal',gestureDirection:"horizontal"}}/>
      </Stack.Navigator>
    );
  };
  
  export default Screen;
  