import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, TextInput } from 'react-native';
import { CaixaNormal } from './src/components/Caixa';


const App = () => {
  return (
    <View style={{ paddingTop: 30, flex: 1 }}>
      <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <CaixaNormal cor='red' />
        <CaixaNormal cor='blue' />
      </View>
    </View>
  )
}

export default App