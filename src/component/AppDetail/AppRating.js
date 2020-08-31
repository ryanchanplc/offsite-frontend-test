import React from 'react'

import PropTypes from 'prop-types'
import StarIcon from './StarIcon.js'
import styles from './AppRating.module.scss'
const AppRating = (props) => {
  const stars = []

  const RenderStars = () => {
    const rating = Math.floor(parseFloat(props.rating))

    for (var i = 0; i < rating; i++)
      stars.push(<StarIcon fill={true} key={i} />)
    for (var j = rating; j < 5; j++)
      stars.push(<StarIcon fill={false} key={j} />)
    return stars
  }

  return (
    <div>
      {RenderStars()}
      <div className={styles.rating}>
        {props.count && '(' + props.count + ')'}
      </div>
    </div>
  )
}

AppRating.propTypes = {
  rating: PropTypes.number,
  count: PropTypes.number,
}
export default AppRating
