import React, { useState } from 'react'
import AppointmentModal from './AppointmentModal'

export default function BookingInfo({info, date}){
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return(
        <div className="col-md-3">
            <h5> {info.title} </h5>
            <p>Appointment time {info.time} </p>
            <p>Available site {info.spase} </p>
            <button onClick={openModal} className="btn btn-primary">Book Appointment</button>
            <AppointmentModal modalIsOpen={modalIsOpen} closeModal={closeModal} title={info.title} date={date}></AppointmentModal>
        </div>
    )
}