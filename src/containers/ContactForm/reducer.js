import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { CONTACT_FORM_POSTED } from './constants'

const reducers = {
  form: formReducer.plugin({
    contact: (state, action) => {
      switch(action.type) {
        case CONTACT_FORM_POSTED:
        console.log('yooo')
          return undefined
        default:
          return state
      }
    }
  })
}

export const ContactFormReducer = combineReducers(reducers)