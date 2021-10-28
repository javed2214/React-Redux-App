import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <div>
            <nav className="blue">
                <div className="nav-wrapper">
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><Link to='/register'>Register</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;