import * as actions from '../actions/Types'

const initalState = {
  keywords: '',
}
function recommendReducer(state = initalState, action) {
  switch (action.type) {
    case actions.SEARCH:
      return { ...state, keywords: action.payload }

    default:
      return state
  }
}
export default recommendReducer
