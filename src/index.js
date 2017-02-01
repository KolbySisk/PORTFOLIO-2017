import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import FontFaceObserver from 'fontfaceobserver'
import App from './app'
import './styles.scss'

const rootNode = document.getElementById('root')


  ReactDOM.render(<App />, rootNode)

  if (module.hot) {
    module.hot.accept('./app', () => {
      const NextApp = require('./app').default
      ReactDOM.render(<NextApp />, rootNode)
    })
  }


// var fontA = new FontFaceObserver('Againts');
// var fontB = new FontFaceObserver('roboto');

// Promise.all([fontA.load(), fontB.load()])
//   .then(() => {
//     initApp()
//   }, () => {
//     initApp()
//   })