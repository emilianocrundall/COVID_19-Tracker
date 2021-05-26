import React from 'react'

const Data = ({data}) => {
    return (
        <div className='main-data p-2'>
            <h2 className='white p-1'>Latest data:</h2>
            <h4 className='f-normal p-1'>New confirmed cases: {data.NewConfirmed}</h4>
            <h4 className='f-normal p-1'>New deaths: {data.NewDeaths}</h4>
            <h2 className='white p-1'>All time data:</h2>
            <h4 className='f-normal p-1'>Total confirmed cases: {data.TotalConfirmed}</h4>
            <h4 className='f-normal p-1'>Total recoverded people: {data.TotalRecovered}</h4>
            <h4 className='f-normal p-1'>Total confirmed cases: {data.TotalConfirmed}</h4>
            <h4 className='f-normal p-1'>Total deaths: {data.TotalDeaths}</h4>
        </div>
    )
}

export default Data