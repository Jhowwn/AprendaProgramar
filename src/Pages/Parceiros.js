import { Text, View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ParceirosList from '../components/ParceirosList';


function Parceiros(props) {
  //Cria uma função para pegar os dados do banco;
  //Guardo e exibo os resultados em tela

  const {navigation} = props;

  const [parce, setParce] = useState([]);

  useEffect(() => {
    const request = {
      "id" : "",
      "parceiro" : "",
      "descricao": "" 
    }

      axios.post('http://192.168.100.57/tcc/parceiros/consultarParceiro', request)
      .then(resposta =>{
        setParce(resposta.data.dados)
      }).catch(err =>{
        console.log("Ocorreu um erro" + err)
      });

  },[]);

  return(
    <ScrollView>
      <View>

        <View style={styles.divisao}>
                <Text style={styles.text}>Parceiros</Text>
            </View>
  
            <View style={styles.divisao}>
              <Text style={styles.dicionario}>Encontre um Parceiro para seus Estudos </Text>
            </View>
  
            <View>
                
              <ParceirosList parce={parce} navigation={navigation}/>
  
            </View>

      </View>
    </ScrollView>
  )
}


const styles= StyleSheet.create({
text:{
  fontSize: 25,
  fontWeight: 'bold',
  color: '#0f0a0a',
  padding: 20,
},
dicionario:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f0a0a',
    padding: 20,
},
divisao:{
  borderBottomColor: 'black',
  borderBottomWidth: 1,
},
container: {
  backgroundColor: '#E2F9FF',
  borderBottomColor:"#bbb",
  borderBottomWidth: 4,
  flexDirection: 'row',
  alignItems: 'center',
},
});

export default Parceiros