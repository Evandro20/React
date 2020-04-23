import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, TextInput } from 'react-native';

class ContarCarateres extends React.Component {
  constructor() {
    super();
    this.state = {
      tempo: 0,
      texto: '',
      play: false
    };
    this.contador
  }

  componentDidMount() {
    this.contador = setInterval(() => {
      this.iniciaContador()
    }, 1000
    )
    this.setState({ play: false })
  }



  iniciaContador() {
    this.setState((() => ({ tempo: this.state.tempo + 1 })))
    if (this.state.tempo > 9) {
      this.setState({ play: false })
      this.componentWillUnmount()
    }
  }

  componentWillUnmount() {
    clearInterval(this.contador)
    Alert.alert(`                   Parabéns\n       A sua pontuação é ${this.state.texto.length}`)
  }

  render() {
    return (
      <View style={{ paddingTop: 50 }}>
        <Text>O Objetivo do Jogo é digitar o máximo de caracteres em 10 segunodos.</Text>
        <Text>                     Clique no botão a baixo para iniciar!</Text>
        <TextInput
          style={{
            height: 100,
            borderColor: 'black',
            borderWidth: 2,
            margin: 5,
          }}
          numberOfLines={5}
          multiline={true}
          editable={this.state.play}
          placeholder='Digite aqui o máximo que conseguir!'
          onChangeText={(text) => this.setState({ texto: text })}
          value={this.state.texto}
        />
        <Text>                                         Tempo: {this.state.tempo}</Text>
        <Text></Text>
        <Button
          onPress={() => {
            this.setState({
              texto: '',
              tempo: 0,
              play: true
            })
          }}
          title='Aperte aqui para iniciar o jogo'
        />
      </View>
    )
  }
}

export default ContarCarateres
