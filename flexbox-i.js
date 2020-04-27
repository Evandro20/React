import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, TextInput } from 'react-native';

const Caixa = ({ cor, flex }) => {
  return (
    <View style={{
      width: '99%',
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
    <View style={{ paddingTop: 30, flex: 1 }}>
      <View style={{ flexDirection: 'column', flex: 1 }}>
        <Caixa cor='red' flex = {1} />
          <Caixa cor='blue' flex ={1} />
          <Caixa cor='yellow' flex = {1} />
          <Caixa cor='red' flex ={1} />
          <Caixa cor='blue' flex ={1} />
          <Caixa cor='yellow' flex ={1} />
      </View>
    </View>
  )
}

export default App