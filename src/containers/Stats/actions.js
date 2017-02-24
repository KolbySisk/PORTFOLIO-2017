import { LOAD_STATS } from './constants'

export const loadStats = (payload) => {
  return { type: LOAD_STATS, payload: payload }
}