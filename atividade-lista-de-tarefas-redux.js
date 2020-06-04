import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import BotaoAdicionar from './src/components/BotaoAdicionar'
import EntradaDeTexto from './src/components/EntradaDeTexto'
import ListaDeTarefas from './src/components/ListaDeTarefas'
import { adicionarTarefas } from './src/reducers/tarefas'

let store = createStore(adicionarTarefas)

const App = () => {

  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1, margin: 10 }}>
        <Text style={styles.tituloCabecalho}> TAREFAS A FAZER</Text>
        <ListaDeTarefas />
        <EntradaDeTexto />
        <BotaoAdicionar />
      </SafeAreaView>
    </Provider>
  );
};


export default App;
const styles = {
  tituloCabecalho: {
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 10,
    fontSize: 24,
  }
}