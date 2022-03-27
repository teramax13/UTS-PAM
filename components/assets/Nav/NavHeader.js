import React from 'react'
import { View, Text, StyleSheet, Colors } from "react-native"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const NavHeader = () => {
    return (
        <View style={navStyle.menu}>
            
            
            <Text style={navStyle.text}>Kapalzy</Text>
            
            
        </View>
    )
}

const navStyle = StyleSheet.create({
    menu: {   
        justifyContent: 'space-between',
        alignItems:'center',
        height: 500,
    },
    text: {
        marginTop: 100,
        fontSize: 35,
        color: "white",
        textAlign: "center",
        fontWeight: 'bold'
    },
})

export default NavHeader