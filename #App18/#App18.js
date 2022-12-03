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

export default function App () {
  const [data, setData] = useState({})
  const [user, setUser] = useState()
  const [img, setImg] = useState('')

  function checkGit () {
    axios
      .get('https://api.github.com/users/' + user)
      .then(response => {
        setData(response.data)
        setImg(response.data.avatar_url)
      })
      .catch(err => {
        console.log('ops! erro axios ' + err)
      })
  }

  return (
    <View style={styles.main}>
      <Text style={styles.text_desc}>Perfil GitHub</Text>

      <View style={styles.content}>
        <Text>Nome:</Text>
        <TextInput
          style={styles.input}
          type='text'
          placeholder='Digite seu username'
          onChangeText={text => {
            setUser(text)
          }}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            checkGit()
          }}
        >
          <Text> Buscar perfil </Text>
        </TouchableOpacity>

        <Image source={{ uri: img }} style={styles.img} />

        <Text>Id: {data.id}</Text>
        <Text>Nome: {data.name}</Text>
        <Text>Repo: {data.repos_url}</Text>
        <Text>Criado em: {data.created_at}</Text>
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
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 50
  }
})
