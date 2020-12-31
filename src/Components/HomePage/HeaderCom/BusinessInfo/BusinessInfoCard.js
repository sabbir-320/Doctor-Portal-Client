import React from 'react'
import './BusinessInfo.style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function BusinessInfoCard({ info }) {
    return (
        <div className="col-md-4 text-white">
            <div className={`d-flex align-items-center justify-content-center   info-container info-${info.Background}`}>
                <div className="mr-3 info-icon">
                    <FontAwesomeIcon icon={info.icon}></FontAwesomeIcon>
                </div>
                <div>
                    <h5> {info.title} </h5>
                    <small> {info.discription} </small>
                </div>
            </div>
        </div>
    )
}