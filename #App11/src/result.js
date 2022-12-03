import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
 
export default function Result( {route} ){
  const navigation = useNavigation();
    console.log(route.params)
  return(
    <View>
      <Text>Resultados</Text>
      <Text>{route.params?.nome}</Text>
      <Text>{route.params?.valor}</Text>
      <Text>{route.params?.escolaridade}</Text>
      <Text>{route.params?.sexo}</Text>
      <Button
      title='Voltar para tela Home'
      onPress={ () => navigation.goBack() }
      />
    </View>
  )
}
