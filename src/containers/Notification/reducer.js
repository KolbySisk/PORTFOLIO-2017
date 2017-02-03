import { NOTIFICATION_BROADCASTED, NOTIFICATION_DISMISSED } from './constants'

const initialState = {
  notifications: []
}

const notificationObject = {
  id: null,
  time: null,
  dismissed: false,
  message: null,
  status: null
}

export const NotificationReducer = (state = initialState, action) => {
  switch(action.type){

    case NOTIFICATION_BROADCASTED:
      var newState = JSON.parse(JSON.stringify(state))
      var newNotificationObject = Object.assign({}, notificationObject)
      newNotificationObject.id = state.notifications.length + 1
      newNotificationObject.time = action.payload.time
      newNotificationObject.message = action.payload.message
      newNotificationObject.status = action.payload.status
      newState.notifications.push(newNotificationObject)
      return newState


    case NOTIFICATION_DISMISSED:
      console.log(state)
      var newState = JSON.parse(JSON.stringify(state))
      var notification = newState.notifications.find(n => n.id === action.payload)
      notification.dismissed = true
      return newState    

    default:
      return state
  }
}