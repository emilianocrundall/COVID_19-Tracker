import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CountriesData from './components/CountriesData'
import Main from './components/Main'
import Results from './components/Results'
import NotFound from './components/NotFound'

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <Main />
        <Switch>
          <Route exact path='/' component={CountriesData} />
          <Route exact path='/search' component={Results} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  )

}

export default App
