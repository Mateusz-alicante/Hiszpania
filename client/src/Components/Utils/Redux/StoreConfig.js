import { createStore, combineReducers, applyMiddleware } from 'redux'

import Test from './Reducers/Test'
import Auth from './Reducers/Auth'

const store = createStore(combineReducers({
    test: Test,
    auth: Auth
},
), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store