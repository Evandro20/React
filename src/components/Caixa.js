import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, TextInput } from 'react-native';

const CaixaMaior = ({ cor, flex }) => {
  return (
    <View style={{
      width: 150,
      height: 180,
      borderWidth: 2,
      borderColor: 'black',
      backgroundColor: cor,
      margin: 2,
      flex: flex
    }}>
    </View>
  )
}

const CaixaNormal = ({ cor, flex }) => {
  return (
    <View style={{
      width: 100,
      height: 100,
      borderWidth: 2,
      borderColor: 'black',
      backgroundColor: cor,
      margin: 2,
      flex: flex
    }}>
    </View>
  )
}

const CaixaTelaInteira = ({ cor, flex }) => {
  return (
    <View style={{
      width: '99%',
      height: 100,
      borderWidth: 2,
      borderColor: 'black',
      backgroundColor: cor,
      margin: 2,
      flex: flex,
    }}>
    </View>
  )
}
export { CaixaMaior, CaixaNormal, CaixaTelaInteira }