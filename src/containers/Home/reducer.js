const Technologies = (state = [], action) => {
	return [{
		id: 1,
		name: 'Angular'
	},{
		id: 2,
		name: 'React'
	},{
		id: 3,
		name: 'Cordova'
	},{
		id: 4,
		name: 'C#'
	},{
		id: 5,
		name: 'PHP'
	}]
}

const SelectedTechnology = (state = [], action) => {
	switch(action.type){
		case 'TECHNOLOGY_SELECTED':
			console.log('technology selected!', action);
			return action.payload;

		default:
			return state;
	}
}

export default {
	Technologies: Technologies,
	SelectedTechnology: SelectedTechnology
}