import React from 'react'
import { ReactContext } from './ReactContext'

function CountryItem(props) {
    const {
        OpenModal
    } = React.useContext(ReactContext)

    return (
        <li id='' className='country'>
            <img alt={props.name} className='country__img' src={props.flag} ></img>
            <div className='country__text-container'>
                <h2>{props.name}</h2>
                <p><b>Population: </b>{props.population}</p>
                <p><b>region: </b>{props.region}</p>
                <p><b>Capital: </b>{props.capital}</p>
            </div>
            <button onClick={() => OpenModal(props.name)} className='btn-more-details'>More details</button>
        </li>
    )
}

export default CountryItem