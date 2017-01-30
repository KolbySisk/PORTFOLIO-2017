import { GET_STUFF } from './constants'

const initialState = {}

export const Stuff = () => {
	return [{
		id: 1,
		name: '40 west arts',
		imagePath: '/images/stuff-bw-bg-1.jpg'
	},{
		id: 2,
		name: 'national restaurant association - ServSafe',
		imagePath: '/images/stuff-bw-bg-1.jpg'
	},{
		id: 3,
		name: 'College in Colorado - Admissions Tool',
		imagePath: '/images/stuff-bw-bg-1.jpg'
	},{
		id: 4,
		name: 'College in colorado - training providers',
		imagePath: '/images/stuff-bw-bg-1.jpg'
	},{
		id: 5,
		name: 'national restaurant association - nra Show',
		imagePath: '/images/stuff-bw-bg-1.jpg'
	},{
		id: 6,
		name: 'Air force - 4a0x1',
		imagePath: '/images/stuff-bw-bg-1.jpg'
	},{
		id: 7,
		name: '40 west arts',
		imagePath: '/images/stuff-bw-bg-1.jpg'
	},{
		id: 8,
		name: 'national restaurant association - ServSafe',
		imagePath: '/images/stuff-bw-bg-1.jpg'
	},{
		id: 9,
		name: 'College in Colorado - Admissions Tool',
		imagePath: '/images/stuff-bw-bg-1.jpg'
	},{
		id: 10,
		name: 'College in colorado - training providers',
		imagePath: '/images/stuff-bw-bg-1.jpg'
	},{
		id: 11,
		name: 'national restaurant association - nra Show',
		imagePath: '/images/stuff-bw-bg-1.jpg'
	},{
		id: 12,
		name: 'Air force - 4a0x1',
		imagePath: '/images/stuff-bw-bg-1.jpg'
	}]
}

export const StuffReducer = (state = initialState, action) => {
	switch(action.type){
		case GET_STUFF:
			console.log('whooo')
			return state
		default:
			return state
	}
}

export const GetStuff = (state = initialState, action) => {
	return { type: GET_STUFF }
}