import {
    createStackNavigator,
  } from '@react-navigation/stack';

import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

import Dashboard from './Dashboard';
  
  const Stack = createStackNavigator();
  
  // Splash
  
  const Screen = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="signIn" component={SignInScreen} options={{animationEnabled:true,presentation:'modal',gestureDirection:"horizontal"}}/>
        <Stack.Screen name="signUp" component={SignUpScreen} options={{animationEnabled:true,presentation:'modal',gestureDirection:"horizontal"}}/>
        <Stack.Screen name="dashboard" component={Dashboard} options={{animationEnabled:true,gestureDirection:"horizontal"}}/>
      </Stack.Navigator>
    );
  };
  
  export default Screen;
  