import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'
import { adicionarTarefa, atualizarColocartexto } from '../actions/tarefas'

const BotaoAdicionar = ({ colocarTexto, dispatch }) => {
    return (
        <TouchableOpacity
            style={styles.botao}
            onPress={() => {
                dispatch(adicionarTarefa(colocarTexto))
                dispatch(atualizarColocartexto(''))
            }}>
            <Text style={styles.textoBotao}>ADICIONAR TAREFA</Text>
        </TouchableOpacity>
    );
};

const mapStateToProps = (store) => {
    return {
        colocarTexto: store.colocarTexto
    }
}

export default connect(mapStateToProps)(BotaoAdicionar)

const styles = {
    botao: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        color: '#FFF',
        borderRadius: 5,
        height: 50,
        marginVertical: 5,
    },
    textoBotao: {
        fontWeight: 'bold',
        color: '#FFF',
    },
}