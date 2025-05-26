import React from 'react'
import './Calender.css'
import { calendarData } from '../../../Data/Appointment'
import teeth from '../../../assets/image/teeth1.jpg'
import arm from '../../../assets/image/arm.png'
import UpcomingSchedule from '../Upcoming/UpcomingSchedule'

const CalendarAppoint = () => {
    return (
        <div className='calendar_wrapper'>
            <div className='calendar_container'>
                <div className='calendar_header'>
                    <h2>{calendarData.month}</h2>
                </div>

                <div className='calendar_days'>
                    {calendarData.days.map((day, index) => (
                        <div key={index} className='day_header'>{day}</div>
                    ))}
                </div>

                <div className='calendar_grid'>
                    {calendarData.dates.map((date, index) => (
                        <div key={index} className='calendar_day'>
                            <div className='date_number'>{date.day}</div>
                            <div className='appointments_container'>
                                {date.appointments.map((appointment, i) => (
                                    <div key={i} className='appointment_slot'>
                                        {appointment ? (
                                            <div className='appointment_time'>{appointment}</div>
                                        ) : (
                                            <div className='empty_slot'>
                                                <div className='dashed_line'></div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop:'20px' }}>
                <div className='bottom_content' style={{ flex: '1 1 100%', maxWidth: '100%' }}>
                    <div className='appointment_card' style={{
                        backgroundColor: '#2A7B9B',
                        color: 'white',
                        borderRadius: '10px',
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                        margin: '10px 0',
                        flexWrap: 'wrap'
                    }}>
                        <div className='card_content' style={{
                            flex: 1,
                            marginRight: '15px',
                            minWidth: '200px'
                        }}>
                            <h2 style={{
                                margin: '0 0 10px 0',
                                fontSize: '1.2rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}>
                                Dentist
                            </h2>
                            <p style={{
                                margin: '5px 0',
                                fontSize: '0.85rem',
                                color: '#e0e0e0'
                            }}>
                                <span style={{ marginRight: '15px' }}>9:00</span><span>11:00</span>
                            </p>
                            <p style={{
                                margin: '5px 0 0 0',
                                fontSize: '0.95rem',
                                fontWeight: '500'
                            }}>
                                Dr. Cameron Williason
                            </p>
                        </div>
                        <div className='card_image' style={{
                            width: '70px',
                            height: '70px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            flexShrink: 0
                        }}>
                            <img
                                src={teeth}
                                alt="Dentist"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className='bottom_content' style={{ flex: '1 1 100%', maxWidth: '100%' }}>
                    <div className='appointment_card' style={{
                        backgroundColor: '#547792',
                        color: 'white',
                        borderRadius: '10px',
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                        margin: '10px 0',
                        flexWrap: 'wrap'
                    }}>
                        <div className='card_content' style={{
                            flex: 1,
                            marginRight: '15px',
                            minWidth: '200px'
                        }}>
                            <h2 style={{
                                margin: '0 0 10px 0',
                                fontSize: '1.2rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}>
                                Physiotherapy Appointment
                            </h2>
                            <p style={{
                                margin: '5px 0',
                                fontSize: '0.85rem',
                                color: '#e0e0e0'
                            }}>
                                <span style={{ marginRight: '15px' }}>11:00</span><span>12:00</span>
                            </p>
                            <p style={{
                                margin: '5px 0 0 0',
                                fontSize: '0.95rem',
                                fontWeight: '500'
                            }}>
                                Dr. Kavin Djones
                            </p>
                        </div>
                        <div className='card_image' style={{
                            width: '70px',
                            height: '70px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            flexShrink: 0
                        }}>
                            <img
                                src={arm}
                                alt="Physiotherapy"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <UpcomingSchedule />
            </div>
        </div>
    )
}

export default CalendarAppoint