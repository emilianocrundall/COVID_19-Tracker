import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { useHistory } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const Search = () => {

    const [ text, setText ] = useState('')

    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault()
        history.push(`/search?q=${text}`)
    }

    return (
        <React.Fragment>
            <div className='go-back'>
                <button onClick={() => history.goBack()}>
                    <ArrowBackIcon />
                </button>
                <h2 className='white p-1'>Search countries:</h2>
            </div>
            <form className='search-form' onSubmit={handleSubmit}>
                <input placeholder='Search...' type='text' onChange={e => setText(e.target.value)} />
                {text !== '' ? (
                    <button>
                        <SearchIcon />
                    </button>
                ) : (
                    <button disabled>
                        <SearchIcon />
                    </button>
                )}
            </form>
        </React.Fragment>
    )
}

export default Search