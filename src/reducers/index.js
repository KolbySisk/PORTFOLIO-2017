import { combineReducers } from 'redux'
import { TechnologyListReducer } from '../containers/TechnologyList/reducer'
import { StuffReducer } from '../containers/Stuff/reducer'
import { StickyIckyReducer } from '../containers/StickyIcky/reducer'
import { HomeReducer } from '../containers/Home/reducer'
import { NotificationReducer } from '../containers/Notification/reducer'
import { ContactFormReducer } from '../containers/ContactForm/reducer'
import { StatsReducer } from '../containers/Stats/reducer'

const reducers = combineReducers({
  technologyListReducer: TechnologyListReducer,
  stuffReducer: StuffReducer,
  stickyIckyReducer: StickyIckyReducer,
  homeReducer: HomeReducer,
  notificationReducer: NotificationReducer,
  contactFormReducer: ContactFormReducer,
  statsReducer: StatsReducer
})

export default reducers