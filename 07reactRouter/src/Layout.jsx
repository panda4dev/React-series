import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'

// outlet is an interseting feature provided by react-router-dom which help us to change the content keeping layout constant 

// here header and footer will not change but anythoing which comes will be displayed under outlet 

function Layout() {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
        
    )
}

export default Layout
