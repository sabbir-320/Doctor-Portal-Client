import React from 'react';

const AppointmentListInfo = ({app}) => {
    console.log(app);
    return (
        <div>
            <p>Appointments: {app.length}</p>
            <p>Email: {app.email}</p>
            <p>Title: {app.title}</p>
            <p>Phone: {app.phone}</p>
        </div>
    );
};

export default AppointmentListInfo;