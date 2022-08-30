import React from 'react'
import { ReactContext } from './ReactContext'
function Header() {
  const {
    changeTheme
  } = React.useContext(ReactContext)
  return (
    <header>
      <h1 className='header__title' >Where in the world?</h1>
      <i onClick={changeTheme} className='header__theme-icon bx bxs-moon'></i>
    </header>
  )
}

export default Header