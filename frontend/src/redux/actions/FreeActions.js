import { FETCH_FREE_LIST } from './Types'
import { FETCH_FREE_SINGLE } from './Types'
import { FETCH_FREE_SUCCESS } from './Types'
import { FETCH_FREE_ERROR } from './Types'
import * as constant from 'utils/Const'
export const getFreeList = () => {
  return {
    type: FETCH_FREE_LIST,
  }
}

export const getFreeSuccess = (apps) => {
  return {
    type: FETCH_FREE_SUCCESS,
    payload: apps,
  }
}

export const getFreeError = () => {
  return {
    type: FETCH_FREE_ERROR,
  }
}

export const getFreeSingle = (appid, detail) => {
  return {
    type: FETCH_FREE_SINGLE,
    key: appid,
    value: detail,
  }
}

export function fetchFreeList(page = 1) {
  console.log(page)
  const count = page * 10

  return (dispatch) => {
    dispatch(getFreeList())
    fetch(constant.API_ENDPOINT_FREE_LIST + count + '/explicit.json')
      .then((response) => response.json())
      .then((res) => {
        res.feed.results.map(function (item, index) {
          item['index'] = index + 1
          return item
        })
        dispatch(getFreeSuccess(res.feed.results))
      })
      .catch((error) => {
        console.error(error)
        dispatch(getFreeError())
      })
  }
}

export function fetchFreeSingle(appid) {
  return (dispatch) => {
    fetch(constant.API_ENDPOINT_DETAIL + appid)
      .then((response) => response.json())
      .then((res) => {
        dispatch(getFreeSingle(appid, res.results[0]))
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
