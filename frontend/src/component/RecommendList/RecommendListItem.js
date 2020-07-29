import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRecommendSingle } from 'redux/actions/RecommendActions'
import styles from './RecommendListItem.module.scss'

import AppThumbnail from 'component/AppDetail/AppThumbnail'
function RecommendListItem({ appid }) {
  const detail = useSelector((state) =>
    state.recommends.details[appid] ? state.recommends.details[appid] : {}
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRecommendSingle(appid))
  }, [appid, dispatch])

  return (
    <div className={styles.container}>
      <AppThumbnail
        isCircle={false}
        img={{
          small: detail.artworkUrl60,
          medium: detail.artworkUrl100,
          large: detail.artworkUrl512,
        }}
      />
      {/* <div>className="list-details"> */}
      <div className={styles.details}>
        <div className="app-title">{detail.trackName}</div>
        <div className="app-category">{detail.primaryGenreName}</div>
      </div>
    </div>
  )
}

export default RecommendListItem
