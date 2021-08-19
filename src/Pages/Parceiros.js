import React from 'react';
import { Text, View, StyleSheet, ScrollView} from 'react-native';

function Parceiros() {
    return (
        <ScrollView>

        <View>
          <View style={styles.divisao}>
              <Text style={styles.text}>Parceiros</Text>
          </View>

          <View style={styles.container}>
            <View>

              <Text style={styles.desafios}>Parceiro 1</Text>
            
              <Text style={styles.desafios}>Parceiro 2</Text>
            
              <Text style={styles.desafios}>Parceiro 3</Text>
            
              <Text style={styles.desafios}>Parceiro 4</Text>

              <Text style={styles.desafios}>Parceiro 5</Text>

              <Text style={styles.desafios}>Parceiro 6</Text>

            </View>

          </View>
          
          <View style={styles.divisao}>
            <Text style={styles.mais}>Ver mais...</Text>
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
    desafios:{
      fontSize: 15,
      color: '#0f0a0a',
      padding: 40,
      borderBottomColor: 'black',
      borderBottomWidth: 1,
    },
    mais:{
      fontSize: 15,
      color: '#0339fc',
      padding: 30,
      textAlign: 'center'
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

export default Parceiros
