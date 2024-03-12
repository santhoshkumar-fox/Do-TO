import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import GetStartedScreen from './screens/GetStartedScreen'
import 'react-native-gesture-handler';
import Screens from './screens'
import { NavigationContainer } from '@react-navigation/native';
import BootSplash from "react-native-bootsplash";
import { IMAGES } from './constants';
const App = () => {
  

  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log("BootSplash has been hidden successfully");
    });
  }, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'black'}/>
      <Screens/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})