import React, {Component} from 'react'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import AppLayout from './containers/AppLayout'
import createRoutes from './routes'
import configureStore from './stores'

const rootRoute = {
  component: AppLayout,
  childRoutes: createRoutes(),
}

const store = configureStore()

export default class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <Router
          history={browserHistory}
          routes={rootRoute} />
      </Provider>
    )
  }
}