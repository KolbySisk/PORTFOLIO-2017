const initialState = {
  selectedTechnologyName: null
}

export const HomeReducer = (state = initialState, action) => {
  switch(action.type){
    case 'TECHNOLOGY_SELECTED':
      return { ...state, selectedTechnologyName: action.payload.name }
    default:
      return state
  }
}