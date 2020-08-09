import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import userReducer from '../reducers/userReducer'
import customersReducer from '../reducers/customersReducer'


const configureStore = () => {
    const store = createStore(combineReducers({
        user: userReducer,
        customers: customersReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore
