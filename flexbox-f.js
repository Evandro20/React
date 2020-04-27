import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, TextInput } from 'react-native';
import { CaixaNormal } from './src/components/Caixa';


const App = () => {
  return (
    <View style={{ paddingTop: 30, flex: 1 }}>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <CaixaNormal cor='red' />
        <View style={{ flexDirection: 'row', flex: 1, paddingHorizontal: 30 }}>
          <CaixaNormal cor='blue' />
        </View>
      </View>
      <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
        <CaixaNormal cor='yellow' />
      </View>
    </View>
  )
}

export default App