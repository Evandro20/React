import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux'
import { turnOnOrOff } from '../actions/turn-on-or-off'

const Box = ({ color, on, dispatch }) => {
  return (
    <View style={[styles.box, { backgroundColor: color, padding: 20 }]}>
      {on ? <Text>Ligado</Text> : <Text>Desligado</Text>}
      <Button title="Ligar/Desligar" onPress={() => dispatch(turnOnOrOff(!on))} />
      <Button title="Ligar/Desligar TODAS CAIXAS" onPress={() => dispatch(turnOnOrOff(!on))} />
    </View>
  );
};
const mapStateToStore = (store) => {
  return {
    on: store.on
  }
}

export default connect(mapStateToStore)(Box)

const styles = {
  margin: 10,
  box: { flex: 1 },
};