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
      <div className={"notty " + statusCodes[status]}> <FontAwesome name={status === 1 ? 'check-circle' : 'times-circle'} /> { message }</div>
    )
  }
}

export default Notty