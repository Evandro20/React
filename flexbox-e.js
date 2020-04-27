import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, TextInput } from 'react-native';

const Caixa = ({ cor, flex }) => {
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

const App = () => {
  return (
    <View style = {{paddingTop: 50}}>
      <View style={{ flexDirection: 'row' }}>
        <Caixa cor='red' />
        <Caixa cor='blue' />
        <Caixa cor='yellow' />
      </View>
    </View>
  )
}

export default App