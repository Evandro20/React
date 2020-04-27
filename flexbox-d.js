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
      flex: flex,
    }}>
    </View>
  )
}

const App = () => {
  return (
    <View style={{ paddingTop: 30, flex: 1 }}>
      <View style={{ flexDirection: 'column', flex: 1 }}>
        <Caixa cor='red' />
        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center',  alignItems: 'flex-end' }}>
          <Caixa cor='blue' />
        </View>
        <View style = {{flexDirection: 'row', flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
          <Caixa cor='yellow' />
      </View>

    </View>
    </View >
  )
}

export default App