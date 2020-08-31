import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { search } from 'redux/actions/SearchAction'
import styles from './SearchBar.module.scss'

function SearchBar({ search }) {
  const [scrolling, setScrolling] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', onScrolling)
    return () => {
      window.removeEventListener('scroll', onScrolling)
    }
  })

  const onScrolling = () => {
    window.pageYOffset > 0 ? setScrolling(1) : setScrolling(0)
  }
  const handleInputChange = (event) => {
    search(event.target.value)
  }
  return (
    <div
      className={
        scrolling ? styles.section + ' ' + styles.sticky : styles.section
      }
    >
      <form className={styles.form}>
        <input
          type="search"
          placeholder="&#128269; Search"
          onChange={handleInputChange}
        ></input>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    search: (keywords) => dispatch(search(keywords)),
  }
}
export default connect(null, mapDispatchToProps)(SearchBar)
