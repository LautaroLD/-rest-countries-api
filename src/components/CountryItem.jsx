import React from 'react'
import { ReactContext } from './ReactContext'

function CountryItem(props) {
    const {
        OpenModal
    } = React.useContext(ReactContext)

    return (
        <li id='' className='country'>
            <img className='country__img' src={props.flag} ></img>
            <div className='country__text-container'>
                <h3>{props.name}</h3>
                <p><b>Population: </b>{props.population}</p>
                <p><b>region: </b>{props.region}</p>
                <p><b>Capital: </b>{props.capital}</p>
            </div>
            <a onClick={() => OpenModal(props.name)} className='btn-more-details'>More details</a>
        </li>
    )
}

export default CountryItem