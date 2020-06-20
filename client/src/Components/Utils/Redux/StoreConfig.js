import { createStore, combineReducers, applyMiddleware } from 'redux'

import Filters from './Reducers/Filters'
import Auth from './Reducers/Auth'

const store = createStore(combineReducers({
    ArticleFilters: Filters,
    auth: Auth
},
), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store