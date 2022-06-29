import React from 'react'
import { ReactContext } from './ReactContext'

function CountryItem(props) {
    const {
        OpenModal
    } = React.useContext(ReactContext)

    return (
        <li id='elementList' className='element-list mx-auto  list-unstyled  m-3 h-auto pb-3'>
            <img className=' w-100' src={props.flag} ></img>
            <div className=' p-3 pb-0 h-auto'>
                <h3>{props.name}</h3>
                <p><b>Population: </b>{props.population}</p>
                <p><b>region: </b>{props.region}</p>
                <p><b>Capital: </b>{props.capital}</p>
            </div>
            <a onClick={() => OpenModal(props.name)} className='btn-more-details btn btn-outline-secondary mx-3 mt-auto'>More details</a>
        </li>
    )
}

export default CountryItem