import React from 'react'
import CountryContainer from './CountryContainer'
import { ReactContext } from './ReactContext'

function Main() {
  const {
    searchValue,
    onSearchValueChange,
    onSearchByRegion,
  } = React.useContext(ReactContext)
  return (
    <main id='main' className='container-fluid d-flex flex-column h-100 p-0'>
      <nav className="navbar navbar-light">
        <div className="container ">
          <div id='inputDiv' className="d-flex bg-white w-100 align-items-center">
            <input id='input' value={searchValue} onChange={onSearchValueChange} className="form-control  border-0 fs-4" type="text" placeholder="Search" aria-label="Search" />
          </div>
        </div>
      </nav>
      <div className='container container-select'>
        <select id='select' onChange={onSearchByRegion} className='select btn text-secondary dropdown-toggle shadow-none' name="region">
          <option value="">All</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Antarctic">Antarctic</option>
        </select>
      </div>
      <CountryContainer />
    </main>
  )

}

export default Main