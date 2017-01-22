import React, {Component} from 'react'
import { connect } from 'react-redux'
import './styles.scss'

class Stuff extends Component{

  render(){
    return (
      <div className="technology-list">
        Stuff
      </div>
    )
  }
}

const mapStateToProps = (state) => ({stuff: state.stuff})
export default connect(mapStateToProps)(Stuff)