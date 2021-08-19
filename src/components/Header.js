import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Header() {
    return (
        <View style={style.container}>
            <Text style={style.title}>
                Aprenda Programar
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor: '#34eb6e',
        alignItems: 'center',
        justifyContent:'center',
        height: 90
    },
    title:{
        fontSize: 30,
        color: '#050404',
        padding: 10
    }
});

export default Header
