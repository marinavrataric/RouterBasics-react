import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { LoginContext } from '../context/LoginContext'

function Links() {

    const { user, setUser } = useContext(LoginContext)
    
    let history = useHistory()

    const handleLogin = () => {
        history.push('/login')
        if(user.isLogin) {
            setUser({isLogin: false})
        }
    }

    return (
        <div>
            <NavLink to="/" exact>Homepage</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/user">User</NavLink>
            <NavLink to="/login">
                <button onClick={handleLogin}>{user.isLogin ? 'Logout' : 'Login'}</button>
            </NavLink>
        </div>
    )
}

export default Links