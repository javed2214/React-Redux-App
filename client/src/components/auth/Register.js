import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { register } from '../../services/actions/authAction'
import { Redirect, useHistory } from 'react-router-dom'

const Register = () => {

    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const history = useHistory()

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    })

    useEffect(() => {
        if(auth._id) history.push('/')
    }, [history, auth._id])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(register(user))
        setUser({ username: '', email: '', password: '' })
    }

    if(auth._id) return <Redirect to='/' />

    return(
        <div className="container">
            <h4>Register</h4><br />
            <form autoComplete="off">
                <input type="text" placeholder="Username"value={user.username} onChange={(e) => setUser({...user, username: e.target.value})} /><br />
                <input type="text" placeholder="Email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} /><br />
                <input type="password" placeholder="Password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} /><br /><br />
                <button onClick={(e) => handleSubmit(e)} className="btn red">Register</button>
            </form>
        </div>
    )
}

export default Register;