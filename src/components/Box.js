import React from 'react';
import { StyleSheet, Text, TouchableHighlight, Dimensions, View } from 'react-native';

function Box({titulo, descricao, navigation }) {
    return (
        <TouchableHighlight onPress={() =>{
            navigation.navigate(titulo);
        }}>
            <View style={styles.box}>
                <Text style={styles.titulo}>{titulo}</Text>
                <Text stle={styles.descricao}>{descricao}</Text>
            </View>
        </TouchableHighlight>
    )
}


const styles = StyleSheet.create({
    box:{
        padding: 20,
        borderWidth: 1,
        borderColor:"#bbb",
        width: Dimensions.get('window').width / 2,
        height: Dimensions.get('window').width / 1.5,
        textAlign: 'center',
        backgroundColor: '#E2F9FF',
        alignItems: 'center'
    }, 
    titulo:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0f0a0a',
        padding: 10
      },
      descricao:{
        fontSize: 20,
        color: '#0f0a0a',
        padding: 10
      },
});

export default Box;