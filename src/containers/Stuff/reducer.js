import { STUFF_RECEIVED } from './constants'

const initialState = {
	stuff: [],
  selectedTechnologyId: null
}

export const StuffReducer = (state = initialState, action) => {
	switch(action.type){

		case STUFF_RECEIVED:
      var newState = Object.assign({}, state)
      newState.stuff = action.stuff
      return newState

    case 'TECHNOLOGY_SELECTED':
      return { ...state, selectedTechnologyId: action.payload.id }

		default:
			return state
	}
}