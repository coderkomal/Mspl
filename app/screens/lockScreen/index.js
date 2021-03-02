import React, { useEffect, useState } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import MenuScreen from '../MenuScreen';
const lockScreen = ({ navigation }) => {
    return (
        <View>
            <MenuScreen text="hello" />
            <View style={{ alignItems: "center", marginTop: "40%" }}>
                <Text style={{ fontSize: 50 }}>lockScreen</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("MenuScreen")}>
                <View style={{ marginTop: "30%", height: 30, width: "60%", backgroundColor: "yellow", alignSelf: "center" }}>
                    <Text style={{ alignSelf: "center" }}>button</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={{ height: "20%", width: "80%", backgroundColor: "red", alignSelf: "center", marginTop: "20%" }}>
                    <Text style={{ alignSelf: "center" }}>toggle</Text>
                </View>
            </TouchableOpacity>

        </View>


    )
}

export default lockScreen;
