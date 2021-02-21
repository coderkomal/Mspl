import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../screens/splash';
import Login from '../screens/Login';
import  SignUp from '../screens/Signup';
import forgetPassword  from '../screens/ForgetPassword';
import  otpScreen from '../screens/0tpScreen';
import changePassword from '../screens/chnagePassword';
import  practicScreen from '../screens/practicScreen';
// import { exp } from 'react-native/Libraries/Animated/src/Easing';
// import { View } from 'react-native';
const Stack = createStackNavigator();

const MainStackp=()=>{
return(

      <Stack.Navigator>
          <Stack.Screen
         name="Splash" 
        component={Splash} 
         options={{headerShown:false}}/> 
     
        <Stack.Screen
         name="Login"
          component={Login} 
          options={{headerShown:false}}/> 

<Stack.Screen
         name="SignUp"
          component={SignUp} 
          options={{headerShown:false}}/>

<Stack.Screen
         name="forgetPassword"
          component={forgetPassword} 
          options={{headerShown:false}}/>

 
<Stack.Screen
         name="otpScreen"
          component={otpScreen} 
          options={{headerShown:false}}/>
      
<Stack.Screen
         name="changePassword"
          component={changePassword} 
          options={{headerShown:false}}/> 

          
<Stack.Screen
         name="practicScreen"
          component={practicScreen} 
          options={{headerShown:false}}/>
          
      </Stack.Navigator>
 
)
}
export default MainStackp;