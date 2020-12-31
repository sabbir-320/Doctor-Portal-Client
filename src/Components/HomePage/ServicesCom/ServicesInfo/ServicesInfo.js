import React from 'react'
import fluoride from '../../../../images/fluoride.png'
import cavity from '../../../../images/cavity.png'
import teath from '../../../../images/teath.png'
import ServicesInfoCard from './ServicesInfoCard'
export default function ServicesInfo() {
    const dataOfSarvicesInfo = [
        {
            icon: fluoride,
            title: "Flouride Treatment",
            discription: "Its so cleaner so you "
        },
        {
            icon: cavity,
            title: "Cavity Filling",
            discription: "Its so cleaner so you"
        },
        {
            icon: teath,
            title: "Teath Whitening",
            discription: "Its so cleaner so you"
        },
    ]
    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="row w-75">
                {
                    dataOfSarvicesInfo.map(info => <ServicesInfoCard info={info}></ServicesInfoCard>)
                }
            </div>
        </div>
    )
}