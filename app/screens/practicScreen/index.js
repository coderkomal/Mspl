import React from 'react'
import { useState } from 'react'
import { View, Text, Image, TextInput, Button, Alert } from 'react-native'

const practicScreen = () => {
    const [color, setcolor] = useState("white")
    const [toggle, settoggle] = useState(false)
    const [toggle1, settoggle1] = useState(false)
    const[email,setemail]=useState("")
    const submit = () => {
        settoggle(!toggle)
        if (toggle) {
            setcolor("red")
        }
        else {
            setcolor("white")
        }
    }
    const submit1 = () => {
if(email==''){
    return Alert.alert("plz fill email")
}
else{}
    }
    return (
        <View>
            <Text style={{ color: toggle === true ? "white" : "red", fontSize: 30 }}>WELCOME BACK!</Text>
            <View>

                <Button title='toggle' onPress={() => submit()}></Button>

            </View>
            <View>
                <Button title='toggle1' onPress={() => submit1()}>  </Button>
            </View>
            <View style={{height:60,width:"80%",backgroundColor:"yellow",alignSelf:"center",marginTop:"40%"}}>
                <TextInput placeholder='Email'
                //  onChangeText={(email)=>setemail(email)}
                 >

                </TextInput>
            </View>


        </View>
    )
}

export default practicScreen
