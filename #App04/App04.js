import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

export default function App () {
  const [warning, setWarning] = useState()
  const [alcool, setAlcool] = useState()
  const [gasolina, setGasolina] = useState()
  const [result, setResult] = useState()

  function verificarPreco () {
    if ((alcool > 0) & (gasolina > 0)) {
      //Basta dividir o preço do litro do etanol pelo da gasolina. Se o resultado for inferior a 0,7, o derivado da cana-de-açúcar é o melhor para abastecer. Se for maior que 0,7, então a gasolina é melhor.
      setResult(alcool / gasolina < 0.7 ? 'Álcool' : 'Gasolina')
    } else {
      setWarning('Insira um número válido')
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={styles.main}>
        <View>
          <Text style={styles.title}>Álcool ou Gasolina</Text>
        </View>
        <View style={styles.containerInputs}>
          <Text style={styles.title}>{warning}</Text>
          <TextInput
            onChangeText={setAlcool}
            placeholder='Preço do álcool:'
            style={styles.inputText}
            value={alcool}
          />
          <TextInput
            onChangeText={setGasolina}
            placeholder='Preço da gasolina:'
            style={styles.inputText}
            value={gasolina}
          />
        </View>
        <View>
          <Button
            title=' Verificar '
            onPress={() => {
              verificarPreco()
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
