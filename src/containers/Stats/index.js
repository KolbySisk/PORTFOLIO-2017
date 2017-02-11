import React, {Component} from 'react'
import { connect } from 'react-redux'
import Stat from '../../components/Stat'
import './styles.scss'

class ContactForm extends Component {
  render() {
    return (
      <section className="stats">
        <h1>coding and snowboarding</h1>
        <h2>just some random stats</h2>
        <div className="flex">
          <div className="stats-coding">
            {/*<Stat src="images/icon-github.png" alt="github logo" value="11,981" title="lines of code"/>*/}
            <Stat href="https://github.com/KolbySisk" src="images/icon-github.png" alt="github logo" value="12" title="repositories"/>
            <Stat href="https://www.linkedin.com/in/kolbysisk" src="images/icon-linkedin.png" alt="linked-in logo" value="152" title="skill endorsements"/>
            <Stat href="http://stackoverflow.com/users/1933563/kolby" src="images/icon-stackoverflow.png" alt="stackoverflow logo" value="129,000" title="people reached"/>
            <Stat href="http://stackoverflow.com/users/1933563/kolby" src="images/icon-stackoverflow.png" alt="stackoverflow logo" value="1,530" title="reputation"/>
            <Stat href="http://stackoverflow.com/users/1933563/kolby" src="images/icon-stackoverflow.png" alt="stackoverflow logo" value="136" title="answers"/>
          </div>

          <div className="stats-snowboarding">

            <header className="header-stats">
              <div className="header-stat">
                <h2 className="header-stat__value">120,667</h2>
                <h3 className="header-stat__title">vertical feet</h3>
              </div>

              <div className="header-stat">
                <h2 className="header-stat__value">keystone</h2>
                <h3 className="header-stat__title">most visited</h3>
              </div>

              <div className="header-stat">
                <h2 className="header-stat__value">9</h2>
                <h3 className="header-stat__title">trips to keystone</h3>
              </div>

              <div className="header-stat">
                <h2 className="header-stat__value">810</h2>
                <h3 className="header-stat__title">miles driven</h3>
              </div>
            </header>


            <div className="bar-chart-container">
              <div className="bar-chart">
                <div className="bar-container">
                  <div className="bar-chart__bar" style={{height: '100%'}}>
                    <h3 className="bar-chart__value">12,000</h3>
                    <h2 className="bar-chart__x">10</h2>
                  </div>                  
                </div>

                <div className="bar-container">
                  <div className="bar-chart__bar" style={{height: '80%'}}>
                    <h3 className="bar-chart__value">12,000</h3>
                    <h2 className="bar-chart__x">11</h2>
                  </div>                  
                </div>

                <div className="bar-container">
                  <div className="bar-chart__bar" style={{height: '68%'}}>
                    <h3 className="bar-chart__value">12,000</h3>
                    <h2 className="bar-chart__x">17</h2>
                  </div>              
                </div>

                <div className="bar-container">
                  <div className="bar-chart__bar" style={{height: '100%'}}>
                    <h3 className="bar-chart__value">12,000</h3>
                    <h2 className="bar-chart__x">10</h2>
                  </div>                  
                </div>

                <div className="bar-container">
                  <div className="bar-chart__bar" style={{height: '80%'}}>
                    <h3 className="bar-chart__value">12,000</h3>
                    <h2 className="bar-chart__x">11</h2>
                  </div>                  
                </div>

                <div className="bar-container">
                  <div className="bar-chart__bar" style={{height: '68%'}}>
                    <h3 className="bar-chart__value">12,000</h3>
                    <h2 className="bar-chart__x">17</h2>
                  </div>              
                </div>

                <div className="bar-container">
                  <div className="bar-chart__bar" style={{height: '100%'}}>
                    <h3 className="bar-chart__value">12,000</h3>
                    <h2 className="bar-chart__x">10</h2>
                  </div>                  
                </div>


              </div>

            </div>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  //statasReducer: state.statasReducer
})

export default connect(mapStateToProps)(ContactForm)