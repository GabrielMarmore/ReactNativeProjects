import { React } from 'react-native';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';

export default function App() {
  return (
    <View>
      <View>
        <Text style={styles.title}>Álcool ou Gasolina</Text>
      </View>
      <View style={styles.containerInputs}>
        <TextInput placeholder='Preço do álcool:' style={styles.inputText}></TextInput>
        <TextInput placeholder='Preço da gasolina:' style={styles.inputText}></TextInput>
      </View>
      <View>
        <Pressable></Pressable>
      </View>
      <Text style={styles.title}>Resultado</Text>
    </View>
  );
}

const styles = StyleSheet.create({
title:{
textAlign:'center',
marginTop: 50,
fontSize:24,
marginBottom: 20
},
inputText:{
  backgroundColor: '#eee',
  width: 150,
  borderRadius: 5,
  textAlign: 'center',
  fontSize: 16,
  marginBottom: 8
},
containerInputs:{
maxWidth: 200,
marginLeft: 135
},
});