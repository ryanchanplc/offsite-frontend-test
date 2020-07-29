import React from 'react'
import { ReactComponent as OvalLoader } from 'svg/oval.svg'
import style from './LoadingSpinner.module.scss'
const LoadingSpinner = () => {
  return (
    <div className={style.spinner_wrapper}>
      <OvalLoader className={style.spinner} />
    </div>
  )
}
export default LoadingSpinner
