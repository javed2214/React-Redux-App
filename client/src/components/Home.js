import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'

const Home = () => {

    const auth = useSelector((state) => state.auth)
    if(!auth._id) return <Redirect to='/login' />

    return(
        <div className="container">
            <h4>Welcome {auth.username}!</h4>
        </div>
    )
}

export default Home;