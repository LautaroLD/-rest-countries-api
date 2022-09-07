import React from 'react'
import CountryItem from './CountryItem';
import { ReactContext } from './ReactContext';

function CountryContainer() {

    const {
        searchedCountry,
        ItemsReady,
        page,
        activePage
    } = React.useContext(ReactContext)

    let count = 0
    const pageCount = {
    }
    const createPages = () => {
        searchedCountry.map((element) => {
            const elementSeparator = searchedCountry.indexOf(element)
            if (pageCount[`page_${count}`]) {
                pageCount[`page_${count}`].push(element)
            } else {
                pageCount[`page_${count}`] = []
                pageCount[`page_${count}`].push(element)
            }
            if (elementSeparator % 10 === 0 && elementSeparator > 1) {
                count++
            }
        })
        return pageCount
    }
    const listItems = Object.entries(createPages())
    
    return (
        <section id='countrys-container' className='countrys-container'>
            {ItemsReady ?
                (<React.Fragment>
                    <ul className='list-pages'>
                        {listItems.map(element =>
                            <li data-index={listItems.indexOf(element)} onClick={activePage} key={listItems.indexOf(element)} className={listItems.indexOf(element) + 1 === 1 ? 'list-pages__item active' : 'list-pages__item'} >{listItems.indexOf(element) + 1}</li>
                        )}
                    </ul>
                    <ul className='list-countries' >
                        {listItems[page][1].map(element =>
                            <CountryItem
                                flag={element.flag}
                                name={element.name}
                                population={element.population}
                                region={element.region}
                                capital={element.capital}
                                key={element.name}
                            />

                        )}
                    </ul>
                </React.Fragment>)
                :
                (<div className='loading'>
                    <p>Loading...</p>
                    <i className='loading__icon' ></i>
                </div>)
            }

        </section>
    )
}
export default CountryContainer