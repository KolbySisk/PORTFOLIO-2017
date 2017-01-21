import { createStore, combineReducers } from 'redux'
import TechnologyListReducers from './containers/TechnologyList/reducer'

const allReducers = combineReducers({
  technologies: TechnologyListReducers.Technologies,
  selectedTechnology: TechnologyListReducers.SelectedTechnology
})

export default createStore(allReducers)