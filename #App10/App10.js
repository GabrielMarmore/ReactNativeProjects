import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

export default function App () {
  const [warning, setWarning] = useState()
  const [valor, setValor] = useState()
  const [result, setResult] = useState()

  function verificarValor () {
    setResult(null)
    if (valor > 0) {
      setResult(`Real: ${valor}, Dolar: ${valor * 4}, Euro: ${valor * 5}`)
    } else {
      setWarning('Insira um número válido')
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={styles.main}>
        <View>
          <Text style={styles.title}>Conversor de Moedas</Text>
        </View>
        <Text style={styles.title}>{warning}</Text>
        <View style={styles.containerInputs}> 
          <TextInput
            onChangeText={setValor}
            placeholder='Valor em real'
            style={styles.inputText}
            value={valor}
          />
        </View>
        <View>
          <Button
            title=' Converter '
            onPress={() => {
              verificarValor()
            }}
          />
        </View>
        <Text style={styles.title}>{result}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#86BDCA'
  },
  main: {
    width: 300,
    paddingVertical: 24,
    alignItems: 'center'
  },
  title: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 24,
  },
  inputText: {
    backgroundColor: '#eee',
    width: 150,
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 8,
    padding: 8
  },
  containerInputs: {
    maxWidth: 200,
    marginBottom: 10
  }
})
