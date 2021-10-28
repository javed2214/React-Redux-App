import React, { useState, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'
import { login } from '../../services/actions/authAction'

const Login = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch(login(user))
    const history = useHistory()

    useEffect(() => {
        if(auth._id) history.push('/')
    }, [history, auth._id])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(user))
        setUser({ email: '', password: '' })
    }

    if(auth._id) return <Redirect to='/' />

    return(
        <div className="container">
            <h4>Login</h4><br /><br />
            <form autocomplete="off">
                <input type="text" placeholder="Email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} /><br />
                <input type="password" placeholder="Password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} /><br /><br />
                <button onClick={(e) => {handleSubmit(e)}} className="btn red">Login</button>
            </form>
        </div>
    )
}

export default Login;