import { TECHNOLOGY_SELECTED } from './constants'

export const technologySelected = (payload) => {
  return { type: TECHNOLOGY_SELECTED, payload }
}