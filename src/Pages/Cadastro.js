import axios from 'axios';
import { Text, View, StyleSheet, ScrollView} from 'react-native';
import React, { useState} from 'react';
import { TextInput, Button  } from 'react-native-paper';
import MainScreen from './MainScreen';

function Cadastrar({navigation}){

    const [username, setUserName] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    

    async function handleSubmit(event){

        const userData = {
            "usuario" : username,
            "senha" : password,
            "nome" : name,
        }

        event.preventDefault();

        const {data} = await axios.post('http://192.168.100.57/tcc/usuario/inserir', userData);

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
                    label="Usuario"
                    value={username}
                    onChangeText={user => setUserName(user)}
                />
                <TextInput
                    label="Nome"
                    value={name}
                    onChangeText={nome => setName(nome)}
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
            </View>

        </View>
        )
}

export default Cadastrar;