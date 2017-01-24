import { } from './constants'

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
	}]
}

export const StuffReducer = (state = initialState, action) => {
	return state
}