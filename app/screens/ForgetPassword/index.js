import React from 'react'
import { useState } from 'react'
import { View, Text, Image, StyleSheet, ImageBackground, TextInput, Button, TouchableOpacity, Alert } from 'react-native'
import Path from '../../Constant/ImagePath'
const forgetPassword = ({navigation}) => {
    const UserData = { 
        email: "",
        phoneNumber: "",}

       
//  const{email,phoneNumber}=user
    const [user, setUser] = useState(UserData)
    const onChange = (feild, value) => {
        setUser({ ...user, [feild]: value })
    }
const submit=()=>{
    
if(user.email!==''&& user.phoneNumber==''||user.email==""&&user.phoneNumber!==""){
    navigation.navigate("Login")}

else if(user.email===""&&user.phoneNumber===""){

        Alert.alert("please fill a feild")

}else if(user.email!==''&&user.phoneNumber!==''){
Alert.alert("choose one of the field")

}else{}
}


    return (


        <View>
            <ImageBackground source={Path.Backgroundimage}
                style={styles.ImageBackgroundStyle1}>
                <Image source={Path.logo} style={styles.LogoStyle} />


                <View style={{ alignSelf: "center", marginTop: "5%", marginBottom: "5%" }}>

                    <Text style={styles.TextStyle1}>GOLF FLIP</Text>
                    <Text style={styles.TextStyle2}>Forget Password</Text>
                </View>



                <View style={styles.TextStyle}>
                    <TextInput
                        style={{ marginLeft: 7 }}
                        placeholder="E-mail"
                        placeholderTextColor="black"
                        onChangeText={(event) => onChange("email", event)} />
                </View>


            <Text style={{fontSize:25,color:"white",alignSelf:"center",marginTop:4}}>or</Text>
                <View style={styles.TextStyle4}>
                    <TextInput
                        style={{ marginLeft: 7 }}
                        placeholder="Phone Number"
                        placeholderTextColor="black"
                        onChangeText={(event) => onChange("phoneNumber", event)} />
                </View>
                <TouchableOpacity onPress={()=>submit()}>
                    <View style={styles.screenContainer}>
                        <Text style={{ alignSelf: 'center', marginTop: 8, fontSize: 25 }}>Submit</Text>
                    </View>
                </TouchableOpacity>

            </ImageBackground>

        </View>


    )
}

export default  forgetPassword
const styles = StyleSheet.create({
    ImageBackgroundStyle1: {
        height: "100%",
        width: "100%"
    },

    LogoStyle: {
        width: 80,
        alignSelf: 'center',
        height: 79,
        marginTop: 40,
        
    },

    TextStyle1: {
        color: "white",
        alignSelf: "center",
        marginBottom: "5%",
        fontSize: 20,
        fontWeight: "bold"

    },
    TextStyle2: {
        color: "white",
        alignSelf: "center",
        fontSize: 40,
        fontWeight: "bold"
    },

    TextStyle: {
        height: 50,
        width: "80%",
        backgroundColor: "white",
        alignSelf: 'center',
        borderRadius: 40
    },

    TextStyle4: {
        height: 50,
        width: "80%",
        backgroundColor: "white",
        alignSelf: 'center',
        marginTop: "4%",
        borderRadius: 40,
    },

    screenContainer: {
        height: 50,
        width: "80%",
        backgroundColor: "white",
        alignSelf: 'center',
        marginTop: "15%",
        borderRadius: 50,
        textDecorationLine:'underline',
        
    }



})