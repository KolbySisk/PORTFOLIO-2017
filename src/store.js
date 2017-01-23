import { createStore, combineReducers } from 'redux'
import { Technologies, TechnologyListReducer } from './containers/TechnologyList/reducer'
import { Stuff, StuffReducer } from './containers/Stuff/reducer'

const allReducers = combineReducers({
  technologies: Technologies,
  technologyListReducer: TechnologyListReducer,
  stuff: Stuff,
  stuffReducer: StuffReducer
})

export default createStore(allReducers)