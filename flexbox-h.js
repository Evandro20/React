import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, TextInput } from 'react-native';
import { CaixaNormal } from './src/components/Caixa';


const App = () => {
  return (
    <View style={{ paddingTop: 30, flex: 1 }}>
      <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-start', alignItems: 'flex-end' }}>
        <CaixaNormal cor='red' />
        <CaixaNormal cor='blue' flex={2} />
      </View>
    </View>
  )
}

export default App