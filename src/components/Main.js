import React, { useState, useEffect } from 'react'
import Loader from './Loader'
import axios from 'axios'
import Data from './Data'
import moment from 'moment'
import { useLocation } from 'react-router-dom'

const Main = () => {

    const [ data, setData ] = useState({})
    const [ latest_update, setDate ] = useState('')
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        axios
        .get('https://api.covid19api.com/summary')
        .then((res) => {
          setData(res.data.Global)
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
    const loc = useLocation()

    if(loading){
        return <Loader />
    } else {
        return (
            <div className={
                loc.pathname.match(/search/) ? 'dark-bg p-3 side-panel-search' : 'dark-bg p-3 side-panel'
            }>
                <h2 className='white pb-2'>COVID-19 Tracker</h2>
                <Data data={data} />
                <div className='side-footer'>
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
}

export default Main
