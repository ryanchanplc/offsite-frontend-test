import { FETCH_RECOMMEND_LIST } from './Types'
import { FETCH_RECOMMEND_SUCCESS } from './Types'
import { FETCH_RECOMMEND_ERROR } from './Types'
import { FETCH_RECOMMEND_SINGLE } from './Types'
import * as constant from 'utils/Const'
export const getRecommendList = () => {
  return {
    type: FETCH_RECOMMEND_LIST,
  }
}
export const getRecommendSingle = (appid, detail) => {
  return {
    type: FETCH_RECOMMEND_SINGLE,
    key: appid,
    value: detail,
  }
}

export const getRecommendListSuccess = (apps) => {
  return {
    type: FETCH_RECOMMEND_SUCCESS,
    payload: apps,
  }
}

export const getRecommendListError = () => {
  return {
    type: FETCH_RECOMMEND_ERROR,
  }
}
export function fetchRecommendList() {
  return (dispatch) => {
    dispatch(getRecommendList())
    fetch(constant.API_ENDPOINT_RECOMMEND_LIST)
      .then((response) => response.json())
      .then((res) => {
        dispatch(getRecommendListSuccess(res.feed.results))
      })
      .catch((error) => {
        dispatch(getRecommendListError())
        console.error(error)
      })
  }
}

export function fetchRecommendSingle(appid) {
  return (dispatch) => {
    fetch(constant.API_ENDPOINT_DETAIL + appid)
      .then((response) => response.json())
      .then((res) => {
        dispatch(getRecommendSingle(appid, res.results[0]))
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
