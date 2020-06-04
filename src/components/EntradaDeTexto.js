import React from 'react'
import { TextInput } from 'react-native'
import { connect } from 'react-redux';

import { atualizarColocartexto } from '../actions/tarefas'
const EntradaDeTexto = ({ colocarTexto, dispatch }) => {
    return (
        <TextInput
            style={styles.entradaDeTexto}
            value={colocarTexto}
            onChangeText={(novoTexto) => dispatch(atualizarColocartexto(novoTexto))}
        />
    );
};

const mapStateToStore = (store) => {
    return {
        colocarTexto: store.colocarTexto
    }
}

export default connect(mapStateToStore)(EntradaDeTexto)

const styles = {
    entradaDeTexto: {
        height: 100,
        borderWidth: 2,
        borderColor: '#000',
        marginVertical: 10,
    },
}