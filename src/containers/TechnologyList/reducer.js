import { TECHNOLOGY_SELECTED } from './constants'

const initialState = {
  selectedTechnology: null
}

export const Technologies = () => {
	return [{
		id: 1,
		name: 'Angular',
		imagePath: '/images/technology-image-angular.png'
	},{
		id: 2,
		name: 'React',
		imagePath: '/images/technology-image-react.png'
	},{
		id: 3,
		name: 'Cordova',
		imagePath: '/images/technology-image-cordova.png'
	},{
		id: 4,
		name: 'C#',
		imagePath: '/images/technology-image-csharp.png'
	},{
		id: 5,
		name: 'PHP',
		imagePath: '/images/technology-image-php.png'
	}]
}

export const TechnologyListReducer = (state = initialState, action) => {
	switch(action.type){
		case TECHNOLOGY_SELECTED:
			return { ...state, selectedTechnology: action.technology.id }
		default:
			return state
	}
}