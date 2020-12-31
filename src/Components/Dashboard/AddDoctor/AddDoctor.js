import React, { useState } from 'react';
import DashboardSidebar from '../SideBar/DashboardSidbar';

const AddDoctor = () => {
    const [info, setInfo] = useState([])
    const [infoFile, setInfoFile] = useState(null)
    console.log(info);


    const handleBlur = (e) => {
        const newInfo = [...info]
        newInfo[e.target.name] = e.target.value
        setInfo(newInfo)
    }
    const handlefileChange = (e) => {
        const newFile = e.target.files[0]
        setInfoFile(newFile)
    }
    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', infoFile)
        formData.append('email', info.email)
        formData.append('name', info.name)

        fetch('http://localhost:5000/addDoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className='row'>
            <div className="col-md-2">
                <DashboardSidebar></DashboardSidebar>
            </div>
            <div className="col-md-10">
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail">Email Address</label>
                        <input onBlur={handleBlur} class="form-control" type="text" name="email" placeholder="Email" />

                        <label for="exampleInputText">Doctor Name</label>
                        <input onBlur={handleBlur} class="form-control" type="text" name="name" placeholder="Name" />

                        <label for="exampleFormControlFile1">Chose a image</label>
                        <input onChange={handlefileChange} type="file" class="form-control-file" id="exampleFormControlFile1" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;