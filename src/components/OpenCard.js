import React from 'react'
import { ReactContext } from './ReactContext'

function OpenCard() {
    const { setOnModal, elementModal, countries, setElementModal } = React.useContext(ReactContext)
    let currenciesToArray = Object.entries(elementModal.currencies)
    let currencies = currenciesToArray[0][1].name
    let currenciesAll = currenciesToArray.map(element => { return element[1].name })

    const getBorderCountry = (borderElement) => {
        countries.forEach(element => {
            if (element.cca3 === borderElement) {
                console.log(element.name);
                setElementModal(element)
            }
        })
    }
    return (
        <div className="modal-backdrop">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div id='modal-header' className="modal-header">
                        <h5 className="modal-title">{elementModal.name}</h5>
                        <i onClick={() => setOnModal(false)} className=' bx bx-x mx-2 fs-1'></i>
                    </div>
                    <div className="modal-body">
                        <img className=' w-100' src={elementModal.flag} ></img>
                        <div className=' p-3 pb-0 h-auto'>
                            <p><b>Population: </b>{elementModal.population}</p>
                            <p><b>region: </b>{elementModal.region}</p>
                            <p><b>Sub Region: </b>{elementModal.subregion}</p>
                            <p><b>Capital: </b>{elementModal.capital}</p>
                            <br />
                            <p><b>Top Level Domain: </b>{elementModal.tld}</p>
                            <p><b>currencies: </b>{currenciesAll.toString()}</p>
                            {console.log(currencies)}
                            {console.log(currenciesToArray)}
                            {console.log(currenciesAll.toString())}
                            {console.log(elementModal.borders)}
                            <br />
                            {(elementModal.borders) &&
                                <React.Fragment>
                                    <h3>Border Countries:</h3>
                                    <div className='d-flex gap-3 flex-wrap'>
                                        {elementModal.borders.map(element => {
                                            return <p onClick={() => getBorderCountry(element)} key={element} className='col text-center btn btn-outline-secondary'>{element}</p>
                                        })}
                                    </div>
                                </React.Fragment>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default OpenCard