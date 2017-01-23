import React, {Component} from 'react'
import { connect } from 'react-redux'
import { stuffTitleStucked } from './actions'
import './styles.scss'

class Stuff extends Component{
  constructor(props) {
    super(props)
    this.state = {
      stuffTitleOriginalY: null,
      debounce: false
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll)
    this.setState({ stuffTitleWidth: this.refs.stuffTitle.getBoundingClientRect().width })
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) =>{
    if(this.state.debounce) return

    let winScrollY = window.scrollY
    let stuffTitleY = this.refs.stuffTitle.getBoundingClientRect().top

    // if we scroll within 20 pixes of the technology list we stickify it
    // check first to make sure it isn't already stuck so we don't stickify it every scroll
    if(stuffTitleY < 30 && !this.props.stuffReducer.stuffTitleStuck){
      this.refs.stuffTitle.style.width = this.state.stuffTitleWidth + "px"
      this.setState({ stuffTitleOriginalY: winScrollY + stuffTitleY })
      this.props.stuffTitleStucked(true)
      // debounce
      this.setState({ debounce: true })
      setTimeout(() => { this.setState({ debounce: false }) }, 100)
    }

    //unstick it if we scroll past the original y of the list
    else if(winScrollY+20 < this.state.stuffTitleOriginalY && this.props.stuffReducer.stuffTitleStuck){
      this.props.stuffTitleStucked(false)
      // debounce
      this.setState({ debounce: true })
      setTimeout(() => { this.setState({ debounce: false }) }, 100)
    }
  }

  render(){
    return (
      <div className="stuff">
        <div className={"stuff__title " + (this.props.stuffReducer.stuffTitleStuck ? 'stuck' : '')} ref="stuffTitle">
          <h2>Stuff</h2>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({stuffReducer: state.stuffReducer})
export default connect(mapStateToProps, { stuffTitleStucked })(Stuff)