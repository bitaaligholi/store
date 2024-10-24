import React from 'react'
import Header from '../modules/Header'

const Layout = ({ children }) => {
    return (
        <div className='container mx-auto px-4 border-x border-gray-200 shadow-xl h-full'>
            <Header />
            {children}
        </div>
    )
}

export default Layout