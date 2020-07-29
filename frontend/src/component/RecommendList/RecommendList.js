import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createSelector } from 'reselect'
import { fetchRecommendList } from 'redux/actions/RecommendActions'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import RecommendListItem from './RecommendListItem'
import { filterKeywords } from 'utils/Filter'
import style from './RecommendList.module.scss'
import DarkModeToggle from 'component/DarkModeToggle/DarkModeToggle'

const listSelector = (state) => state.recommends.recommend
const detailsSelector = (state) => state.recommends.details
const keywordsSelector = (state) => state.search.keywords
const displaySelector = createSelector(
  listSelector,
  detailsSelector,
  keywordsSelector,
  (list, details, keywords) => filterKeywords(keywords, details, list)
)
const RecommendList = (props) => {
  const display = useSelector((state) => displaySelector(state))
  const isLoading = useSelector((state) => state.recommends.isLoading)
  const hasError = useSelector((state) => state.recommends.hasError)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRecommendList())
  }, [dispatch])

  const renderRecommends = () => {
    if (isLoading) return <LoadingSpinner />

    if (hasError && !display.length)
      return <p className="error-message">Unable to display apps</p>

    return display.map((recommend) => (
      <RecommendListItem
        appid={recommend.id}
        key={recommend.id}
      ></RecommendListItem>
    ))
  }

  return (
    <div className={style.section}>
      <div className={style.section_title_wrapper}>
        <div className={style.section_title}>推介</div>
        <DarkModeToggle />
      </div>
      <div className={style.horizontal_scroll}>{renderRecommends()}</div>
    </div>
  )
}

export default RecommendList
