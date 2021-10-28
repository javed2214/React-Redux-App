import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from '../Home'
import Register from '../auth/Register'
import Login from '../auth/Login'


const Router = () => {
    return(
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/register' component={Register} />
                <Route path='/login' component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;