import React from 'react';
import './upcome.css';
import { upcomingAppointments } from '../../../Data/Appointment';

const UpcomingSchedule = () => {
  return (
    <div className='upcome_schedule'>
      <h2 style={{ color: '#27548A' }}>The Upcoming Schedule</h2>
      
      {upcomingAppointments.map((appointment) => (
        <div key={appointment.id} className="appointment-day">
          <h3 className="day-heading">{appointment.day}</h3>
          
          <div className="cards-container">
            {appointment.cards.map((card, index) => (
              <div key={index} className="appointment-card">
                <div className="card-title">{card.title}</div>
                <div className="card-time">{card.time}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;