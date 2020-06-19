import React from 'react';

import Editor from './Components/Editor/Editor'
import Router from './Components/Router/Router'

import store from './Components/Utils/Redux/StoreConfig'
import { Provider } from 'react-redux'


class App extends React.Component {

  render() {
    return(
      <Provider store={store}>
        <h1> React App </h1>
        <Router />
      </Provider>
    )
  }
}


export default App;
