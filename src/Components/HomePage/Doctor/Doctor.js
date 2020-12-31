import React, { useEffect, useState } from 'react'
import DoctorInfo from './DoctorInfo';

export default function Doctor() {
    const [doctor, setDoctor] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/doctors')
            .then(res => res.json())
            .then(data => setDoctor(data))
    }, [])
    return (
        <section className="d-flex justify-content-center">
            <div className="row w-75">
                <h5 className="text-center">Our Doctors</h5>
                {
                    doctor.map(doctor => <DoctorInfo doctor={doctor}></DoctorInfo>)
                }
            </div>
        </section>
    )
}