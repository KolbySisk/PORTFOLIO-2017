import { createStore, combineReducers } from 'redux'
import HomeReducers from './containers/Home/reducer'

const allReducers = combineReducers({
  technologies: HomeReducers.Technologies,
  selectedTechnology: HomeReducers.SelectedTechnology
})

export default createStore(allReducers)