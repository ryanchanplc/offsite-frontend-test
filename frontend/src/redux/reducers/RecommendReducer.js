import * as actions from '../actions/Types'

const initalState = {
  recommend: [],
  details: {},

  isLoading: false,
  hasError: false,
}
function recommendReducer(state = initalState, action) {
  switch (action.type) {
    case actions.FETCH_RECOMMEND_LIST:
      return { ...state, isLoading: true, hasError: false }
    case actions.FETCH_RECOMMEND_SINGLE:
      return {
        ...state,
        details: { ...state.details, [action.key]: action.value },
      }
    case actions.FETCH_RECOMMEND_SUCCESS:
      return {
        ...state,
        recommend: action.payload,
        isLoading: false,
        hasError: false,
      }

    case actions.FETCH_RECOMMEND_ERROR:
      return { ...state, isLoading: false, hasError: true }

    default:
      return state
  }
}
export default recommendReducer
