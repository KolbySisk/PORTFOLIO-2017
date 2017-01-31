import React, {Component} from 'react'
import { connect } from 'react-redux'
import Measure from 'react-measure'
import {
  stickyIckyStucked,
  stickyIckyUnstucked,
  stickyIckyAdded,
  stickyIckyWidthChange
} from './actions'
import './styles.scss'

class StickyIcky extends Component{
  state = {
    id: null,
    originalY: null
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
    this.props.stickyIckyAdded(this.refs.stickyIckyContainer)
    this.setState({id: [...this.props.stickyIckyReducer.stickyIckies].pop().id})
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    let stickyIckyContext = this.props.stickyIckyReducer.stickyIckies.find(si => si.id == this.state.id)
    let winScrollY = window.scrollY
    let stickyIckyY = stickyIckyContext.ref.getBoundingClientRect().top

    // if we scroll within 20 pixes of the technology list we stickify it
    // check first to make sure it isn't already stuck so we don't stickify it every scroll
    if(stickyIckyY < 10 && !stickyIckyContext.stuck){
      stickyIckyContext.ref.style.width = stickyIckyContext.width + "px"

      // specific case: set technology list to the same size as the sticky title, if one is on the page
      if(this.props.children.props.className === 'technology-list__list' && document.getElementsByClassName("sticky__title ").length){
        let headerHeight = stickyIckyContext.ref.querySelector("header").getBoundingClientRect().height
        let stuffTitleHeight = document.getElementsByClassName("sticky__title ")[0].getBoundingClientRect().height

        Array.prototype.slice.call(stickyIckyContext.ref.querySelectorAll('.technology-card__body')).map(x => x.style.height = stuffTitleHeight - headerHeight + "px")
      }
      this.setState({ originalY: winScrollY + stickyIckyY })
      this.props.stickyIckyStucked(this.state.id)
    }

    //unstick it if we scroll past the original y of the list
    else if(winScrollY + 10 < this.state.originalY && stickyIckyContext.stuck){
      //specific case: set technology list back to default size
      if(this.props.children.props.className === 'technology-list__list') Array.prototype.slice.call(stickyIckyContext.ref.querySelectorAll('.technology-card__body')).map(x => x.style.height = 175 + "px")

      this.refs.stickyIckyContainer.removeAttribute("style")
      this.props.stickyIckyUnstucked(this.state.id)
    }
  }

  checkIfStickIckyIsStuck = () => {
    let stickyIcky = this.props.stickyIckyReducer.stickyIckies.find(si => si.id == this.state.id)
    return stickyIcky ? stickyIcky.stuck: false
  }

  setWidth = (width) => {
    setTimeout(() => {
      this.props.stickyIckyWidthChange({
        id: this.state.id,
        width: width
      })
    })
  }

  render(){
    return (
      <div className={"sticky-icky " + (this.checkIfStickIckyIsStuck() ? 'stuck' : '')} ref="stickyIckyContainer">
        <Measure onMeasure={({width}) => this.setWidth(width)}>
          {this.props.children}
        </Measure>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  stickyIckyReducer: state.stickyIckyReducer
})

export default connect(mapStateToProps, { 
  stickyIckyStucked,
  stickyIckyUnstucked,
  stickyIckyAdded,
  stickyIckyWidthChange
})(StickyIcky)