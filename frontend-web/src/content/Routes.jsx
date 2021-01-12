import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from './pages/home/Home'
import Plants from './pages/plants/Plants'

function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/plantas' component={Plants}/>
            <Redirect from='*' to='/'/>
        </Switch>
    )
}

export default Routes
