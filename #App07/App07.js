import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, Switch, Button } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

 
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      sexo: 0,
      escolaridade:0,
      valor: 0,
      status: false
    };
  };

  render() {
  return (
    <View>
      <View>
      <View style={styles.main}>
          <Text style={styles.text_desc}>Abertura de conta</Text>
          <View style={styles.content}>
          <Text>Nome:</Text>
          <TextInput
            style={styles.input}
            placeholder='Digite o nome'
          />
          </View>
          <View style={styles.content}>
          <Text>Idade:</Text>
          <TextInput
            style={styles.input}
            placeholder='Digite a idade'
          />
          <View>
          <Text style={styles.textpickers}>Sexo:</Text>
          <Picker
      selectedValue={this.state.sexo}
      onValueChange={ (itemValue, itemIndex) => this.setState({sexo: itemValue}) }
      >
        <Picker.Item key={1} value={1} label="Masculino" />
        <Picker.Item key={2} value={2} label="Feminino" />
      </Picker>
      <Text style={styles.textpickers}>Escolaridade</Text>
      <Picker
      selectedValue={this.state.escolaridade}
      onValueChange={ (itemValue, itemIndex) => this.setState({escolaridade: itemValue}) }
      >
        <Picker.Item key={1} value={1} label="Ensino médio completo" />
        <Picker.Item key={2} value={2} label="Nível Superior Completo" />
      </Picker>

      <View>
      <Text style={styles.textslide}>Saldo</Text>
 
 <Slider
   minimumValue={0}
   maximumValue={1000}
   onValueChange={ (valorSelecionado) => this.setState({valor: valorSelecionado})}
   value={this.state.valor}
 />

 <Text style={{textAlign: 'center', fontSize: 30}}>
   {this.state.valor.toFixed(0)}
 </Text>

 <View>
 
      <Switch 
      value={this.state.status}
      onValueChange={ (valorSwitch) => this.setState({status: valorSwitch})}
      />
 
      <Text style={{textAlign: 'left', fontSize: 14}}>
        {(this.state.status) ? "Brasileiro" : "Gringo"}
      </Text>
 
    </View>

    <View style={styles.botao}>
    <Button color='blue' title=' Confirmar '/>
    </View>
  

 </View>


      </View>

          </View>
        </View>
      </View>
    </View>
  )}
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
  }
  
})