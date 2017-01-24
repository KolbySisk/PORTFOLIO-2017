import React, { Component } from 'react'
import './styles.scss'

export default class Outro extends Component{
  render(){
    return (
      <section className="outro">
       <div className="outro__image">
        <img src="/images/me.jpg" alt="sexy guy smiling" />
       </div>
       <div className="outro__message">
        <h1><span className="top">Check out my</span> blog</h1>
       </div>
      </section>
    )
  }
}