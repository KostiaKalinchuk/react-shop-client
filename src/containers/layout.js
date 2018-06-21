import React from 'react'

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ButtonUp from '../components/ButtonUp'

const Layout = ({children}) => (
    <div className='view-container'>



        <Header />

        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    <Sidebar />
                </div>
                <div className='col-md-9'>
                    {children}
                </div>
            </div>
        </div>
        <ButtonUp />
        <Footer />
    </div>
);

export default Layout
