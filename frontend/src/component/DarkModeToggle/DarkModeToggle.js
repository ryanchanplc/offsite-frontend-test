import React, { useState, useEffect } from 'react'
import style from './DarkModeToggle.module.scss'
import Switch from 'react-switch'
const DarkModeToggle = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const DARKCLASS = 'dark'

  const Icon = (text) => (
    <span className="switch-icon" role="img" aria-label="light">
      {text}
    </span>
  )
  const handleChange = (checked) => {
    localStorage.setItem('dark', checked)
    setIsDarkMode(checked)
  }
  useEffect(() => {
    const current = localStorage.getItem('dark') === 'true'
    setIsDarkMode(current)
    if (current) {
      document.documentElement.classList.add(DARKCLASS)
    } else {
      document.documentElement.classList.remove(DARKCLASS)
    }
  }, [isDarkMode])
  return (
    <div className={style.toggle_wrapper}>
      <Switch
        checked={isDarkMode}
        onChange={(checked) => handleChange(checked)}
        uncheckedIcon={Icon('🌞')}
        checkedIcon={Icon('🌙')}
        aria-label="Dark Mode Toggler"
      />
    </div>
  )
}

export default DarkModeToggle
