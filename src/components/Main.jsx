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
    <React.Fragment>

      <main id='main' className=' main'>
        <section className="main__section-search">
          <input id='input' value={searchValue} onChange={onSearchValueChange} className="main__section-search-input" type="search" placeholder="Search" autoComplete='false' />
        </section>
        <section className='main__section-select'>
          <select id='select' onChange={onSearchByRegion} className='main__section-select-item' name="region" title='region'>
            <option value="">All</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctic">Antarctic</option>
          </select>
        </section>
        <CountryContainer />
      </main>
    </React.Fragment>
  )

}

export default Main