import { TECHNOLOGY_SELECTED } from './constants'

export const technologySelected = (technology) => {
  return { type: TECHNOLOGY_SELECTED, technology }
}