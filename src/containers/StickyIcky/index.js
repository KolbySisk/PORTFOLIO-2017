import React, {Component} from 'react'
import { connect } from 'react-redux'
import { stickyIckyStucked, stickyIckyUnstucked } from './actions'
import './styles.scss'

class StickyIcky extends Component{
  constructor(props) {
    super(props)

    this.state = {
      id: props.id,
      stickyIckyWidth: null,
      originalY: null,
      debounce: false
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll)

    this.setState({
      stickyIckyWidth: this.refs.stickyIckyContainer.firstChild.getBoundingClientRect().width
    })
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll)
  }

  checkIfStickIckyIsStuck = (id) => {
    return this.props.stickyIckyReducer.stuckStickyIckies.find(x => x === id)
  }

  handleScroll = (event) => {
    if(this.state.debounce) return

    let winScrollY = window.scrollY
    let stickyIckyY = this.refs.stickyIckyContainer.getBoundingClientRect().top

    // if we scroll within 20 pixes of the technology list we stickify it
    // check first to make sure it isn't already stuck so we don't stickify it every scroll
    if(stickyIckyY < 20 && !this.checkIfStickIckyIsStuck(this.state.id)){
      this.refs.stickyIckyContainer.style.width = this.state.stickyIckyWidth + "px"

      // doing some extra work to make sure the list height is the same as the Stuff container's height. I'll refactor this
      if(this.state.id === '1'){
        let headerHeight = this.refs.stickyIckyContainer.querySelector("header").getBoundingClientRect().height
        let stuffTitleHeight = document.getElementsByClassName("stuff__title ")[0].getBoundingClientRect().height

        Array.prototype.slice.call(this.refs.stickyIckyContainer.querySelectorAll('.technology-card__body')).map(x => x.style.height = stuffTitleHeight - headerHeight + "px")
      }

      this.setState({ originalY: winScrollY + stickyIckyY })
      this.props.stickyIckyStucked(this.state.id)
      // debounce
      this.setState({ debounce: true })
      setTimeout(() => { this.setState({ debounce: false }) }, 100)
    }

    //unstick it if we scroll past the original y of the list
    else if(winScrollY + 20 < this.state.originalY && this.checkIfStickIckyIsStuck(this.state.id)){
      if(this.state.id === '1') Array.prototype.slice.call(this.refs.stickyIckyContainer.querySelectorAll('.technology-card__body')).map(x => x.style.height = 175 + "px")
      this.refs.stickyIckyContainer.removeAttribute("style")
      this.props.stickyIckyUnstucked(this.state.id)
      // debounce
      this.setState({ debounce: true })
      setTimeout(() => { this.setState({ debounce: false }) }, 100)
    }
  }

  render(){
    return (
      <div className={"sticky-icky " + (this.checkIfStickIckyIsStuck(this.state.id) ? 'stuck' : '')} ref="stickyIckyContainer">
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  stickyIckyReducer: state.stickyIckyReducer
})

export default connect(mapStateToProps, { 
  stickyIckyStucked,
  stickyIckyUnstucked
})(StickyIcky)