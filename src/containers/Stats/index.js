import React, {Component} from 'react'
import { connect } from 'react-redux'
import Stat from '../../components/Stat'
import HeaderStat from '../../components/HeaderStat'
import BarGraph from '../../components/BarGraph'
import { loadStats } from './actions'
import './styles.scss'

class Stats extends Component {
  state = {}

  componentDidMount(){
    this.props.loadStats(this)
  }

  initStats(stats){
    this.setState(stats)
    window.addEventListener('scroll', this.watchStatsScreenPosition)
  }

  watchStatsScreenPosition = (event) => {
    if(this.refs.codingContainer){
      if(this.refs.codingContainer.getBoundingClientRect().top < 250 && this.refs.codingContainer.getBoundingClientRect().top > 100){
        this.initStatAnimation('coding')
      }
    }
    if(this.refs.snowboardingContainer){
      if(this.refs.snowboardingContainer.getBoundingClientRect().top < 250 && this.refs.snowboardingContainer.getBoundingClientRect().top > 100){
        this.initStatAnimation('snowboarding')
        this.initGraphAnimation()
        window.removeEventListener('scroll', this.watchStatsScreenPosition)
      }
    } 
  }

  getIncrementedValue(displayValue, endValue){
    let endValueCopy = endValue.toString().replace(/,/g, '')
    let displayValueCopy = displayValue.toString().replace(/,/g, '')

    if(displayValueCopy === endValueCopy) return false
    
    let endValueArray = endValueCopy.split('')
    let displayValueArray = displayValueCopy.split('')

    while(displayValueArray.length !== endValueArray.length) displayValueArray.push("0")

    displayValueArray.forEach((val, i) => {
      if(val >= endValueArray[i]) return
      val ++
      displayValueArray[i] = val.toString()
    })

    return parseInt(displayValueArray.join(''), 10).toLocaleString()
  }

  initStatAnimation(type){
    var clonedStats = type === 'coding' ? JSON.parse(JSON.stringify(this.state.codingStats)) : JSON.parse(JSON.stringify(this.state.snowboardStats))
    clonedStats.forEach(stat => {
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
      }, 100)
    })
  }

  initGraphAnimation(){
    var clonedData = JSON.parse(JSON.stringify(this.state.snowboardData))

    clonedData.forEach(data => {
      let endPercent = parseInt(data.percent.toString().replace('%', ''), 10)
      let animationInterval = setInterval(() => {
        let displayPercent = parseInt(data.displayPercent.toString().replace('%', ''), 10)

        if(displayPercent === endPercent){
          clearInterval(animationInterval)
          return
        }

        displayPercent ++
        data.displayPercent = displayPercent + '%'

        this.setState({ snowboardData: clonedData })
      }, 10)
    })
  }

  render() {
    let { codingStats, snowboardStats, snowboardData } = this.state
    return (
      <section className="stats" ref="stats">
        <h1>coding and snowboarding</h1>
        <h2>just some random stats</h2>
        <div className="flex">
          <div className="stats-coding" ref="codingContainer">
            { codingStats ? codingStats.map((stat, i) =>
              <Stat key={ i } src={ stat.src } href={ stat.href } value={ stat.displayValue } title={ stat.title } />
            ) : '' }
          </div>

          <div className="stats-snowboarding" ref="snowboardingContainer">
            <header className="header-stats">
              { snowboardStats ? snowboardStats.map((stat, i) =>
                <HeaderStat key={ i } value={ stat.displayValue } title={ stat.title } />
              ) : '' }
            </header>
            { snowboardData ? <BarGraph snowboardData={ snowboardData }/> : '' }
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  stats: state.statsReducer.stats
})

export default connect(mapStateToProps, { loadStats })(Stats)