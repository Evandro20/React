export const adicionarTarefa = (tarefa) => {
    return {
        type: 'ADICIONAR_TAREFA',
        tarefa: tarefa
    }
}

export const atualizarColocartexto = (texto) => {
    return {
        type: 'ADICIONAR_TEXTO',
        texto: texto
    }
}