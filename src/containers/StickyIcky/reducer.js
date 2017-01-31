import {
  STICKY_ICKY_STUCKED,
  STICKY_ICKY_UNSTUCKED,
  STICKY_ICKY_ADDED,
  STICKY_ICKY_WIDTH_CHANGE
} from './constants'

const initialState = {
  stickyIckies: []
}

const stickyIckyObject = {
  id: null,
  ref: null,
  stuck: false,
  width: null
}

export const StickyIckyReducer = (state = initialState, action) => {
  switch(action.type){
    case STICKY_ICKY_STUCKED:
      var newState = Object.assign({}, state)
      var stickyIcky = newState.stickyIckies.find(si => si.id === action.payload)
      stickyIcky.stuck = true
      return newState

    case STICKY_ICKY_UNSTUCKED:
      var newState = Object.assign({}, state)
      var stickyIcky = newState.stickyIckies.find(si => si.id === action.payload)
      stickyIcky.stuck = false
      return newState

    case STICKY_ICKY_ADDED:
      var newState = Object.assign({}, state)
      var newStickyIckyObject = Object.assign({}, stickyIckyObject)
      newStickyIckyObject.id = state.stickyIckies.length + 1
      newStickyIckyObject.ref = action.payload
      newStickyIckyObject.stuck = false
      newStickyIckyObject.width = null
      newState.stickyIckies.push(newStickyIckyObject)
      return newState

    case STICKY_ICKY_WIDTH_CHANGE:
      var newState = Object.assign({}, state)
      var stickyIcky = newState.stickyIckies.find(si => si.id === action.payload.id)
      stickyIcky.width = action.payload.width
      return newState

    default:
      return state
  }
}