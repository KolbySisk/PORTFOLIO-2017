import React, {Component} from 'react'
import FontAwesome from 'react-fontawesome'
import './styles.scss'

const statusCodes = {
    1: 'success',
    2: 'error'
}

class Notty extends Component {
  render() {
    const { message, status } = this.props
    return (
      <div className={"notty " + statusCodes[status]}> {status == 1 ? <FontAwesome name='check-circle'/> : <FontAwesome name='times-circle'/>} { message }</div>
    )
  }
}

export default Notty