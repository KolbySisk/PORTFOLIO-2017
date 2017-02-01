import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { TechnologyListReducer } from '../containers/TechnologyList/reducer'
import { StuffReducer } from '../containers/Stuff/reducer'
import { StickyIckyReducer } from '../containers/StickyIcky/reducer'
import { HomeReducer } from '../containers/Home/reducer'

const reducers = combineReducers({
  technologyListReducer: TechnologyListReducer,
  stuffReducer: StuffReducer,
  stickyIckyReducer: StickyIckyReducer,
  homeReducer: HomeReducer,
  form: formReducer
})

export default reducers