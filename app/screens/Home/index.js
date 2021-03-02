import React, { useState, useEffect } from 'react'
import { View, Text, Button, TouchableOpacity, TouchableHighlightBase } from 'react-native'
import MainHeader from '../../Component/Header';

const home = ({ navigation, data }) => {

    const [email, setEmail] = useState("")
    const [toggle, settoggle] = useState(false)

    useEffect(() => {
        if (toggle) {
            setEmail("rani")
        } else (
            setEmail("Komal")
        )
        console.log(data)
    }, [toggle])

    const Onclick = () => {
        settoggle(!toggle)
    }

    return (
        <View>
            <MainHeader title="Home" email={email} />


            <Text style={{fontSize: 30, alignSelf: "center"}}>home</Text>
            <TouchableOpacity onPress={() => Onclick()}>
                <View style={{ height: 30, width: 80, alignSelf: "center", backgroundColor: "red" }}>
                    <Text>ONCLICK</Text>
                </View>
            </TouchableOpacity>
            <View>
                <Text>{data&&data[0].name}</Text>

            </View>

        </View>
    )
}

export default home;
