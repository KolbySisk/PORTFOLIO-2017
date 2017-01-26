import React, {Component} from 'react'
import { applyRouterMiddleware, Router, hashHistory } from 'react-router'
import { useScroll } from 'react-router-scroll'
import { Provider } from 'react-redux'
import AppLayout from './containers/AppLayout'
import createRoutes from './routes'
import AppStore from './store'

const rootRoute = {
  component: AppLayout,
  childRoutes: createRoutes(),
}

export default class App extends Component{
  render(){
    return (
      <Provider store={AppStore}>
        <Router
          history={hashHistory}
          routes={rootRoute}
          render={applyRouterMiddleware(useScroll())}/>
      </Provider>
    )
  }
}