import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native'

const Tarefa = ({ tarefa }) => {
    const [selecionada, seleciona] = useState(false);
    return (
        <TouchableOpacity
            style={styles.tarefa}
            onPress={() => seleciona(!selecionada)}>
            {selecionada && <Text style={{ marginRight: 10 }}>X</Text>}
            <Text>{tarefa}</Text>
        </TouchableOpacity>
    );
};

export default Tarefa

const styles = {
    tarefa: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingVertical: 10,
    },
}