import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav className='navbar bg-light'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h5>Left Menu</h5>
                        <ul className='navbar-nav'>
                            <li className='nav-item'><Link to='/' className='nav-link'>Home</Link></li>
                            <li className='nav-item'><Link to='/userlisting' className='nav-link'>User Listing</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header
