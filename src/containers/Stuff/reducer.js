import { STUFF_TITLE_STUCKED } from './constants'

const initialState = {
  stuffTitleStuck: false
}

export const Stuff = () => {
	return [{
		id: 1,
	},{
		id: 2,
	},{
		id: 3,
	},{
		id: 4,
	},{
		id: 5,
	}]
}

export const StuffReducer = (state = initialState, action) => {
	switch(action.type){
		case STUFF_TITLE_STUCKED:
			return { ...state, stuffTitleStuck: action.payload }
		default:
			return state
	}
}