import React from 'react'
import Header from './HeaderCom/Header'
import Services from './ServicesCom/Services'
import Exceptional from './Exceptional/Exceptional'
import Appointment from './AppointmentCom/Appointment'
import Testimonial from './TestimonialCom/Testimonial'
import Blog from './Blog/Blog'
import Doctor from './Doctor/Doctor'
import Contact from './ContactCom/Contact'
import Footer from './FooterCom/Footer'

export default function Home () {
    return(
        <div>
            <Header></Header>
            <Services></Services>
            <Exceptional></Exceptional>
            <Appointment/>
            <Testimonial/>
            <Blog/>
            <Doctor/>
            <Contact/>
            <Footer/>
        </div>
    )
}