import React from 'react'
import CountryItem from './CountryItem';
import { ReactContext } from './ReactContext';
import OpenCard from './OpenCard';

function CountryContainer() {
    const {
        searchedCountry,
        ItemsReady,
        onModal
    } = React.useContext(ReactContext)

    return (
        <section className='countrys-container'>
            {ItemsReady &&
                <ul>
                    {searchedCountry.map(element => <CountryItem
                        flag={element.flag}
                        name={element.name}
                        population={element.population}
                        region={element.region}
                        capital={element.capital}
                        key={element.name}
                    />)}
                </ul>
                ||
                <div className='loading'>
                    <p>Loading...</p>
                    <i class='bx bx-loader bx-spin' ></i>
                </div>
            }

        </section>
    )
}
export default CountryContainer