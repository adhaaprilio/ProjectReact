import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const LayoutLanding = (props) => {
    return(
        <>
        <Navbar />
        {props.children}
        <Footer />
        </>
    )
}

export default LayoutLanding