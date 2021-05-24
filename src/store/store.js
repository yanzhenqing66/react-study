import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import personReducer from './reducers/person'

// 合并rudecer
const reducers = combineReducers({
  personReducer: personReducer
})

export default createStore(reducers, applyMiddleware(thunk))