import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, TextInput } from 'react-native';
import { CaixaTelaInteira } from './src/components/Caixa';


const App = () => {
  return (
    <View style={{ paddingTop: 30, flex: 1 }}>
      <View style={{ flexDirection: 'column', flex: 1 }}>
        <CaixaTelaInteira cor='red' flex={1} />
        <CaixaTelaInteira cor='blue' flex={1} />
        <CaixaTelaInteira cor='yellow' flex={1} />
        <CaixaTelaInteira cor='red' flex={1} />
        <CaixaTelaInteira cor='blue' flex={1} />
        <CaixaTelaInteira cor='yellow' flex={1} />
      </View>
    </View>
  )
}

export default App