import React, { useState } from 'react'

import PropTypes from 'prop-types'
import styles from './AppThumbnail.module.scss'
import { ReactComponent as Placeholder } from 'svg/placeholder.svg'
const AppThumbnail = (props) => {
  const [loaded, setLoaded] = useState(false)
  const imgThumbClass = props.isCircle ? styles.circle : styles.rounded

  return (
    <div className={styles.icon_wrapper + ' ' + imgThumbClass}>
      {!loaded && <Placeholder className={imgThumbClass}></Placeholder>}
      {props.img && (
        <picture>
          <source media="(min-width: 1024px)" srcSet={props.img.large} />
          <source media="(min-width: 480px)" srcSet={props.img.medium} />
          <img
            className={
              loaded ? imgThumbClass : imgThumbClass + ' ' + styles.icon_loading
            }
            src={props.img.small}
            alt="appThumb"
            width="100"
            height="100"
            onLoad={() => setLoaded(true)}
          />
        </picture>
      )}
    </div>
  )
}

AppThumbnail.propTypes = {
  circle: PropTypes.bool,
}
export default AppThumbnail
