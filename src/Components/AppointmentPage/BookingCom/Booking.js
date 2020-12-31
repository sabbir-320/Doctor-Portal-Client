import React from 'react'
import BookingInfo from './BookingInfo'

export default function Booking({ date }) {
    console.log(date);
    const bookingData = [
        {
            title: "Tooth cleaning",
            time: "2:3",
            spase: 2,
        },
        {
            title: "Tooth cleaning",
            time: "2:3",
            spase: 2,
        },
        {
            title: "Tooth cleaning",
            time: "2:3",
            spase: 2,
        },
        {
            title: "Tooth cleaning",
            time: "2:3",
            spase: 2,
        },
        {
            title: "Tooth cleaning",
            time: "2:3",
            spase: 2,
        },
    ]
    return (
        <div className="">
            {/* <h2 className="text-center text-brand">Available Appointment on {new Date()}</h2> */}
            <div className="d-flex justify-content-center">
                <div className="row w-75">
                    {
                        bookingData.map(info => <BookingInfo info={info} date={date}></BookingInfo>)
                    }
                </div>
            </div> 
        </div>
    )
}
