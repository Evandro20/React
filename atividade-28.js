import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';

function Votos() {
  const [totalDeVotos, setTotalDeVotos] = useState(0);

  return (
    <View>
    <Text> O total de Votos é {totalDeVotos}! </Text>
    <Button
      onPress ={() => {
        setTotalDeVotos (totalDeVotos + 1 );
      }}
      title = " Adicionar um voto! "
    />
    </View> 
  );
}

export default function Contar() {
  return (
        <SafeAreaView style = {styles.container}>
          <Votos />
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  }
})
