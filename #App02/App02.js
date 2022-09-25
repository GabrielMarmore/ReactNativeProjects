import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  StatusBar
} from 'react-native'

class App extends Component {
  constructor () {
    super()
    this.state = {
      contador: 0
    }
  }

  decrementar () {
    if (this.state.contador != 0)
      this.setState({
        contador: this.state.contador - 1
      })
  }

  incrementar () {
    this.setState({
      contador: this.state.contador + 1
    })
  }

  render () {
    return (
      <SafeAreaView style={[{ flex: 1 }, styles.container]}>
        <StatusBar />
        <View style={styles.main}>
          <Text style={styles.texto}>Contador de pessoas</Text>

          <Text style={styles.texto}>{this.state.contador}</Text>
          <View style={styles.container_button}>
            <Button
              color='green'
              title=' + '
              onPress={() => this.incrementar()}
            />

            <Button
              color='red'
              title=' - '
              onPress={() => this.decrementar()}
            />
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#86BDCA'
  },
  main: {
    width: 250,
    paddingVertical: 24,
    alignItems: 'center'
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
    marginVertical: 16,
    color: '#001C5B',
    fontWeight: 700
  },
  container_button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 200,
    backgroundColor: '#001C5B',
    marginVertical: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8
  }
})

export default App
