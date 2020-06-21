import React from 'react';

import Router from './Components/Routers/MainRouter/Router'
import Root from './Containers/Root/Root'

import store from './Components/Utils/Redux/StoreConfig'
import { Provider } from 'react-redux'


class App extends React.Component {

  render() {
    return(
      <Provider store={store}>
        <Root />
      </Provider>
    )
  }
}


export default App;
