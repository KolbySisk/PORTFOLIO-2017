import React, {Component} from 'react'
import { connect } from 'react-redux'
import { notificationBroadcasted, notificationDismissed } from './actions'
import Notty from '../../components/Notty'

class Notification extends Component {

  startTimer(notification){
    setTimeout(() => {
      this.props.notificationDismissed(notification.id)
    }, notification.time * 1000)
  }

  render(){
    return(
      <div className="notification">
        {this.props.notificationReducer.notifications.map(notification =>
          {return notification.dismissed ? '' : <Notty key={notification.id} status={notification.status} message={notification.message} onInit={this.startTimer(notification)}></Notty>}
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  notificationReducer: state.notificationReducer
})

export default connect(mapStateToProps, { notificationBroadcasted, notificationDismissed })(Notification)