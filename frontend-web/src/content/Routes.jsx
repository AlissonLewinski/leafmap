import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from './pages/home/Home'
import Plant from './pages/plant/Plant'
import Plants from './pages/plants/Plants'

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
