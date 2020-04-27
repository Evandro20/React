import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, TextInput } from 'react-native';
import { CaixaMaior } from './src/components/Caixa';


const App = () => {
  return (
    <View style={{ paddingTop: 30, flex: 1 }}>
      <View style={{ flexDirection: 'column', flex: 1, flexWrap: 'wrap' }}>
        <CaixaMaior cor='red' />
        <CaixaMaior cor='blue' />
        <CaixaMaior cor='yellow' />
        <CaixaMaior cor='green' />
        <CaixaMaior cor='purple' />
      </View>
    </View>
  )
}

export default App