import React, {Component} from 'react'
import { connect } from 'react-redux'
import Notification from '../Notification'
import { contactFormUpdated, contactFormSubmitted } from './actions'
import './styles.scss'

class ContactForm extends Component {
  handleSubmit(event) {
    event.preventDefault()
    this.props.contactFormSubmitted(this.props.contactFormReducer)
  }

  handleChange(event){
    this.props.contactFormUpdated({name: event.target.name, value: event.target.value})
  }

  render() {
    const { name, email, message } = this.props.contactFormReducer
    return (
      <section className="contact-form">
        <header>
          <h3>Email me</h3>
          <h4>Feel free to say hi</h4>
        </header>
        <Notification />
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input name="name" type="text" placeholder="Your name" value={ name } onChange={this.handleChange.bind(this)} required/>
          <input name="email" type="email" placeholder="Your email" value={ email } onChange={this.handleChange.bind(this)} required/>
          <textarea name="message" placeholder="Your message" value={ message } onChange={this.handleChange.bind(this)} required></textarea>
          <button type="submit" >Send</button>
        </form>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  contactFormReducer: state.contactFormReducer
})

export default connect(mapStateToProps, { contactFormUpdated, contactFormSubmitted })(ContactForm)