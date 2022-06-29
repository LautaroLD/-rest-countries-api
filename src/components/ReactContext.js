import React from 'react';

const ReactContext = React.createContext();

function TodoProvider(props) {
    const [ItemsReady, setItemsReady] = React.useState(false)
    const [onModal, setOnModal] = React.useState(false)
    const [searchValue, setSearchValue] = React.useState('');
    const [searchByRegion, setSearchByRegion] = React.useState('');
    const [elementModal, setElementModal] = React.useState([]);
    let countries = []
    let searchedCountry = [];
    async function getCountry() {
        let lista = []
        await fetch('https://restcountries.com/v3/all')
            .then(res => res.json())
            .then(data => {
                data.forEach(element => {
                    lista.push({
                        name: element.name.common,
                        flag: element.flags[1],
                        capital: element.capital,
                        region: element.region,
                        population: element.population,
                        subregion: element.subregion,
                        currencies: element.currencies,
                        languages: element.languages,
                        borders: element.borders,
                        tld: element.tld,
                        cca3: element.cca3
                    })
                })
                localStorage.setItem('countrys', JSON.stringify(lista))
                setItemsReady(true)
            })
            .catch(err => new Error(err))
    }
    getCountry()

    if (localStorage.countrys) {
        countries = JSON.parse(localStorage.countrys)
    }

    if ((searchByRegion.length < 1) && (searchValue.length < 1)) {
        searchedCountry = countries;
    } else if (searchByRegion.length >= 1) {
        searchedCountry = countries.filter(todo => {
            const todoText = todo.region.toLowerCase();
            const searchText = searchByRegion.toLowerCase();
            return todoText.includes(searchText);
        });
    } else if (searchValue.length >= 1) {

        searchedCountry = countries.filter(todo => {
            const todoText = todo.name.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        });
    }

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }

    const onSearchByRegion = (event) => {
        console.log(event.target.value);
        setSearchByRegion(event.target.value);
    }
    const changeTheme = (event) => {
        const elem = document.getElementById('root')
        elem.classList.toggle('dark-theme')
        event.target.classList.toggle('bxs-sun')
        event.target.classList.toggle('text-white')

    }
    const OpenModal = (value) => {
        const elementSelected = countries.filter(element => element.name === value)
        setOnModal(true)
        console.log(elementSelected);
        setElementModal(elementSelected[0])
        console.log(elementModal);
    }

    return (
        <ReactContext.Provider value={{
            ItemsReady,
            searchValue,
            onSearchValueChange,
            searchedCountry,
            onSearchByRegion,
            changeTheme,
            OpenModal,
            elementModal,
            onModal,
            setOnModal,
            countries,
            setElementModal
        }}>
            {props.children}
        </ReactContext.Provider>
    );
}

export { ReactContext, TodoProvider };
