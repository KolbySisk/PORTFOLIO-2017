import React, {Component} from 'react'
import { connect } from 'react-redux'
import './styles.scss'

class Parallaxer extends Component{
  state = {
    originalHeight: null
  }

  componentDidMount(){
    //timeout was needed because containerheight was coming back wrong. Has something to do with the images being passed in.
    setTimeout(() => {
      window.addEventListener('scroll', this.handleScroll)
      this.setState({
        originalHeight: this.refs.ParallaxerContainer.getBoundingClientRect().height
      })
    })
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    // cool math that changes the height of the container
    // the new height will be 30% of the original height (or whatever percent is saved in percentToTrim) by the time the top of the page gets to the bottom of the element
    // logic currently only works for containers at the top of the page (banner) but I plan to make it more agnostic if needed
    let winScrollY = window.scrollY
    let percentToTrim = .30
    let numberOfPixelsToTrim = this.state.originalHeight * percentToTrim
    let endingHeight = this.state.originalHeight - numberOfPixelsToTrim
    let amountTrimmed = this.state.originalHeight - this.refs.ParallaxerContainer.getBoundingClientRect().height
    let amountScrolled = winScrollY + amountTrimmed
    let numberOfPixelsToTrimPerScrolledPixel = numberOfPixelsToTrim / this.state.originalHeight
    let newHeight = this.state.originalHeight - numberOfPixelsToTrimPerScrolledPixel * amountScrolled
    if(newHeight >= endingHeight) this.refs.ParallaxerContainer.style.height = newHeight + "px"
  }

  render(){
    return (
      <div className="parallaxer" ref="ParallaxerContainer">
        {this.props.children}
      </div>
    )
  }
}

export default Parallaxer