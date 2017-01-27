import React, {Component} from 'react'
import { connect } from 'react-redux'
import './styles.scss'

class Parallaxer extends Component{
  state = {
    originalHeight: null
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
    this.setState({
      originalHeight: this.refs.ParallaxerContainer.getBoundingClientRect().height
    })
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    let winScrollY = window.scrollY
    let numOfPixelsTrimmedByOneHundredPercent = 160;
    let newHeight = this.state.originalHeight - numOfPixelsTrimmedByOneHundredPercent * winScrollY / this.state.originalHeight / 1;
    this.refs.ParallaxerContainer.style.height = newHeight + "px"
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