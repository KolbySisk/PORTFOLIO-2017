import React, {Component} from 'react'
import { connect } from 'react-redux'
import Measure from 'react-measure'
import {
  stickyIckyStucked,
  stickyIckyUnstucked,
  stickyIckyAdded,
  stickyIckyWidthChange,
  stickyIckyStopped,
  stickyIckyUnstopped
} from './actions'
import './styles.scss'

class StickyIcky extends Component{
  state = {
    id: null,
    originalTop: null,
    stickBuffer: 10, // max number of pixels that can be between the top of the sticky and the top of the page beforoe sticking
    stopBuffer: 100 // max number of pixels that can be between the bottom of the sticky and the top of the container before hiding
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
    this.props.stickyIckyAdded(this.refs.stickyIckyContainer)
    this.setState({id: [...this.props.stickyIckyReducer.stickyIckies].pop().id})
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
  }

  stick(stickyIckyContext, winScrollY, stickyIckyY){
    stickyIckyContext.ref.style.width = stickyIckyContext.width + "px"

    // specific case: set technology list to the same size as the sticky title, if one is on the page
    if(stickyIckyContext.ref.firstChild.className === 'technology-list__list'){
      let headerHeight = stickyIckyContext.ref.querySelector("header").getBoundingClientRect().height
      let stuffTitleHeight = document.getElementsByClassName("sticky__title ")[0].getBoundingClientRect().height

      Array.from(stickyIckyContext.ref.querySelectorAll('.technology-card__body')).map(x => x.style.height = stuffTitleHeight - headerHeight + "px")
    }
    this.setState({ originalTop: winScrollY + stickyIckyY })
    this.props.stickyIckyStucked(this.state.id)
  }

  unstick(stickyIckyContext){
    //specific case: set technology list back to default size
    if(this.props.children.props.className === 'technology-list__list') Array.from(stickyIckyContext.ref.querySelectorAll('.technology-card__body')).map(x => x.style.height = 175 + "px")

    this.refs.stickyIckyContainer.removeAttribute("style")
    this.props.stickyIckyUnstucked(this.state.id)
  }

  stop(stickyIckyContext, stickyIckyHeight){
    let elementIsStopped = stickyIckyContext.stopped
    let elementIsTechnologyList = stickyIckyContext.ref.firstChild.className === 'technology-list__list'
    if(elementIsStopped || elementIsTechnologyList) return

    if(stickyIckyContext.ref.firstChild.className === 'sticky__title'){
      let technologyList = document.getElementsByClassName("technology-list__list ")
      technologyList[0].style.marginTop = stickyIckyHeight * -1 + 'px'
    }

    this.props.stickyIckyStopped(this.state.id)
    stickyIckyContext.ref.firstChild.style.marginTop = stickyIckyHeight * -1 + 'px'
  }

  unstop(stickyIckyContext){
    let elementIsStopped = stickyIckyContext.stopped
    let elementIsTechnologyList = stickyIckyContext.ref.firstChild.className === 'technology-list__list'
    if(!elementIsStopped || elementIsTechnologyList) return

    if(stickyIckyContext.ref.firstChild.className === 'sticky__title'){
      let technologyList = document.getElementsByClassName("technology-list__list ")
      technologyList[0].style.marginTop = 0
    }

    this.props.stickyIckyUnstopped(this.state.id)
    stickyIckyContext.ref.firstChild.style.marginTop = 0
  }

  handleScroll = (event) => {
    let stickyIckyContext = this.props.stickyIckyReducer.stickyIckies.find(si => si.id === this.state.id)
    // used to determine when to stickor unstick
    let winScrollY = window.scrollY
    let stickyIckyY = stickyIckyContext.ref.getBoundingClientRect().top
    // used to determine when to stop or unstop
    let containerBottom = stickyIckyContext.ref.closest(".container").getBoundingClientRect().bottom
    let stickyIckyHeight = stickyIckyContext.ref.firstChild.getBoundingClientRect().height

    // if we scroll within 20 pixes of the technology list we stickify it
    // check first to make sure it isn't already stuck so we don't stickify it every scroll
    if(stickyIckyY < this.state.stickBuffer && !stickyIckyContext.stuck){
      this.stick(stickyIckyContext, winScrollY, stickyIckyY)
    }
    // unstick it if we scroll past the original y of the list
    else if(winScrollY + this.state.stickBuffer < this.state.originalTop && stickyIckyContext.stuck){
      this.unstick(stickyIckyContext)
    }
    // stop at the bottom of the container
    else if(containerBottom - stickyIckyHeight - this.state.stopBuffer <= 0){
      this.stop(stickyIckyContext, stickyIckyHeight)
    }
    // unstop when coming back into the container
    else{
      this.unstop(stickyIckyContext, stickyIckyHeight)
    }
  }

  checkIfStickIckyIsStuck = () => {
    let stickyIcky = this.props.stickyIckyReducer.stickyIckies.find(si => si.id === this.state.id)
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
    let isStuck = this.checkIfStickIckyIsStuck() ? 'stuck' : ''
    return (
      <div className={"sticky-icky " + isStuck} ref="stickyIckyContainer">
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
  stickyIckyWidthChange,
  stickyIckyStopped,
  stickyIckyUnstopped
})(StickyIcky)