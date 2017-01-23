import { TECHNOLOGY_SELECTED, TECHNOLOGY_LIST_STUCKED } from './constants'

export const technologySelected = (payload) => {
  return { type: TECHNOLOGY_SELECTED, payload }
}

export const technologyListStucked = (payload) => {
  return { type: TECHNOLOGY_LIST_STUCKED, payload }
}