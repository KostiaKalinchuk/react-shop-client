import React from 'react'
import {Link} from 'react-router'

const Header = () => (

        <div className='head'>
            <div className='col-md-12'>

                <ul className='nav__menu'>
                    <li><Link to='/'>Головна</Link></li>
                    <li> <Link to='/about'>Про компанію</Link></li>
                    <li><Link to='/contacts'>Контакти</Link></li>
                </ul>
            </div>
        </div>
);

export default Header
