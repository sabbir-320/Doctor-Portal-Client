import React from 'react'
import './Appointment.css'
import appointment from '../../../images/appointment.png'

export default function Appointment() {
    return (
        <div className="appointment-container">
            
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={appointment} alt="" />
                    </div>
                    <div className="col-md-7 text-white py-5">
                        <h5>APPOINTMENT</h5>
                        <h1>Make an appointment <br /> todday</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/> Corporis magnam facere quisquam totam libero ea incidunt est, deleniti error qui!</p>
                        <div className="btn btn-primary"> Learn more</div>
                    </div>
                </div>
            
        </div>
    )
} 