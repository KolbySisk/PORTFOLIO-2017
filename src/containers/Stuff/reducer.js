const Stuff = (state = [], action) => {
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


export default {
	Technologies: Stuff
}