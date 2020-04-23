import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert } from 'react-native';


class ContadorDeCliques extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cliques: 0, cronometro: 0 };
    this.inscricaoCronometro;
    this.lidarComClique = this.lidarComClique.bind(this);
  }


  componentDidMount() {
    this.inscricaoCronometro = setInterval(() => {
      this.incrementarCronometro();
    }, 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.cronometro > 29) {
        this.props.meDestrua();
    }
  }
  componentWillUnmount() {
    clearInterval(this.inscricaoCronometro)
  }

  incrementarCronometro() {
    this.setState(state => ({ cronometro: state.cronometro + 1 }));
  }
  lidarComClique() {
    this.setState(state => ({ cliques: state.cliques + 1 }));
  }

  render() {
    return (
      <View style={{ paddingTop: 50 }}>
        <Text> Você clicou {this.state.cliques} vezem em {this.state.cronometro} segondos</Text>
        <Button title='Clique Aqui'
          onPress={this.lidarComClique} />
      </View>
    )
  }
}

export default ContadorDeCliques;

class DestruidorDeComponente extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderizarFilho: true,
    };
    this.destruirFilho = this.destruirFilho.bind(this);
  }

  destruirFilho () {
    this.setState( {renderizarFilho: false});
  }

  render() {
    return
    <View>
      {this.state.renderizarFilho && <ContadorDeCliques meDestrua = {this.destruirFilho}/>}
    </View>
  }
}