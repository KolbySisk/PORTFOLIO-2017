import React, {Component} from 'react'
import { applyRouterMiddleware, Router, hashHistory } from 'react-router'
import { useScroll } from 'react-router-scroll'
import AppLayout from './layouts/AppLayout'
import createRoutes from './routes'

const rootRoute = {
  component: AppLayout,
  childRoutes: createRoutes(),
}

export default class App extends Component{
  render(){
    return (
      <Router
        history={hashHistory}
        routes={rootRoute}
        render={applyRouterMiddleware(useScroll())}/>
    )
  }
}