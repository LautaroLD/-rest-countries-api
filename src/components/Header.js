import React from 'react'
import { ReactContext } from './ReactContext'
function Header() {
  const {
    changeTheme
  } = React.useContext(ReactContext)
  return (
    <header className='container-fluid d-flex justify-content-between align-items-center border-bottom p-0'>
      <h1 className='fw-bold m-0 ms-3' >Where in the world?</h1>
      <i onClick={changeTheme} className='btn btn-outline-secondary d-flex align-items-center m-0 me-3 bx bxs-moon me-2'></i>
    </header>
  )
}

export default Header