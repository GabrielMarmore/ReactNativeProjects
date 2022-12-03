import React, { Component, useState } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function App () {
  const [data, setData] = useState({})
  const [cep, setCep] = useState()

  function checkCep () {
    setData('cep', cep)
    axios
      .get('https://viacep.com.br/ws/'+ cep +'/json/')
      .then(response => {
        setData(response.data);
      })
      .catch(err => {
        console.log('ops! erro no cep ' + err)
      })
  }

  //cep 11075430

    return (
            <View style={styles.main}>
              <Text style={styles.text_desc}>Cep X Endereço</Text>
              
              <View style={styles.content}>
                <Text>Nome:</Text>
                <TextInput style={styles.input}
                type="number" placeholder='Digite o CEP (somente os numeros)' onChangeText={text => {
                  setCep(text)
                }}/>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => {
                    checkCep()
                  }}
                >
                  <Text> Buscar endereço </Text>
                </TouchableOpacity>
              </View>
              
              <View style={styles.content}>
                  <Text>Rua: {data.logradouro}</Text>
                  <Text>Bairro: {data.bairro}</Text>
                  <Text>Cidade: {data.localidade}</Text>
                  <Text>Estado: {data.uf}</Text>
              </View>
          </View>
  );
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
    color: '#001C5B',
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
  },
})