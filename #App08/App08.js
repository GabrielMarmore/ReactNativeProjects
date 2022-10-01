import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, Text } from 'react-native'

class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Vagas</Text>
        <ScrollView horizontal={true} contentContainerStyle={styles.conteinerFlex}>
          <View style={styles.box1}>
            <Text style={styles.textbox}>Desenvolvedor Backend</Text>
            <Text style={styles.textbox2}>Salário: R$ 3000,00</Text>
            <Text style={styles.textbox2}>
              Descrição: criar bancos de dados nos servidores e atualizá-los,
              criar e instalar APIs, cuidar da performance do site, estrutura e
              lógica etc.{' '}
            </Text>
            <Text style={styles.textbox2}>Contato: 9999-9999</Text>
          </View>
          <View style={styles.box2}>
            <Text style={styles.textbox}>Engenheiro de Dados</Text>
            <Text style={styles.textbox2}>Salário: R$ 3000,00</Text>
            <Text style={styles.textbox2}>
              Descrição: gerenciar, otimizar, supervisionar e monitorar a
              recuperação, armazenamento e distribuição de dados em toda a
              organização.{' '}
            </Text>
            <Text style={styles.textbox2}>Contato: 9999-9999</Text>
          </View>
          <View style={styles.box2}>
            <Text style={styles.textbox}>Engenheiro de Dados</Text>
            <Text style={styles.textbox2}>Salário: R$ 3000,00</Text>
            <Text style={styles.textbox2}>
              Descrição: gerenciar, otimizar, supervisionar e monitorar a
              recuperação, armazenamento e distribuição de dados em toda a
              organização.{' '}
            </Text>
            <Text style={styles.textbox2}>Contato: 9999-9999</Text>
          </View>
          <View style={styles.box2}>
            <Text style={styles.textbox}>Engenheiro de Dados</Text>
            <Text style={styles.textbox2}>Salário: R$ 3000,00</Text>
            <Text style={styles.textbox2}>
              Descrição: gerenciar, otimizar, supervisionar e monitorar a
              recuperação, armazenamento e distribuição de dados em toda a
              organização.{' '}
            </Text>
            <Text style={styles.textbox2}>Contato: 9999-9999</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  conteinerFlex: {
    width: 300,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box1: {
    backgroundColor: '#86BDCA',
    height: 250,
    width: 250,
    padding: 8,
    borderRadius: 8
  },
  box2: {
    backgroundColor: '#86BDCA',
    height: 250,
    width: 250,
    marginHorizontal: 20,
    padding: 8,
    borderRadius: 8
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
    fontWeight: 700,
    color: '#001C5B'
  },
  textbox: {
    marginTop: 10,
    marginLeft: 5,
    fontSize: 22,
    fontWeight: 700,
    color: '#001C5B'
  },
  textbox2: {
    marginTop: 10,
    marginLeft: 5,
    fontSize: 16,
    color: '#001C5B'
  }
})

export default App




 

