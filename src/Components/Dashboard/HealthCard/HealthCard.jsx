import React from 'react'
import lungImage from '../../../assets/image/lungs.png'
import teethImage from '../../../assets/image/teeth1.jpg' 
import boneImage from '../../../assets/image/bones.png'   
import { healthStatus } from '../../../Data/HealthData'
import './healthcard.css'

const HealthCard = () => {
  const filteredData = healthStatus.filter(item => 
    item.label.toLowerCase().includes('lungs') || 
    item.label.toLowerCase().includes('teeth') || 
    item.label.toLowerCase().includes('bone')
  );

  // Get image based on label
  const getImage = (label) => {
    if (label.toLowerCase().includes('lungs')) return lungImage;
    if (label.toLowerCase().includes('teeth')) return teethImage;
    if (label.toLowerCase().includes('bone')) return boneImage;
    return lungImage; 
  };

  const getProgress = (status) => {
    switch(status) {
      case 'healthy': return 90;
      case 'warning': return 50;
      default: return 75; 
    }
  };

  return (
    <div className='healthcard_content'>
      {filteredData.map((item) => (
        <div className='health_card' key={item.id}>
          <div className='card_row'>
            <div className='image_container'>
              <img src={getImage(item.label)} alt={item.label} />
            </div>
            <div className='name_container'>
              <h2>{item.label}</h2>
            </div>
          </div>
          <div className='date_time_row'>
            <span>{item.date}</span>
            <span>{item.time}</span>
          </div>
          <div className='progress_bar_container'>
            <div className='progress_bar'>
              <div 
                className={`progress ${item.status === 'healthy' ? 'healthy' : item.status === 'warning' ? 'warning' : ''}`} 
                style={{ width: `${getProgress(item.status)}%` }}
              ></div>
            </div>
            <span>{getProgress(item.status)}%</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HealthCard