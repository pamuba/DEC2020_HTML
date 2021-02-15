// const redux = require('redux')
// const createStore = redux.createStore

// const BUY_CAKE = 'BUY_CAKE'
// const BUY_ICECREAM = 'BUY_ICECREAM'

// //function - return an object
// function buyCake(){
//     return {
//         type:BUY_CAKE,
//         info:"First Redux action"
//     }
// }
// function buyIceCream(){
//     return {
//         type:BUY_ICECREAM,
//     }
// }

// //fns (previousState, action)
// const initialState = {
//     numofCakes:10,
//     numofIceCreams:20
// }

// const reducer = (state = initialState, action)=>{
//     switch(action.type){
//         case BUY_CAKE: return {
//             ...state,
//             numofCakes:state.numofCakes - 1
//         }
//         case BUY_ICECREAM: return {
//             ...state,
//             numofIceCreams:state.numofIceCreams - 1
//         }
//         default: return state
//     }
// }

// const store = createStore(reducer)
// console.log('Initial State', store.getState())
// const unsubscribe = store.subscribe(()=>console.log('Updated state', store.getState()))
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyIceCream())
// store.dispatch(buyIceCream())
// unsubscribe()




const redux = require('redux')
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake () {
  return {
    type: BUY_CAKE,
    info: 'First redux action'
  }
}

function buyIceCream () {
  return {
    type: BUY_ICECREAM
  }
}

// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20
// }

const initialCakeState = {
  numOfCakes: 10
}

const initialIceCreamState = {
  numOfIceCreams: 20
}

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE: return {
//       ...state,
//       numOfCakes: state.numOfCakes - 1
//     }
//     case BUY_ICECREAM: return {
//       ...state,
//       numOfIceCreams: state.numOfIceCreams - 1
//     }
//     default: return state
//   }
// }

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }
    default: return state
  }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM: return {
      ...state,
      numOfIceCreams: state.numOfIceCreams - 1
    }
    default: return state
  }
}

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial State ', store.getState())
const unsubscribe = store.subscribe(() => { })
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()