import React from 'react'
import bodyImage from '../../../assets/image/body Image.webp'
import './Healthbody.css'
import { healthStatus } from '../../../Data/HealthData'

const HealthBody = () => {
    const filteredStatus = healthStatus.filter(item =>
        item.label === "Healthy Heart" || item.label === "Healthy Leg"
    );

    return (
        <div className='health_body'>
            <div className='health_card_body'>
                <img src={bodyImage} alt="Health Image" />
                {filteredStatus.map((item) => (
                    <div
                        key={item.id}
                        className="health_indicator"
                        style={{
                            position: 'absolute',
                            top: item.position.top,
                            left: item.position.left,
                            transform: 'translate(-50%, -50%)'
                        }}
                    >
                        <div className="combined_indicator">
                            <span className="indicator_icon">{item.status}</span>
                            <span className="indicator_label">{item.label}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HealthBody