import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, TextInput } from 'react-native';
import { CaixaNormal } from './src/components/Caixa';


const App = () => {
  return (
    <View style={{ paddingTop: 50 }}>
      <View style={{ flexDirection: 'row' }}>
        <CaixaNormal cor='red' />
        <CaixaNormal cor='blue' />
        <CaixaNormal cor='yellow' />
      </View>
    </View>
  )
}

export default App