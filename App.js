import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, TextInput } from 'react-native';

class ContarCaracteres extends React.Component {
  constructor() {
    super();
    this.state = {
      tempo: 10,
      editar: false,
      texto: ''

    }
  }

  mudarTexto(texto) {
    this.setState(() => ({ texto: texto }))
  }
  iniciarCronometro() {
    clearInterval(this.tempo);
    this.tempo = setInterval(() => { this.setState(() => ({ tempo: this.state.tempo - 1 })) }, 1000);
    this.setState(() => ({ editar: true, tempo: 10, texto: '' }))
  }
  componentDidUpdate() {
    if (this.state.tempo === 0) {
      clearInterval(this.tempo)
      this.setState(() => ({ editar: false, tempo: 10, texto: '' }))
      Alert.alert(` Sua Pontuação é: ${this.state.texto.length} caracteres\n Parabéns!`)
    }
  }
  render() {
    return (
      <View style={styles.alinhar}>
        <Text style={styles.container}>O Objetivo do Jogo é digitar o máximo de caracteres que conseguir em 10 segundos.</Text>
        <Text></Text>
        <TextInput
          value={this.state.texto}
          style={{
            height: 100,
            borderColor: 'black',
            borderWidth: 2,
            margin: 5,
          }}
          editable={this.state.editar}
          onChangeText={this.mudarTexto.bind(this)}
          placeholder='Digite Aqui!'
        />
        <Button
          onPress={() => {
            this.iniciarCronometro()
          }}
          title='Aperte Aqui para começar o jogo'
        />
        <Text></Text>
        <Text style={styles.container}>TEMPO: {this.state.tempo}</Text>
      </View>
    )
  }
}
export default ContarCaracteres

const styles = StyleSheet.create({
  container: {
    textAlign: 'center'
  },
  alinhar: {
    justifyContent: 'center',
    flex: 1
  }
})