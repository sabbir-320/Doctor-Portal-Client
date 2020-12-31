import React from 'react';
import { Link } from 'react-router-dom';

const DashboardSidebar = () => {
    return (
        <div>
            <Link  to='/appointmentList'><button>Appointment</button></Link>
            <Link to='/addDoctor'><button>Add Doctor</button></Link>
            <Link></Link>
            <Link></Link>

        </div>
    );
};

export default DashboardSidebar;