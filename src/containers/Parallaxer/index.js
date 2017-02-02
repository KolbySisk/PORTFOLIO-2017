import React, {Component} from 'react'
import './styles.scss'

class Parallaxer extends Component{
  state = {
    maskedHeight: null,
    parallaxSpeed: .5 //pixels moved per pixel scrolled
  }

  componentDidMount(){
    setTimeout(() => {
      window.addEventListener('scroll', this.handleScroll)
    })
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    let winScrollY = window.scrollY
    let amountMoved = winScrollY * this.state.parallaxSpeed
    this.refs.ParallaxerContainer.style.transform = "translateY("+amountMoved+"px)"
  }

  render(){
    const { children } = this.props
    return (
      <div className="parallaxer" ref="ParallaxerContainer">
        { children }
      </div>
    )
  }
}

export default Parallaxer