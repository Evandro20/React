const initialState = {
  tarefas: [],
}
export const adicionarTarefas = (state = initialState, action) => {
  switch (action.type) {
    case 'ADICIONAR_TAREFA':
      return { ...state, tarefas: [...state.tarefas, action.tarefa] }
    case 'ADICIONAR_TEXTO':
      return { ...state, colocarTexto: action.texto }
    default:
      return state
  }
}