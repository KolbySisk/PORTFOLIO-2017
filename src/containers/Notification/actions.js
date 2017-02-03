import { 
  NOTIFICATION_BROADCASTED,
  NOTIFICATION_DISMISSED
} from './constants'

export const notificationBroadcasted = (payload) => {
  return { type: NOTIFICATION_BROADCASTED, payload }
}

export const notificationDismissed = (payload) => {
  return { type: NOTIFICATION_DISMISSED, payload }
}