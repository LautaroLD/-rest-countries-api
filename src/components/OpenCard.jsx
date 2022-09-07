import React from 'react'
import { ReactContext } from './ReactContext'

function OpenCard() {
    const { setOnModal, elementModal, countries, setElementModal } = React.useContext(ReactContext)
    let currenciesToArray = Object.entries(elementModal.currencies)
    let currenciesAll = currenciesToArray.map(element => { return element[1].name })

    const getBorderCountry = (borderElement) => {
        countries.forEach(element => {
            if (element.cca3 === borderElement) {
                setElementModal(element)
            }
        })
    }
    return (

        <div id='card' className="card-content">
            <div className="card-header">
                <h5 className="card-header__title">{elementModal.name}</h5>
                <i onClick={() => {
                    setOnModal(false)
                }} className='card-header__close'></i>
            </div>
            <div className="card-body">
                <img alt={elementModal.name} className='card-body__img' src={elementModal.flag} ></img>
                <div className=' card-body__info'>
                    <p><b>Population: </b>{elementModal.population}</p>
                    <p><b>region: </b>{elementModal.region}</p>
                    <p><b>Sub Region: </b>{elementModal.subregion}</p>
                    <p><b>Capital: </b>{elementModal.capital}</p>
                    <hr />
                    <p><b>Top Level Domain: </b>{elementModal.tld}</p>
                    <p><b>currencies: </b>{currenciesAll.toString()}</p>
                    <hr />
                    {(elementModal.borders) &&
                        <React.Fragment>
                            <h3 className='card-body__border-title' >Border Countries:</h3>
                            <div className='card-body__border-info'>
                                {elementModal.borders.map(element => {
                                    return <p onClick={() => getBorderCountry(element)} key={element}>{element}</p>
                                })}
                            </div>
                        </React.Fragment>
                    }
                </div>
            </div>
        </div>


    )
}

export default OpenCard