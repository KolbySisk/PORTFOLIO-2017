import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import Notification from '../Notification'
import { notificationBroadcasted } from '../Notification/actions'
import { contactFormSubmitted } from './actions'
import Form from '../../components/ContactForm'
import './styles.scss'

class ContactForm extends Component {

  handleSubmit(values, woo, yay, hey) {
    console.log(values, woo, yay, hey)
    this.props.notificationBroadcasted({message:'Form successfully submitted', time: 1})
    this.props.contactFormSubmitted(values)
  }

  render() {
    const { notification } = this.props
    return (
      <Form onSubmit={this.handleSubmit.bind(this)} notification={<Notification/>}/>
    )
  }
}

const mapStateToProps = (state) => ({
  contactFormReducer: state.contactFormReducer
})
export default connect(mapStateToProps, { contactFormSubmitted, notificationBroadcasted })(ContactForm)