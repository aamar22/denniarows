import React from 'react'
import NavBar from './NavBar'
import Notify from './Notify'
import Modal from './Modal'
import Header from './header'
import Filter from './Filter'
import Footer from './Footer'

function Layout({children}) {
    return (
        <div className="container">
          
            <NavBar />
            
            {/* <Notify /> */}
            {/* <Modal /> */}
            {children}
            <Notify />
            <Footer/>
        </div>
    )
}

export default Layout
