import React from 'react'
import chair from '../../images/chair.png'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


export default function AppointmentHeader({handleDateChange}) {
    return (
        <div className="row d-flex align-items-center tallness" >
            <div className="col-md-4 offset-md-1">
                <h1>Appointment</h1>
                <Calendar
                    onChange={e => handleDateChange(e)}
                    value={new Date()}
                />
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </div>
    )
}