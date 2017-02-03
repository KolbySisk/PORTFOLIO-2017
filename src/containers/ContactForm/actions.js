import {
  CONTACT_FORM_UPDATED,
  CONTACT_FORM_SUBMITTED,
  CONTACT_FORM_POSTED,
  CONTACT_FORM_FAILED
} from './constants'

export const contactFormUpdated = (payload) =>{
  return { type: CONTACT_FORM_UPDATED, payload }
}

export const contactFormSubmitted = (payload) => {
  return { type: CONTACT_FORM_SUBMITTED, payload }
}

export const contactFormPosted = (payload) => {
  return { type: CONTACT_FORM_POSTED, payload }
}

export const contactFormFailed = () => {
  return { type: CONTACT_FORM_FAILED }
}