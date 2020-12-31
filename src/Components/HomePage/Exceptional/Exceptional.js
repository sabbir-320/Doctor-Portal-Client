import React from 'react'
import exceptional from '../../../images/exceptional.png'
export default function Exceptional() {
    return (
        <div className="d-flex justify-content-center mt-5 pt-5">
            <div className="row w-75"> 
                <div className="col-md-6">
                    <img class="img-fluid" src={exceptional} alt="" />

                </div>
                <div className="col-md-6">
                    <h3 className="mt-5">Exceptional Dental <br/> Care, on Your Turms</h3>
                    <p className="mt-5 text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est facere non voluptate quisquam nesciunt sit animi distinctio aspernatur officiis, quam quaerat laborum cupiditate, dolorum similique accusamus excepturi eius, perferendis dignissimos cumque laudantium! Obcaecati quod dolor repudiandae tempore voluptatum eos deserunt!</p>
                    <button className="mt-5 btn btn-primary">Learn more</button>
                </div>
            </div>
        </div>
    )
} 