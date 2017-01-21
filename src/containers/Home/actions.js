export const selectTechnology = (technology) => {
	return {
		type: 'TECHNOLOGY_SELECTED',
		payload: technology
	}
}