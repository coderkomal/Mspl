import { useScrollToTop } from '@react-navigation/native';
import React from 'react';
import { useState,useEffect } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import Path from '../../Constant/ImagePath'

const Splash = ({navigation}) => {


  useEffect(() => {
    
    setTimeout(() => {
      navigation.navigate("Login")
    }, 2000);
    
  }, [])

  return (
    <View>
      <ImageBackground source={Path.Backgroundimage}
        style={styles.ImageBackgroundStyle1}>
        <View>
          <Image source={Path.logo} style={styles.LogoStyle}></Image>
        </View>
        <View style={{ alignSelf: "center", marginTop: "5%", marginBottom: "5%" }}>
          <Text style={styles.TextStyle1}>G O L F  F L I P</Text>

        </View>

      </ImageBackground>
    </View>

  )
}
export default Splash;
const styles = StyleSheet.create({
  ImageBackgroundStyle1: {
    height: "100%",
    width: "100%"
  },
  LogoStyle: {
    width: 120,
    alignSelf: 'center',
    height: 120,
    marginTop: "60%"

  },
  TextStyle1: {
    flex: 1,
    color: "white",
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold",
    bottom: 20
  },
})