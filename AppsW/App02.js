import React, { Component } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
 
class App extends Component{
  constructor() {
    super();
    this.state = {
      contador: 0,
    };
  }

  decrementar() {
      if (this.state.contador != 0)
      this.setState({
      contador: this.state.contador -1,
    })
  }

  incrementar() {
    this.setState({
      contador: this.state.contador +1,
    })
  }


 
  render(){
    return(
      <View style={styles.container}>

      <Text style={styles.texto}>Contador de pessoas</Text>
      
      <Text style={styles.texto}>{this.state.contador}</Text>
 
      <Button style={styles.texto} color='green' title='+' onPress={() => this.incrementar()}/>

      
      <Button color='red' title='-' onPress={() => this.decrementar()}/>

 
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 80,
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
  },
  botao:{
    width: 200,
    height: 50,
    margin: 20,
    backgroundColor: '#999'
  },
  textoBotao:{
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 45,
    fontSize: 16,
  },
})
 
export default App;





 

