import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import LoadingSpinner from 'component/LoadingSpinner/LoadingSpinner'
import { fetchFreeList } from 'redux/actions/FreeActions'
import AppListItem from './AppListItem'
import LazyLoad from 'react-lazyload'
import InfiniteScroll from 'react-infinite-scroller'
import { filterKeywords } from 'utils/Filter'

import '../../../node_modules/animate.css/animate.min.css'
function AppList({
  fetchFreeList,
  free,
  isLoading,
  hasError,
  isSearching,
  lastPage,
}) {
  useEffect(() => {
    fetchFreeList()
  }, [fetchFreeList])

  const loadMore = (page) => {
    if (!isLoading && !isSearching) fetchFreeList(page)
  }

  return (
    <React.Fragment>
      {hasError && !free.length && (
        <p className="error-message">Unable to display apps.</p>
      )}
      <InfiniteScroll
        className="section list-section"
        pageStart={lastPage}
        loadMore={loadMore}
        hasMore={!hasError && !isSearching}
        loader={<LoadingSpinner key={0} />}
      >
        {free.map((app) => {
          return (
            <LazyLoad height={200} once={true} offset={100} key={app.id}>
              <AppListItem
                appId={app.id}
                index={app.index}
                isAnimated={!isSearching}
              ></AppListItem>
            </LazyLoad>
          )
        })}
      </InfiniteScroll>
    </React.Fragment>
  )
}
const mapStateToProps = (state) => {
  const { free, isLoading, hasError, details } = state.free
  const { keywords } = state.search

  return {
    free: filterKeywords(keywords, details, free),
    lastPage: free.length / 10,
    isLoading,
    hasError,
    isSearching: keywords.trim() !== '',
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFreeList: (page) => {
      dispatch(fetchFreeList(page))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppList)
