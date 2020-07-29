import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import PropTypes from 'prop-types'
const StarIcon = (props) => (
  <FontAwesomeIcon
    icon={props.fill ? fasStar : faStar}
    size="xs"
    color="#F0E68C"
  />
)

StarIcon.propTypes = {
  fill: PropTypes.bool,
}
export default StarIcon
