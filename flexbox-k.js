import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, TextInput } from 'react-native';
import { CaixaNormal } from './src/components/Caixa';


const App = () => {
  return (
    <View style={{ paddingTop: 30, flex: 1 }}>
      <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
        <CaixaNormal cor='red' />
      </View>
      <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
        <CaixaNormal cor='blue' />
      </View>
    </View>
  )
}

export default App