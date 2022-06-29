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
        <div className='countrys-container container p-0 h-auto'>
            {ItemsReady &&
                <ul className='p-0 d-flex flex-wrap'>
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
                <div className=' w-100 text-center my-4'>
                    <p>Loading...</p>
                    <div className="spinner-grow m-3 text-primary" role="status">
                        <span className="visually-hidden"></span>
                    </div>
                    <div className="spinner-grow m-3 text-primary" role="status">
                        <span className="visually-hidden"></span>
                    </div>
                    <div className="spinner-grow m-3 text-primary" role="status">
                        <span className="visually-hidden"></span>
                    </div>
                </div>
            }
            {onModal && <OpenCard />}
        </div>
    )
}
export default CountryContainer