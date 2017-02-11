import React, {Component} from 'react'
import { connect } from 'react-redux'
import Stat from '../../components/Stat'
import './styles.scss'

class ContactForm extends Component {
  state = {
    snowboardData: [{  
      "Date":"01/28/2017",
      "ResortName":"Keystone",
      "VerticalFeet":17413,
      "TotalVerticalFeet":17413
    },
    {  
      "Date":"01/21/2017",
      "ResortName":"Keystone",
      "VerticalFeet":20773,
      "TotalVerticalFeet":20773
    },
    {  
      "Date":"12/30/2016",
      "ResortName":"Keystone",
      "VerticalFeet":17967,
      "TotalVerticalFeet":17967
    },
    {  
      "Date":"12/29/2016",
      "ResortName":"Keystone",
      "VerticalFeet":9722,
      "TotalVerticalFeet":9722
    },
    {  
      "Date":"12/19/2016",
      "ResortName":"Keystone",
      "VerticalFeet":5263,
      "TotalVerticalFeet":5263
    },
    {  
      "Date":"12/11/2016",
      "ResortName":"Keystone",
      "VerticalFeet":6508,
      "TotalVerticalFeet":6508
    },
    {  
      "Date":"12/10/2016",
      "ResortName":"Keystone",
      "VerticalFeet":10471,
      "TotalVerticalFeet":10471
    }]
  }

  getSnowboardData(){
    let data = []
    let mostVerticalFeet = Math.max.apply(Math,this.state.snowboardData.map(function(o){return o.TotalVerticalFeet;}))

    this.state.snowboardData.forEach((sd) => {
      let dateArray = sd.Date.split('/')
      console.log(sd.TotalVerticalFeet / mostVerticalFeet * 100)
      data.push({
        date: dateArray[0] + '/' + dateArray[1],
        resortName: sd.ResortName,
        value: sd.TotalVerticalFeet.toLocaleString(),
        percent: (sd.TotalVerticalFeet / mostVerticalFeet * 100) + '%'
      })
    })

    return data;
  }

  render() {
    let snowboardData = this.getSnowboardData()
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
                {snowboardData.map((data, i) =>
                  <div key={ i } className="bar-container">
                    <div className="bar-chart__bar" style={{height: data.percent}}>
                      <h3 className="bar-chart__value">{ data.value }</h3>
                      <h2 className="bar-chart__x">{ data.date }</h2>
                    </div>                  
                  </div>
                )}
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