import React from 'react'
import { ReactContext } from './ReactContext'
function Header() {
  const {
    ThemeDark,
    setThemeDark
  } = React.useContext(ReactContext)
  return (
    <header>
      <h1 className='header__title' >Where in the world?</h1>
      <i onClick={() => {
        setThemeDark(!ThemeDark)
        const elem = document.getElementById('root')
        elem.classList.toggle('dark-theme')
      }} className={ThemeDark ? 'header__theme-icon dark-theme' : 'header__theme-icon light-theme'}></i>
    </header>
  )
}

export default Header