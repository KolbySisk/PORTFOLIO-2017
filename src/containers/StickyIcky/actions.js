import {
  STICKY_ICKY_STUCKED,
  STICKY_ICKY_UNSTUCKED,
  STICKY_ICKY_ADDED,
  STICKY_ICKY_WIDTH_CHANGE
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