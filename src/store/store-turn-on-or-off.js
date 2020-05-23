import { turnOnOrOffR } from '../reducers/turn-on-or-off'
import { createStore } from 'redux'
export let store = createStore(turnOnOrOffR)