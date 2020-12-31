import React from 'react'
import wilson from '../../../images/wilson.png'
import ema from '../../../images/ema.png'
import elija from '../../../images/elija.png'
import TestimonialInfo from './TestimonialInfo'
import './Testimonial.css'


export default function Testimonial() {
    const testimonialData = [
        {
            quote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas esse quod temporibus.",
            img: wilson,
            name: "Wilson",
            from: "New York"
        },
        {
            quote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas esse quod temporibus.",
            img: ema,
            name: "ema",
            from: "Los angel"
        },
        {
            quote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas esse quod temporibus.",
            img: elija,
            name: "elija",
            from: "Meshigan"
        },
    ]
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5>testimonial</h5>
                    <h1>What's Our Patients <br /> Says</h1>
                </div>
                <div className="card-deck mt-5">
                    {
                        testimonialData.map(info => <TestimonialInfo info={info}></TestimonialInfo>)
                    }
                </div>
            </div>
        </section>

    )
}