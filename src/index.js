import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import WebFont from 'webfontloader'
import './styles.scss'

const rootNode = document.getElementById('root')

ReactDOM.render(<App />, rootNode)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    ReactDOM.render(<NextApp />, rootNode)
  })
}

const WebFontConfig = {
  custom: {
    families: ['Againts'],
    urls: ['./styles.scss']
  }
}

WebFont.load(WebFontConfig)