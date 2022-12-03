import React, { Component, useState } from 'react'
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native'
import axios from 'axios'

import { Picker } from '@react-native-picker/picker'

export default function App () {
  const [data, setData] = useState({})
  const [valor, setValor] = useState()
  const [from, setFrom] = useState('BRL')
  const [to, setTo] = useState('USD')
  var e;

  function conveter () {
    axios
      .get('https://economia.awesomeapi.com.br/json/last/' + from + '-' + to)
      .then(response => {
        e = from+to
        console.log(response.data) // o nome do campo vem no json, não consigo acessar com response.data.e.name
        setData({
          'metodo': response.data.name,
          'valor': response.data.ask,
        })
      })
      .catch(err => {
        console.log('ops! erro axios ' + err)
      })
  }

  return (
    <View style={styles.main}>
      <Text style={styles.text_desc}>Convesor de moedas</Text>

      <View style={styles.content}>
        <Text>Valor:</Text>

        <TextInput
          style={styles.input}
          type='number'
          placeholder='Valor'
          onChangeText={text => {
            setValor(text)
          }}
        />

        <Text>De:</Text>
        <Picker
          selectedValue={from}
          onChangeText={text => {
            setFrom(text)
          }}
        >
          <Picker.Item key={1} value={'BRL'} label='Real' />
          <Picker.Item key={2} value={'USD'} label='Dolar' />
          <Picker.Item key={3} value={'EUR'} label='Euro' />
          <Picker.Item key={4} value={'BTC'} label='Bitcoin' />
        </Picker>

        <Text>Para:</Text>
        <Picker
          selectedValue={to}
          onChangeText={text => {
            setTo(text)
          }}
        >
          <Picker.Item key={1} value={'BRL'} label='Real' />
          <Picker.Item key={2} value={'USD'} label='Dolar' />
          <Picker.Item key={3} value={'EUR'} label='Euro' />
          <Picker.Item key={4} value={'BTC'} label='Bitcoin' />
        </Picker>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            conveter()
          }}
        >
          <Text> Conveter valor </Text>
        </TouchableOpacity>

        <Text>Valor convertido: {data.valor}</Text>
        <Text>{data.metodo}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    width: 300,
    paddingVertical: 24,
    alignItems: 'center'
  },
  content: {
    width: 300,
    paddingVertical: 24,
    marginLeft: 15
  },
  text_desc: {
    fontSize: 18,
    marginVertical: 16,
    color: '#001C5B'
  },
  input: {
    height: 45,
    borderWidth: 1,
    margin: 10,
    fontSize: 16,
    padding: 10,
    color: '#001C5B',
    borderColor: '#001C5B'
  },
  textslide: {
    marginBottom: 10
  },
  botao: {
    marginTop: 50
  },
  textpickers: {
    marginTop: 20
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#86BDCA',
    borderRadius: 20,
    paddingVertical: 8,
    marginVertical: 15
  }
})
