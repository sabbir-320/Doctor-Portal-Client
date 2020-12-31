import React from 'react'
export default function TestimonialInfo({ info }) {
    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <p className="card-text text-center">{info.quote}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                <img className="mx-3" src={info.img} alt="" width="60" />
                <div>
                    <h6 className="text-primary">{info.name}</h6>
                    <p className="m-0">{info.from}</p>
                </div>
            </div>
        </div>
    )
}