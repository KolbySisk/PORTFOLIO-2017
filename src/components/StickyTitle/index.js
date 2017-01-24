import React, {Component} from 'react'
import StickyIcky from '../../containers/StickyIcky'
import './styles.scss'

export default class StickyTitle extends Component{
  render(){
    return (
      <div className="sticky">
        <StickyIcky>
          <div className="sticky__title">
            <h2>{this.props.title}</h2>
          </div>
        </StickyIcky>
      </div>
    )
  }
}