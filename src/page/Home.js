import React from 'react'
import SearchBar from 'component/SearchBar/SearchBar'
import RecommendList from 'component/RecommendList/RecommendList'
import AppList from 'component/AppList/AppList'

const Home = () => {
  return (
    <div>
      <SearchBar />
      <RecommendList />
      <hr />
      <AppList />
    </div>
  )
}

export default Home
