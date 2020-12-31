import React from 'react'
import BusinessInfoCard from './BusinessInfoCard'
import { faClock, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
export default function BusinessInfo() {
    const infoData = [
        {
            icon: faClock,
            title: "Opening Hours",
            discription: "24/7",
            Background: "primary"
        },
        {
            icon: faMapMarkerAlt,
            title: "visite Our Location",
            discription: "Banani, Dhaka, Bangladesh",
            Background: "dark"
        },
        {
            icon: faPhone,
            title: "Conract us",
            discription: "88014893939",
            Background: "primary"
        },
    ]
    return (
        <div className="d-flex justify-content-center">
            <div className="row w-75">
                {
                    infoData.map(info => <BusinessInfoCard info={info}></BusinessInfoCard>)
                }
            </div>
        </div>
    )
}