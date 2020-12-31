import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
export default function DoctorInfo ({doctor}){
    const imgStyle = {
        width: '150px',
        height: '200px'
    }
    return(
        <div className="col md-4">
            <img style={imgStyle} className="img-fluid" src={`data:image/jpeg;base64,${doctor.image.img}`}  alt="doctor_image"/>
            <p className="text-center"> {doctor.name} </p>
            <div className="d-flex align-items-center justify-content-center">
                <FontAwesomeIcon icon={doctor.icon}></FontAwesomeIcon>
            </div>
        </div>

        
    )
}