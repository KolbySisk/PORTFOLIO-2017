import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'
//import './styles.scss'

const Form = (props) => {
  const { handleSubmit, notification } = props
  return (
    <section className="contact-form">
      <header>
        <h3>Email me</h3>
        <h4>Feel free to say hi</h4>
      </header>
      {notification}
      <form onSubmit={handleSubmit(this)}>
        <Field name="name" component="input" placeholder="Your name" type="text" required/>
        <Field name="email" component="input" placeholder="Your emial" type="email" required/>
        <Field name="message" component="textarea" placeholder="Your message" type="message" required/>
        <button type="submit">Send</button>
      </form>
    </section>
  )
}

export default reduxForm({
  form: 'contact'
})(Form)