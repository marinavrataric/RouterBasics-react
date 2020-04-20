import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Contact from '../pages/Contact'
import User from '../pages/User'
import Login from '../pages/Login'
import { LoginContext } from '../context/LoginContext'

function Routes() {

    const { user } = useContext(LoginContext)

    return (
        <div>
            <Switch>
                <Route path="/" exact component={Homepage}/>
                <Route path="/contact" render = {() => user.isLogin ? <Contact /> : <Redirect to="/"/>}/>
                <Route path="/user" render = {() => user.isLogin ? <User/> : <Redirect to="/"/>} />
                <Route path="/login" component={Login}/>
            </Switch>
        </div>
    )
}

export default Routes