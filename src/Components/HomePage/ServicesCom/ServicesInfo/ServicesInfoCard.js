import React from 'react'
import './ServicesInfo.style.css'
export default function ServicesInfoCard({ info }) {
    return (
        <div className="col-md-4">
            <div>
                <div>
                    <img src={info.icon} alt="" style={{height: "50px"}} />
                </div>
                <div className="pt-4">
                    <h3> {info.title} </h3>
                    <p> {info.discription} </p>
                </div>
            </div>
        </div>
    )
}