import * as actions from '../actions/Types'

const initalState = {
  details: {},
  free: [],
  isLoading: false,
  hasError: false,
}
function recommendReducer(state = initalState, action) {
  switch (action.type) {
    case actions.FETCH_FREE_LIST:
      return { ...state, isLoading: true, hasError: false }

    case actions.FETCH_FREE_SINGLE:
      return {
        ...state,
        details: { ...state.details, [action.key]: action.value },
      }

    case actions.FETCH_FREE_SUCCESS:
      return {
        ...state,
        free: action.payload,
        isLoading: false,
        hasError: false,
      }
    case actions.FETCH_FREE_ERROR:
      return { ...state, isLoading: false, hasError: true }

    default:
      return state
  }
}
export default recommendReducer
