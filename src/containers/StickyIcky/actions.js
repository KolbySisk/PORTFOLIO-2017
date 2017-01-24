import {
  STICKY_ICKY_STUCKED,
  STICKY_ICKY_UNSTUCKED,
  STICKY_ICKY_ADDED
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