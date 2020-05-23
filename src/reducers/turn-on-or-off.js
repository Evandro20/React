const initialState = { on: false }

export const turnOnOrOffR = (state = initialState, action) => {
    switch (action.type) {
        case 'TURN_ON_OR_OFF':
            return { ...state, on: action.on }
        default:
            return state
    }
}