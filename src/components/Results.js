import React, { useState, useEffect } from 'react'
import * as QueryString from 'query-string'
import axios from 'axios'
import SmallLoader from './SmallLoader'
import Search from './Search'

const Results = ({location}) => {

    const [ countries, setCountriesData ] = useState([])
    const [ loading, setLoading ] = useState(true)

    const name = QueryString.parse(location.search)
    const query = String(name.q)

    useEffect(() => {
        axios
        .get('https://api.covid19api.com/summary')
        .then((res) => {
            setCountriesData(res.data.Countries)
            setLoading(false)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const filter_countries = countries.filter((item) => item.Country.includes(query))

    if(loading){
        return(
            <div className='second-container p-2'>
                <SmallLoader />
            </div>
        )
    }
    return (
        <div className='second-container p-2'>
            <Search />
            <h2 className='white p-1'>Results:</h2>
            {filter_countries && filter_countries.length > 0 ? (
                filter_countries.map((country) => (
                    <div key={country.CountryCode} className='country-details p-1'>
                        <h5 className='pb-1 text-alt'>{country.Country}</h5>
                        <p>New confirmed cases: {country.NewConfirmed}</p>
                        <p>Total confirmed cases: {country.TotalConfirmed}</p>
                        <p>New Deaths: {country.NewDeaths}</p>
                        <p>Total deaths: {country.TotalDeaths}</p>
                    </div>
                ))
            ) : (
                <h3 className='white p-2'>There's no results for your search</h3>
            )}
        </div>
    )
}

export default Results