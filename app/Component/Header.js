
import React, { useEffect } from 'react'
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Path from "../Constant/ImagePath"


const MainHeader = ({ navigation, title, email, setemail, color }) => {



    return (
        <View>
<View>{color}</View>
            <View style={styles.HeaderDesign} >
                <TouchableOpacity>
                    <Image source={Path.menu} style={{ width: 35, height: 45, marginTop: 5, flexDirection: "row-reverse", marginRight: 6 }}></Image>
                </TouchableOpacity>

                <Text>{email}</Text>

            </View>


        </View>

    );

}
export default MainHeader;
const styles = StyleSheet.create({
    HeaderDesign: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        height: 60
    }
})