import {
  STICKY_ICKY_STUCKED,
  STICKY_ICKY_UNSTUCKED,
  STICKY_ICKY_ADDED,
  STICKY_ICKY_WIDTH_CHANGE,
  STICKY_ICKY_STOPPED,
  STICKY_ICKY_UNSTOPPED
} from './constants'

export const stickyIckyStucked = (payload) => {
  return { type: STICKY_ICKY_STUCKED, payload }
}

export const stickyIckyUnstucked = (payload) => {
  return { type: STICKY_ICKY_UNSTUCKED, payload }
}

export const stickyIckyAdded = (payload) => {
  return { type: STICKY_ICKY_ADDED, payload }
}

export const stickyIckyWidthChange = (payload) => {
  return { type: STICKY_ICKY_WIDTH_CHANGE, payload }
}

export const stickyIckyStopped = (payload) => {
  return { type: STICKY_ICKY_STOPPED, payload }
}

export const stickyIckyUnstopped = (payload) => {
  return { type: STICKY_ICKY_UNSTOPPED, payload }
}