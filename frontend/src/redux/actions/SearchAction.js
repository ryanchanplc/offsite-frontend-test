import { SEARCH } from './Types'

export const search = (keywords) => {
  return {
    type: SEARCH,
    payload: keywords,
  }
}
export function searchApps(keywords) {
  return (dispatch) => {
    dispatch(search(keywords))
  }
}
