import { combineReducers } from 'redux'
import { TechnologyListReducer } from '../containers/TechnologyList/reducer'
import { StuffReducer } from '../containers/Stuff/reducer'
import { StickyIckyReducer } from '../containers/StickyIcky/reducer'

const reducers = combineReducers({
  technologyListReducer: TechnologyListReducer,
  stuffReducer: StuffReducer,
  stickyIckyReducer: StickyIckyReducer
})

export default reducers