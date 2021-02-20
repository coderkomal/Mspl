import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../screens/splash';
import Login from '../screens/Login';
import  SignUp from '../screens/Signup';
// import { exp } from 'react-native/Libraries/Animated/src/Easing';
// import { View } from 'react-native';
const Stack = createStackNavigator();

const MainStackp=()=>{
return(

      <Stack.Navigator>
         {/* <Stack.Screen
         name="Splash" 
        component={Splash} 
         options={{headerShown:false}}/> 
     
        <Stack.Screen
         name="Login"
          component={Login} 
          options={{headerShown:false}}/> */}

<Stack.Screen
         name="SignUp"
          component={SignUp} 
          options={{headerShown:false}}/>

      </Stack.Navigator>
 
)
}
export default MainStackp;