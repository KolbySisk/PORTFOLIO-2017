import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import FontFaceObserver from 'fontfaceobserver'
import App from './app'
import './styles.scss'

const rootNode = document.getElementById('root')

const initApp = () => {
  ReactDOM.render(<App />, rootNode)

  if (module.hot) {
    module.hot.accept('./app', () => {
      const NextApp = require('./app').default
      ReactDOM.render(<NextApp />, rootNode)
    })
  }
}

var font = new FontFaceObserver('Againts');
font.load(null, 10000).then(function () {
  initApp();
}, function () {
  initApp();
});