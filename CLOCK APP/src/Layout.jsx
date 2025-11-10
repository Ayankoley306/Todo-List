import React from 'react'
import { Outlet } from 'react-router'
import { Header, Footer } from './Components'
function Layout() {
    return (
        <div>
            <Header />
            <div className='pt-16'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout