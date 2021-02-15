import { createStore } from 'redux'
// import cakeReducer from './cakes/cakeReducer'
import rootReducer from './rootReducer'

const store = createStore(rootReducer)

export default store