import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

export default function App () {
  const [warning, setWarning] = useState()
  const [number, setNumber] = useState()
  const [number2, setNumber2] = useState()
  const [result, setResult] = useState()

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />

      <View>
        <View style={styles.main}>
          <Text style={styles.text_desc}>Multiplicação de números</Text>

          <Text style={styles.text_desc}>{warning}</Text>

          <TextInput
            onChangeText={setNumber}
            value={number}
            style={styles.input}
            placeholder='Digite o primeiro n°'
          />
          <TextInput
            onChangeText={setNumber2}
            value={number2}
            style={styles.input}
            placeholder='Digite o segundo n°'
          />

          <Button
            color='#001C5B'
            title=' Calcular '
            onPress={() => {
              if(number >= 0 & number2 >= 0){
                setResult(number * number2)
              } else {
                setWarning('Insira um número válido')
              }
            }}
          />

          <Text style={styles.text_desc}>
            {result}
          </Text>
        </View>
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
  text_desc: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
    color: '#001C5B',
    fontWeight: 700
  },
  input: {
    height: 45,
    borderWidth: 1,
    margin: 10,
    fontSize: 16,
    padding: 10,
    color: '#001C5B',
    borderColor: '#001C5B'
  }
})
