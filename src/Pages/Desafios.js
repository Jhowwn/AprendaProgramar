import React from 'react';
import { Text, View, StyleSheet, ScrollView} from 'react-native';

function Desafios() {
    return (
      <ScrollView>

        <View>
          <View style={styles.divisao}>
              <Text style={styles.text}>Desafios</Text>
          </View>

          <View style={styles.container}>
            <View>

              <Text style={styles.desafios}>Python: 0 a 20 Perguntas</Text>
            
              <Text style={styles.desafios}>JavaScript: 0 a 20 Perguntas</Text>
            
              <Text style={styles.desafios}>Java: 0 a 20 Perguntas</Text>
            
              <Text style={styles.desafios}>C#: 0 a 20 Perguntas</Text>

              <Text style={styles.desafios}>React: 0 a 20 Perguntas</Text>

              <Text style={styles.desafios}>React Native: 0 a 20 Perguntas</Text>

              <Text style={styles.desafios}>PHP: 0 a 20 Perguntas</Text>

            </View>

          </View>
          
          <View style={styles.divisao}>
            <Text style={styles.total}>Pontuação Total:
            Porcentagem de acertos</Text>
          </View>

        </View>
      </ScrollView>
    );
}

const styles= StyleSheet.create({
  text:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#0f0a0a',
    padding: 20,
  },
  desafios:{
    fontSize: 15,
    color: '#0f0a0a',
    padding: 30,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  total:{
    fontSize: 15,
    fontWeight: 'bold',
    color: '#0f0a0a',
    padding: 30,
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

export default Desafios;