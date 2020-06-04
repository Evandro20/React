import React from 'react';
import { SafeAreaView } from 'react-native';
import Box from './src/components/Box'
import { Provider } from 'react-redux'
import { store } from './src/store/store-turn-on-or-off'

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <Box color="orange" />
        <Box color="blue" />
      </SafeAreaView>
    </Provider>
  );
};


export default App;