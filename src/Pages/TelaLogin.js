import axios from 'axios';
import { Text, View, StyleSheet, ScrollView} from 'react-native';
import React, { useState} from 'react';
import { TextInput, Button  } from 'react-native-paper';
import MainScreen from './MainScreen';
import Cadastro from './Cadastro';

function Login({navigation}){

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event){

        const userData = {
            "usuario" : username,
            "senha" : password
        }

        event.preventDefault();

        const {data} = await axios.post('http://192.168.100.57/tcc/login/logar', userData);

        if (data.codigo !== 1 ){
            alert(data.msg);
        }else{
            alert(data.msg);
            navigation.navigate('Aprenda Programar', MainScreen)
        }

    }

    return(
        <View>
            <Text>Acesse sua conta</Text>
            <View>
                <TextInput
                    label="Nome de Usuario"
                    value={username}
                    onChangeText={name => setUserName(name)}
                />
                <TextInput
                    label="Senha de acesso"
                    secureTextEntry
                    value={password}
                    onChangeText={pass => setPassword(pass)}
                />
                <Button 
                    mode="contained" 
                    onPress={handleSubmit}
                    >Entrar</Button>
                <Button 
                    mode="contained" 
                    onPress={()=>{
                        navigation.navigate(Cadastro);
                    }}>Cadastrar uma conta</Button>
            </View>

        </View>
        )
}



export default Login;