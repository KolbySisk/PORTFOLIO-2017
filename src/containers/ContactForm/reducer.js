import {
  CONTACT_FORM_UPDATED,
  CONTACT_FORM_SUBMITTED
} from './constants'

const initialState = {
  name: '',
  email: '',
  message: ''
}

export const ContactFormReducer = (state = initialState, action) => {
  switch(action.type){

    case CONTACT_FORM_UPDATED:
      var newState = Object.assign({}, state)
      newState[action.payload.name] = action.payload.value
      return newState

    case CONTACT_FORM_SUBMITTED:
      return initialState

    default:
      return state
  }
}