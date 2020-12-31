import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DashboardSidebar from '../SideBar/DashboardSidbar';
import AppointmentListInfo from './AppointmentListInfo';

const AppointmentList = () => {
    const [selectedDate, setSelectedDate] = useState((new Date()).getDate())
    const [appointments, setAppointments] = useState([])
    const handleDateChange = (date) => {
        const appointmentsDate = new Date(date).toLocaleDateString();
        setSelectedDate(appointmentsDate)
    }
    useEffect(() => {
        console.log(selectedDate);
        fetch('http://localhost:5000/appointmentsByDate',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({date: selectedDate})
        })
        .then(res => res.json())
        .then(data => setAppointments(data))
        .catch(err => console.log(err))
        .finally(()=> console.log(appointments))
    },[selectedDate])

    return (
        <div className="row">
            <div className="col-sm-2">
                <DashboardSidebar></DashboardSidebar>
            </div>
            <div className="col-sm-5">
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>
            <div className="col-sm-5">
                <h1>appoint</h1>
                {
                    appointments.map(app => <AppointmentListInfo app={app}></AppointmentListInfo>)
                }
            </div>
        </div>
    );
};

export default AppointmentList;