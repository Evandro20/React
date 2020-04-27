import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, TextInput } from 'react-native';

const Caixa = ({ cor, flex }) => {
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

const App = () => {
  return (
    <View style={{ paddingTop: 30, flex: 1 }}>
      <View style={{ flexDirection: 'column', flex: 1, flexWrap: 'wrap' }}>
        <Caixa cor='red' />
        <Caixa cor='blue' />
        <Caixa cor='yellow' />
        <Caixa cor='green' />
        <Caixa cor='purple' />
      </View>
    </View>
  )
}

export default App