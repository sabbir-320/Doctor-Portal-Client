import React, { useState } from 'react'
import Footer from '../HomePage/FooterCom/Footer'
import Navbar from '../HomePage/HeaderCom/Navbar'
import AppointmentHeader from './AppointmentHeader'
import Booking from './BookingCom/Booking'

export default function AppointmentPage() {
    const [selectedDate, setSelectedDate] = useState()
    const handleDateChange = (date) => {
        const appointmentDate = new Date(date).toLocaleDateString()
        setSelectedDate(appointmentDate)
    }
    console.log(selectedDate);
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <Booking date={selectedDate}></Booking>
            <Footer></Footer>
        </div>
    )
}