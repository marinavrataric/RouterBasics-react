import React, { useContext } from 'react'
import { LoginContext } from '../context/LoginContext'

function Login() {

    const { setUser } = useContext(LoginContext)

    const handleLogin = () => {
        setUser({isLogin: true})
    }

    return (
        <div>
            <button onClick={handleLogin}>Log me in</button>
        </div>
    )
}

export default Login