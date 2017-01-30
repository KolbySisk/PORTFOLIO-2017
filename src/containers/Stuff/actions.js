import { GET_STUFF } from './constants'

export const creteStuff = (payload) => {
  return { type: GET_STUFF, payload }
}