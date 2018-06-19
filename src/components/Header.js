import React from 'react'
import {Link} from 'react-router'

const Header = () => (

        <div className='head'>
            <div className='col-md-9'>

                <ul className='nav__menu'>
                    <li><Link to='/'>Головна</Link></li>
                    <li> <Link to='/about'>Про компанію</Link></li>
                    <li><Link to='/contacts'>Контакти</Link></li>
                </ul>




            </div>
            <div className='col-md-3'>
            <span className="header-phones">
                <nobr>(044) 500-00-00, </nobr>
                <nobr>(044) 505-89-89, </nobr>
                <nobr>0 (800) 309-444</nobr>
            </span>
            </div>
        </div>
);

export default Header
