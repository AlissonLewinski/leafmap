import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from './pages/home/Home.jsx'
import Plant from './pages/plant/Plant.jsx'
import Plants from './pages/plants/Plants.jsx'

function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/plantas/:category' component={Plants}/>
            <Route path='/:plant' component={Plant}/>
            <Redirect from='*' to='/'/>
        </Switch>
    )
}

export default Routes
