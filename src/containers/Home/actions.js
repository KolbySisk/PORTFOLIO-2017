import { CONTACT_FORM_SUBMITTED, CONTACT_FORM_POSTED } from './constants'

export const contactFormSubmitted = (payload) => {
  return { type: CONTACT_FORM_SUBMITTED, payload }
}

export const contactFormPosted = (payload) => {
  return { type: CONTACT_FORM_POSTED, payload }
}