import { createStore, combineReducers } from 'redux'
import { Technologies, TechnologyListReducer } from './containers/TechnologyList/reducer'

const allReducers = combineReducers({
  technologies: Technologies,
  technologyListReducer: TechnologyListReducer
})

export default createStore(allReducers)