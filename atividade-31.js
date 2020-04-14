import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';


class Votos extends React.Component {
  constructor() {
    super();
    this.state = {
      voto: 0,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> VOTO = {this.state.voto} </Text>
        <Button
          onPress={() => this.setState({ voto: this.state.voto + 1 })}
          title="Adicionar Um Voto!"
        />
      </View>
    )
  }
}

export default Votos

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  }
})