import { createStore, applyMiddleware, combineReducers } from 'redux'
import { HomeReducer } from './Home.reducer.js'
import { ShoppingReducer } from './Shopping.reducer.js'
export const store = createStore(
    combineReducers({
        HomeReducer, 
        ShoppingReducer,
    }),
    // applyMiddleware()
)

