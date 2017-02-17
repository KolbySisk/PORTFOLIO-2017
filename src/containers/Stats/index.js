import React, {Component} from 'react'
import { connect } from 'react-redux'
import Stat from '../../components/Stat'
import HeaderStat from '../../components/HeaderStat'
import BarGraph from '../../components/BarGraph'
import './styles.scss'

class ContactForm extends Component {
  state = {
    codingStats: [{
      href: "https://github.com/KolbySisk",
      src: "images/icon-github.png",
      alt: "github logo",
      displayValue: 0,
      value: "12",
      title: "repositories"
    },{
      href: "https://www.linkedin.com/in/kolbysisk",
      src: "images/icon-linkedin.png",
      alt: "linked-in logo",
      displayValue: 0,
      value: "152",
      title: "skill endorsements"
    },{
      href: "http://stackoverflow.com/users/1933563/kolby",
      src: "images/icon-stackoverflow.png",
      alt: "stackoverflow logo",
      displayValue: 0,
      value: "192,120",
      title: "people reached"
    },{
      href: "http://stackoverflow.com/users/1933563/kolby",
      src: "images/icon-stackoverflow.png",
      alt: "stackoverflow logo",
      displayValue: 0,
      value: "1,530",
      title: "reputation"
    },{
      href: "http://stackoverflow.com/users/1933563/kolby",
      src: "images/icon-stackoverflow.png",
      alt: "stackoverflow logo",
      displayValue: 0,
      value: "136",
      title: "answers"
    }],

    snowboardStats: [{
      displayValue: 0,
      value: '120,667',
      title: 'vertical feet'
    },{
      displayValue: 0,
      value: 'keystone',
      title: 'most visited'
    },{
      displayValue: 0,
      value: '9',
      title: 'trips to keystone'
    },{
      displayValue: 0,
      value: '810',
      title: 'miles driven'
    }],

    snowboardData: [{  
      Date:"01/28/2017",
      ResortName: "Keystone",
      VerticalFeet:17413,
      TotalVerticalFeet: 17413
    },
    {  
      Date:"01/21/2017",
      ResortName: "Keystone",
      VerticalFeet:20773,
      TotalVerticalFeet: 20773
    },
    {  
      Date:"12/30/2016",
      ResortName: "Keystone",
      VerticalFeet:17967,
      TotalVerticalFeet: 17967
    },
    {  
      Date:"12/29/2016",
      ResortName: "Keystone",
      VerticalFeet:9722,
      TotalVerticalFeet: 9722
    },
    {  
      Date:"12/19/2016",
      ResortName: "Keystone",
      VerticalFeet:5263,
      TotalVerticalFeet: 5263
    },
    {  
      Date:"12/11/2016",
      ResortName: "Keystone",
      VerticalFeet:6508,
      TotalVerticalFeet: 6508
    },
    {  
      Date:"12/10/2016",
      ResortName: "Keystone",
      VerticalFeet:10471,
      TotalVerticalFeet: 10471
    }]
  }

  componentDidMount(){
    this.prepStats('coding')
    this.prepStats('snowboarding')
    window.addEventListener('scroll', this.watchStatsScreenPosition)
  }

  watchStatsScreenPosition = (event) => {
    if(this.refs.stats.getBoundingClientRect().top < 100){
      this.initStatAnimation('coding')
      this.initStatAnimation('snowboarding')

      window.removeEventListener('scroll', this.watchStatsScreenPosition)
    }
  }

  getSnowboardData(){
    let data = []
    let mostVerticalFeet = Math.max.apply(Math,this.state.snowboardData.map(o => o.TotalVerticalFeet))

    this.state.snowboardData.forEach(sd => {
      let dateArray = sd.Date.split('/')
      data.push({
        date: dateArray[0] + '/' + dateArray[1],
        resortName: sd.ResortName,
        value: sd.TotalVerticalFeet.toLocaleString(),
        percent: (sd.TotalVerticalFeet / mostVerticalFeet * 100) + '%'
      })
    })

    return data;
  }

  getIncrementedValue(displayValue, endValue){
    if(displayValue === endValue) return false
    if(displayValue === undefined || endValue === undefined) return false

    let endValueArray = endValue.toString().replace(/,/g, '').split('')
    let displayValueArray = displayValue.toString().replace(/,/g, '').split('')

    while(displayValueArray.length !== endValueArray.length) displayValueArray.push("0")

    displayValueArray.forEach((val, i) => {
      if(val >= endValueArray[i]) return
      val ++
      displayValueArray[i] = val.toString()
    })

    let newValue = parseInt(displayValueArray.join('')).toLocaleString()
    return newValue
  }

  prepStats(type){
    var clonedStats = type === 'coding' ? JSON.parse(JSON.stringify(this.state.codingStats)) : JSON.parse(JSON.stringify(this.state.snowboardStats))
    clonedStats.forEach(stat => {
      if(stat.displayValue === undefined) return

      stat.value = stat.value.toString().replace(/,/g, '')
      stat.displayValue = stat.displayValue.toString().replace(/,/g, '')

      if(isNaN(stat.value)){
        stat.displayValue = stat.value
        type === 'coding' ? this.setState({ codingStats: clonedStats }) : this.setState({ snowboardStats: clonedStats })
        return
      }

      if(stat.displayValue === undefined || stat.value === undefined) return false

      let endValueArray = stat.value.toString().replace(/,/g, '').split('')
      let displayValueArray = stat.displayValue.toString().replace(/,/g, '').split('')
      while(displayValueArray.length !== endValueArray.length) displayValueArray.push("0")

      let newValue = displayValueArray.join('')
      stat.displayValue = newValue
      type === 'coding' ? this.setState({ codingStats: clonedStats }) : this.setState({ snowboardStats: clonedStats })
    })
  }

  initStatAnimation(type){
    var clonedStats = type === 'coding' ? JSON.parse(JSON.stringify(this.state.codingStats)) : JSON.parse(JSON.stringify(this.state.snowboardStats))
    clonedStats.forEach(stat => {
      if(stat.displayValue === undefined) return

      stat.value = stat.value.toString().replace(/,/g, '')
      stat.displayValue = stat.displayValue.toString().replace(/,/g, '')

      if(isNaN(stat.value)) return

      let animationInterval = setInterval(() => {
        const newValue = this.getIncrementedValue(stat.displayValue, stat.value)
        
        if(newValue === false){
          clearInterval(animationInterval)
          return
        }

        stat.displayValue = newValue
        type === 'coding' ? this.setState({ codingStats: clonedStats }) : this.setState({ snowboardStats: clonedStats })
      }, 300)
    })
  }

  initGraphAnimation(){

  }

  render() {
    let snowboardData = this.getSnowboardData()
    let { codingStats, snowboardStats } = this.state
    return (
      <section className="stats" ref="stats">
        <h1>coding and snowboarding</h1>
        <h2>just some random stats</h2>
        <div className="flex">
          <div className="stats-coding">
            {codingStats.map((stat, i) =>
              <Stat key={ i } src={ stat.src } href={ stat.href } value={ stat.displayValue } title={ stat.title } />
            )}
          </div>

          <div className="stats-snowboarding">
            <header className="header-stats">
              {snowboardStats.map((stat, i) =>
                <HeaderStat key={ i } value={ stat.displayValue } title={ stat.title } />
              )}
            </header>
            <BarGraph snowboardData={ snowboardData }/>
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