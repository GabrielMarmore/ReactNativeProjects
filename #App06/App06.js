import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

export default function App () {
  const [warning, setWarning] = useState()
  const [number, setNumber] = useState(null)
  const [show, setShow] = useState(false)
  const [result, setResult] = useState(Math.floor(Math.random() * 10))

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />

      <View>
        <View style={styles.main}>
          <Text style={styles.text_desc}>Jogo do número aleatório</Text>

          <Text style={styles.text_desc}>{warning}</Text>

          <TextInput
            onChangeText={value => {
              if ((number >= 0) & (number <= 10)) {
                setNumber(value)
              } else {
                setWarning('Insira um número válido')
              }
            }}
            value={number == null? '':number}
            style={styles.input}
            keyboardType='numeric'
            placeholder='Pense em um n° de 0 a 10'
          />

          <Button
            color='#001C5B'
            title=' Descobrir '
            onPress={() => {
              if (number != null) {
                let count = 5
                setShow(true)
                setWarning('Reiniciando em ' + count)

                const intervalID = setInterval(() => {
                  if (count == 1) {
                    clearInterval(intervalID)
                  }
                  count--
                  setWarning('Reiniciando em ' + count)
                }, 1000)

                setTimeout(() => {
                  setResult(Math.floor(Math.random() * 10))
                  setShow(false)
                  setNumber(null)
                  setWarning(null)
                }, 5000)
              } else {
                setWarning('Insira um número')
              }
            }}
          />

          <Text style={styles.text_desc}>
            {show ? result : 'Tente a sorte!'}
          </Text>
          <Text style={styles.text_desc}>
            {show && result == number ? 'Acertou! Parabéns' : (!show? '' : 'Errou, tente novamente!')}
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
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 16,
    color: '#001C5B',
    fontWeight: 700
  },
  input: {
    height: 45,
    width: '85%',
    borderWidth: 1,
    margin: 10,
    fontSize: 16,
    padding: 10,
    color: '#001C5B',
    borderColor: '#001C5B'
  }
})
