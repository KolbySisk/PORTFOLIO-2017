import {
  STICKY_ICKY_STUCKED,
  STICKY_ICKY_UNSTUCKED,
  STICKY_ICKY_ADDED
} from './constants'

const initialState = {
  stickyCount: 1,
  stuckStickyIckies: []
}

export const StickyIckyReducer = (state = initialState, action) => {
  switch(action.type){
    case STICKY_ICKY_STUCKED:
      var newState = Object.assign({}, state)
      newState.stuckStickyIckies.push(action.payload)
      return newState

    case STICKY_ICKY_UNSTUCKED:
      var newState = Object.assign({}, state)
      newState.stuckStickyIckies.splice(state.stuckStickyIckies.indexOf(action.payload), 1)
      return newState

    case STICKY_ICKY_ADDED:
      var newState = Object.assign({}, state)
      newState.stickyCount ++
      return newState

    default:
      return state
  }
}