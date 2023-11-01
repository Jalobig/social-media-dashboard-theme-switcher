import React from 'react'
import classes from './Main.module.scss'
import Overview from '../../components/Overview/Overview';
import { useTheme } from '../../context/themeContext';
import Heading from '../../components/Heading/Heading';
import Follower from '../../components/Follower/Follower';

const Main = () => {
  const {theme} = useTheme()
  return (
    <main className={`${classes.main} ${classes[`main--${theme}`]}`}>
        <Heading/>
        <Follower/>
        <Overview/>
    </main>
  )
}

export default Main