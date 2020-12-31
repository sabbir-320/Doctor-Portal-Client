import React from 'react'
import './HeaderCom.style.css'
import chair from '../../../images/chair.png'
import { Link } from 'react-router-dom'
export default function Banner (){
    return (
        <div className="row d-flex align-items-center tallness" >
            <div className="col-md-4 offset-md-1">
                <h1>Your New Smile <br/> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi mollitia vitae sapiente quisquam, et similique facilis omnis accusamus nostrum explicabo.</p>
                <Link to='/appointment'><button className="btn btn-primary">GET APPOINTMENT</button></Link>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </div>
    )
}