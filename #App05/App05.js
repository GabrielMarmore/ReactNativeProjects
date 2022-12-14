import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {peso: '', altura: '', info: '-', resultado: 0.0}
    this.calculaIMC = this.calculaIMC.bind(this)
  }
  
  calculaIMC(){
    let imc = this.state.peso / (this.state.altura * this.state.altura)
    let s = this.state
    s.resultado = imc
    if(s.resultado < 18.5){
      s.info ='Menor que 18,5, seu quadro é de: Magreza'
    }
    else if (s.resultado < 24.9){
     s.info ='Entre 18,5 e 24,9, seu quadro é: Normal'
    }
    else if (s.resultado < 29.9){
     s.info ='Entre 25,0 e 29,9, seu quadro é: Sobrepeso'
    }
    else if (s.resultado < 39.9) {
     s.info ='Entre 30,0 e 39,9, seu quadro é: Obesidade'
    }
    else if (s.resultado > 39.9) {
     s.info ='Maior que 40,0, seu quadro é: Obesidade Grave'
    }
    this.setState(s)
  }

  clear = () => {
    this.setState({
      peso: '',
      altura: '',
      resultado: 0.0,
      info: ''
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Peso (kg)</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={peso => this.setState({ peso })}
          value={this.state.peso}
          placeholder='Peso'
          keyboardType={'numeric'}
        />
        <Text style={styles.text}>Altura (m)</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={altura => this.setState({ altura })}
          value={this.state.altura}
          placeholder='Altura'
          keyboardType={'numeric'}
        />
        <Text style={{marginVertical: 40, textAlign: 'center'}}> Informe a altura usando o ponto ( . ) como sepadador. Exemplo: 1.70 </Text>

        <Separator />
        <Button
          onPress={this.calculaIMC}
          title='Calcular IMC'
          color='blue'
          accessibilityLabel='Clique aqui para calcular seu IMC'
        />
        <Separator />
        <Text style={styles.input}>
         Seu IMC é: {this.state.resultado.toFixed(2)} {this.state.info}
        </Text>
      </View>
    );
  }
}

const Separator = () => (
  <View style={styles.separator} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    fontSize: 18,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: 20,
    margin: 10,
    borderRadius: 20
  },
  text: {
    marginTop: 40,
    marginLeft: 5
  }
});