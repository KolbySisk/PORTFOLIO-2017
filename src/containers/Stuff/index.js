import React, {Component} from 'react'
import { connect } from 'react-redux'
import StickyIcky from '../StickyIcky'
import './styles.scss'

class Stuff extends Component{
  render(){
    return (
      <div className="stuff">
        <StickyIcky id="2">
          <div className="stuff__title">
            <h2>Stuff</h2>
          </div>
        </StickyIcky>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({stuffReducer: state.stuffReducer})
export default connect(mapStateToProps)(Stuff)