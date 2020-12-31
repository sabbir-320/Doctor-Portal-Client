import React from 'react'
import './HeaderCom.style.css'
import Banner from './Banner'
import Navbar from './Navbar'
import BusinessInfo from './BusinessInfo/BusinessInfo'
export default function Header () {
    return (
        <div className="header-container">
            <Navbar/>
            <Banner/>
            <BusinessInfo/>
        </div>
    )
}