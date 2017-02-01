import { CONTACT_FORM_SUBMITTED, CONTACT_FORM_POSTED } from './constants'

const initialState = {}

export const HomeReducer = (state = initialState, action) => {
  switch(action.type){

    case CONTACT_FORM_SUBMITTED:
      return state

    case CONTACT_FORM_POSTED:
      return state

    default:
      return state
  }
}