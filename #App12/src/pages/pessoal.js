import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Pessoal () {
  const navigation = useNavigation()
  return (
    <View>
      <Text>Nome: Wilson Iglesias</Text>
      <Text>Idade: 20 anos</Text>
      <Text>Data de nascimento: 25/02/2022</Text>
      <Text>Hobby: Jogar no pc e praticar esportes</Text>
      <Button title='Abrir menu' onPress={() => navigation.toggleDrawer()} />
    </View>
  )
}
