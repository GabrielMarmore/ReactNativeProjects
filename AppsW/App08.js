import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
 
class App extends Component{
  render(){
    return(
      <View style={styles.container}>
         <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
        <Text style={styles.text}>Vagas</Text>
          <View style={styles.box1}>
          <Text style={styles.textbox}>Desenvolvedor Backend</Text>
          <Text style={styles.textbox2}>Salário: R$ 3000,00</Text>
          <Text style={styles.textbox2}>Descrição: criar bancos de dados nos servidores e atualizá-los, criar e instalar APIs,
           cuidar da performance do site, estrutura e lógica etc. </Text>
          <Text style={styles.textbox2}>Contato: 9999-9999</Text>
          </View>
          <View style={styles.box2}>
          <Text style={styles.textbox}>Engenheiro de Dados</Text>
          <Text style={styles.textbox2}>Salário: R$ 3000,00</Text>
          <Text style={styles.textbox2}>Descrição: gerenciar, otimizar, supervisionar e monitorar a recuperação, armazenamento e distribuição de dados em toda a organização. </Text>
          <Text style={styles.textbox2}>Contato: 9999-9999</Text>
          </View>
          </ScrollView>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  box1:{
    backgroundColor: 'lightgrey',
    height: 250,
  },
  box2:{
    backgroundColor: 'lightgrey',
    height: 250,
    marginTop: 20
  },
  text:{
    marginTop: 50,
    textAlign: 'center',
  },
  textbox:{
    marginTop: 10,
    marginLeft: 5,
    color: 'blue'
  },
  textbox2:{
    marginTop: 10,
    marginLeft: 5,
  }
})
 
export default App;