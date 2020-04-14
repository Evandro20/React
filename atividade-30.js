import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, SafeAreaView } from 'react-native';


function Postar() {
  const [textoDigitado, setTextoDigitadado] = useState('')
  const [textoPostado, setTextoPostado] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.textoPadrao}> O que deseja Postar?! </Text>
      <TextInput style={{
        height: 100,
        width: 300,
        borderColor: 'black',
        borderWidth: 2,
        margin: 5
      }}
        placeholder="Digite aqui"
        multiline={true}
        onChangeText={text => setTextoDigitadado(text)}
        maxLength={140}
        value={textoDigitado}
      />
      <Button
        onPress={() => {
          if (textoDigitado.length < 50) {
            Alert.alert('Necessário no mínimo 50 caracteres para postar!')
          } else {
            setTextoPostado(textoDigitado)
            Alert.alert('O que você escreveu foi postado')
            setTextoDigitadado('')
          }
        }}
        title='Aperte aqui para postar'
      />
      <Text style={styles.textoPadrao}> Sua Postagem foi concluída!</Text>
      <Text style={styles.textoPadrao}> {textoPostado}</Text>
    </View>
  )
}

export default function Mostrar() {
  return (
    <SafeAreaView style = {styles.container}>
      <Postar />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoPadrao: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 20,
  },

  // textoPadraoNegrito: {
  //   fontWeight: 'bold'
  // },

});
