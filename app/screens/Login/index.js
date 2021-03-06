import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, Image, TouchableOpacity, Alert, Button } from 'react-native';
import Path from '../../Constant/ImagePath'

const Login = ({ navigation }) => {

    const userData = {
        email: "",
        password: "",
    }
    // const [color, setcolor] = useState("white")


    // const[toggle,settoggle]=useState(false)


    const [user, setUser] = useState(userData)

    const { email, password } = user


    const onChange = (feild, value) => {
        setUser({ ...user, [feild]: value })
        // setUser("name")

        // let updatedObject={...user,[feild]:value}
        // setUser(updatedObject)
    }
    const validemail = (email) => {
        const reg = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
        const valid = reg.test(email)
        if (valid === true) {
            return true
        }
        else {
            return false
        }
    }
    const validPassword = (password) => {
        const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
        if (reg.test(password)) {
            return true
        }
        else {
            return false
        }
    }



    const submit = () => {


        // if (email === '' || password === '') {
        //     Alert.alert("plz fill all")
        // }
        // else {
        //     if (!validemail(email)) {
        //         Alert.alert("Please Enter a Valid Email")
        //     }
        //     else if (!validPassword(password)) {
        //         Alert.alert("Please Enter a Valid Password")
        //     }
        //     else {
        //         navigation.navigate("home")
        //     }

        navigation.navigate("practicScreen")
        


    }
    const eye = () => {

    }

    return (

        <View>

            <ImageBackground source={Path.Backgroundimage}
                style={styles.ImageBackgroundStyle1}>
                <Image source={Path.logo} style={styles.LogoStyle}></Image>


                <View style={{ alignSelf: "center", marginTop: "5%", marginBottom: "5%" }}>

                    <Text style={styles.TextStyle1}>GOLF FLIP</Text>
                    {/* 
                    <Text style={{color:toggle===true?"white":"red",fontSize:30}}>WELCOME BACK!</Text> */}
                    {/* <Text style={{color:color,fontSize:30}}>WELCOME BACK!</Text>  */}
                    <Text style={styles.TextStyle2}>WELCOME BACK!</Text>
                </View>

                <View style={styles.TextStyle}>
                    <TextInput
                        style={{ marginLeft: 7 }}
                        placeholder="Email"
                        placeholderTextColor="black"
                        onChangeText={(event) => onChange("email", event)} />
                </View>
                <View style={styles.ViewStyle1}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor="black"
                            onChangeText={(event) => onChange("password", event)}>
                        </TextInput>
                        <TouchableOpacity>
                            <Image source={Path.eyelogo} style={{ height: 20, width: 30, alignSelf: "center", marginRight: 25, marginTop: 15 }}></Image>

                        </TouchableOpacity>
                    </View>

                </View>
               
                <TouchableOpacity onPress={() => navigation.navigate("forgetPassword")}>
                    <View style={styles.ViewStyle2}>
                        <Text style={{ fontSize: 20, color: "white", textDecorationLine: "underline" }}>Forget password</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => submit()}>
                    <View style={styles.ViewStyle1}>
                        <Text style={styles.ViewStyle3}>LOGIN</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20 }}
                >
                    <Text style={{ fontSize: 20, color: "white" }}>New here?</Text>
                    <Text style={{ fontSize: 20, color: "white" }} onPress={() => navigation.navigate("SignUp")}> Create an Account</Text>
                    {/* <Button title='toggle' onPress={()=>submit()}>

                   </Button> */}

                </View>






            </ImageBackground>






        </View>


    )
}
export default Login;
const styles = StyleSheet.create({
    TextStyle: {
        height: 50,
        width: "80%",
        backgroundColor: "white",
        alignSelf: 'center',
        marginTop: "10%",
        borderRadius: 40

    },
    ImageBackgroundStyle1: {
        height: "100%",
        width: "100%"
    },

    TextStyle1: {
        color: "white",
        alignSelf: "center",
        marginBottom: "5%",
        fontSize: 20,
        fontWeight: "bold"

    },
    LogoStyle: {
        width: 80,
        alignSelf: 'center',
        height: 79,
        marginTop: 40

    },
    TextStyle2: {
        color: "white",
        alignSelf: "center",
        fontSize: 40,
        fontWeight: "bold"

    },
    ViewStyle1: {
        height: 50,
        width: "80%",
        backgroundColor: "yellow",
        alignSelf: 'center',

        marginTop: "5%",
        borderRadius: 40
    },

    ViewStyle2: {
        flexDirection: 'row-reverse',
        marginLeft: 40,
        marginTop: 6

    },
    ViewStyle3: {
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center",
        marginTop: 12
    },

});