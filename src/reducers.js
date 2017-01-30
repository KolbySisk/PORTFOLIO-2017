import { createStore, combineReducers } from 'redux'
import { Technologies, TechnologyListReducer } from './containers/TechnologyList/reducer'
import { Stuff, StuffReducer } from './containers/Stuff/reducer'
import { StickyIckyReducer } from './containers/StickyIcky/reducer'

const reducers = combineReducers({
  technologies: Technologies,
  technologyListReducer: TechnologyListReducer,
  stuff: Stuff,
  stuffReducer: StuffReducer,
  stickyIckyReducer: StickyIckyReducer
})

export default reducers