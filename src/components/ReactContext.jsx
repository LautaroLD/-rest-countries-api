import React from 'react';

const ReactContext = React.createContext();

function TodoProvider(props) {
    const [ItemsReady, setItemsReady] = React.useState(false)
    const [onModal, setOnModal] = React.useState(false)
    const [searchValue, setSearchValue] = React.useState('');
    const [searchByRegion, setSearchByRegion] = React.useState('');
    const [ThemeDark, setThemeDark] = React.useState(false);
    const [elementModal, setElementModal] = React.useState([]);
    const [page, setPage] = React.useState(0)
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
        setSearchByRegion(event.target.value);
    }
    const changeTheme = (event) => {
        const elem = document.getElementById('root')
        elem.classList.toggle('dark-theme')
        event.target.classList.toggle('bxs-sun')

    }
    const OpenModal = (value) => {
        const elementSelected = countries.filter(element => element.name === value)
        setOnModal(true)
        setElementModal(elementSelected[0])
    }
    const activePage = (event) => {
        const clearClass = document.querySelector('.active')
        if (clearClass) {
            clearClass.classList.remove('active')
        }
        const item = event.target
        const index = item.getAttribute('data-index')
        item.classList.add('active')
        setPage(index)
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
            setElementModal,
            ThemeDark,
            setThemeDark,
            activePage,
            page
        }}>
            {props.children}
        </ReactContext.Provider>
    );
}

export { ReactContext, TodoProvider };
