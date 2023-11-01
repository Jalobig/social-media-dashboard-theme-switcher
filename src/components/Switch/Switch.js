import React from 'react'
import classes from './Switch.module.scss'
import { useTheme } from '../../context/themeContext';

const Switch = () => {
    const {theme, toggleTheme} =useTheme()
  return (
    <div className={classes[`theme--${theme}`]}>
    <button onClick={toggleTheme} className={classes.switch}>
            <span className={classes.switch__circle}
            style={{
              left: theme==='dark' ? '0.2rem': "1.6rem"
            }}></span>
          </button>
            </div>
  )
}

export default Switch