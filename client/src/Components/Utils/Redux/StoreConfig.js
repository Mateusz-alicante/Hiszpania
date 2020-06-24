import { createStore, combineReducers, applyMiddleware } from 'redux'

import Filters from './Reducers/FairFilters'
import Auth from './Reducers/Auth'

const store = createStore(combineReducers({
    FairFilters: Filters,
    auth: Auth
},
), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store