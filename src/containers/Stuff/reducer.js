import { STUFF_RECEIVED } from './constants'

const initialState = {
	stuff: []
}

export const StuffReducer = (state = initialState, action) => {
	switch(action.type){

		case STUFF_RECEIVED:
      var newState = Object.assign({}, state)
      newState.stuff = action.stuff
      return newState

		default:
			return state
	}
}