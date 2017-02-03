import React, {Component} from 'react'
import './styles.scss'

class Notty extends Component {
  render() {
    const { message } = this.props
    return (
      <div className="notty">{ message }</div>
    )
  }
}

export default Notty