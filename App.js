import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackp from './app/navigation/Stacknavigation';

export default function App() {
  return (
    <NavigationContainer>
      <MainStackp></MainStackp>
    </NavigationContainer>
  );
}