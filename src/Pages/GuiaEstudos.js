import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

function GuiaEstudos() {

    return (
      <View>
        <View style={styles.divisao}>
            <Text style={styles.text}>Guia de Estudos</Text>
        </View>
        <View>
            <Text style={styles.cronograma}>Cronograma</Text>
        </View>

        <View style={styles.container}>
          <View>
            
              <Text style={styles.capitulos}> 1° Cap - Operadores Logicos</Text>
            
              <Text style={styles.capitulos}> 2° Cap - Estrutura de Decisão</Text>

              <Text style={styles.capitulos}> 3° Cap - Funções</Text>
            
              <Text style={styles.capitulos}> 4° Cap - Projetos de Prática</Text>
          
              <Text style={styles.capitulos}> 5° Cap - Refatoração de Código</Text>

          </View>

        </View>
        
      </View>
    );
}

const styles= StyleSheet.create({
  text:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#0f0a0a',
    padding: 20,
  },
  cronograma:{
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#0f0a0a',
    padding: 10,
  },
  capitulos:{
    fontSize: 15,
    color: '#0f0a0a',
    padding: 30,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  divisao:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  container: {
    flex: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});

export default GuiaEstudos;
