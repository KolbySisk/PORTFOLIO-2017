import { STICKY_ICKY_STUCKED, STICKY_ICKY_UNSTUCKED } from './constants'

export const stickyIckyStucked = (payload) => {
  return { type: STICKY_ICKY_STUCKED, payload }
}

export const stickyIckyUnstucked = (payload) => {
  return { type: STICKY_ICKY_UNSTUCKED, payload }
}