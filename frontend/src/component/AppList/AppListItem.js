import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchFreeSingle } from 'redux/actions/FreeActions'
import AppThumbnail from 'component/AppDetail/AppThumbnail'
import AppRating from 'component/AppDetail/AppRating'
// import ScrollAnimation from 'react-animate-on-scroll'
import style from './AppListItem.module.scss'
function AppListItem({ appId, index, isAnimated }) {
  const detail = useSelector((state) =>
    state.free.details[appId] ? state.free.details[appId] : {}
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchFreeSingle(appId))
  }, [appId, dispatch])

  return (
    // <ScrollAnimation
    //   animateIn="animate__fadeInLeft"
    //   animateOnce={true}
    //   offset={300}
    // >
    <div className={isAnimated ? style.row_animate : style.row}>
      <div className={style.index}>{index}</div>
      <AppThumbnail
        isCircle={index % 2 === 0}
        img={{
          small: detail.artworkUrl60,
          medium: detail.artworkUrl100,
          large: detail.artworkUrl512,
        }}
      />
      <div className={style.detail}>
        <div className="app-title">{detail.trackName}</div>
        <div className="app-category">{detail.primaryGenreName}</div>

        <AppRating
          rating={detail.averageUserRating}
          count={detail.userRatingCount}
        />
      </div>
    </div>

    // </ScrollAnimation>
  )
}

export default AppListItem
