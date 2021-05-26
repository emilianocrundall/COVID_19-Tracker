import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SmallLoader from './SmallLoader'
import Search from './Search'
import moment from 'moment'

const CountriesData = () => {

    const [ countries_data, setCountriesData ] = useState([])
    const [ latest_update, setDate ] = useState('')
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        axios
        .get('https://api.covid19api.com/summary')
        .then((res) => {
            setCountriesData(res.data.Countries)
            setDate(res.data.Date)
            setLoading(false)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const format_date = (date) => {
        let new_date = moment(date).format('MMMM Do YYYY, h:mm a')
        return new_date
    }

    const most_cases = countries_data.sort(
        (a, b) => parseFloat(b.TotalConfirmed) - parseFloat(a.TotalConfirmed)
    )
    const first_countries = most_cases.slice(0, 6)

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
            <h2 className='white p-1'>Most affected countries:</h2>
            {first_countries && first_countries.length > 0 ? (
                first_countries.map((country) => (
                    <div key={country.CountryCode} className='country-details p-1'>
                        <h5 className='pb-1 text-alt'>{country.Country}</h5>
                        <p>New confirmed cases: {country.NewConfirmed}</p>
                        <p>Total confirmed cases: {country.TotalConfirmed}</p>
                        <p>New Deaths: {country.NewDeaths}</p>
                        <p>Total deaths: {country.TotalDeaths}</p>
                    </div>
                ))
            ) : null}
            <div className='footer'>
                <p className='white pt-2'>Latest update: {format_date(latest_update)}</p>
                <p className='text-alt pt-2'>
                    Powered by <a className='text-alt' href='https://covid19api.com/' target="_blank" rel="noopener noreferrer">
                        covid 19 api
                    </a>
                </p>
            </div>
        </div>
    )
}

export default CountriesData
