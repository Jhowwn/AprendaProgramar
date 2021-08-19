import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import MainScreen from './src/components/MainScreen';
import { createStackNavigator } from "@react-navigation/stack";
import GuiaEstudos from './src/Pages/GuiaEstudos';
import Desafios from './src/Pages/Desafios';
import Parceiros from './src/Pages/Parceiros';
import Dicionario from './src/Pages/Dicionario';
import Login from './src/Pages/TelaLogin';
import Cadastrar from './src/Pages/Cadastro';

function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Aprenda Programar"  component={MainScreen}  options={style}/>
        <Stack.Screen name="Guia de Estudos" component={GuiaEstudos}  options={style}/>
        <Stack.Screen name="Desafios" component={Desafios}  options={style}/>
        <Stack.Screen name="Parceiros" component={Parceiros}  options={style}/>
        <Stack.Screen name="Dicionário" component={Dicionario}  options={style}/>
        <Stack.Screen name="Login"  component={Login}  options={style}/>
        <Stack.Screen name="Cadastrar"  component={Cadastrar}  options={style}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const style = {
  headerStyle:{
    backgroundColor: '#34eb6e',
    height: 90
  },
  headerTitleStyle:{
    fontSize: 30,
    color: '#050404',
  }
}

export default App;