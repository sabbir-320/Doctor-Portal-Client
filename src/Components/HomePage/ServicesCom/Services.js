import React from 'react'
import './ServicesCom.style.css'
import ServicesInfo from './ServicesInfo/ServicesInfo'
export default function Services() {
    return (
        <div>
            <div className="text-center">
                <h4 style={{color: "#1CC7C1"}}>OUR SERVICES</h4>
                <h2 style={{color:"#565C6E"}}>Services We Provide</h2>
                <ServicesInfo></ServicesInfo>  
            </div>
        </div>
    )
}