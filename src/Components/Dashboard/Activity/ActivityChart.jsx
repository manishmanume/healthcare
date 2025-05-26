import React from 'react';
import './ActivityChart.css';
import { activityChart } from '../../../Data/ActivityChart';

const ActivityChart = () => {
  

  return (
    <div className="activity-chart">
      <h3>Activity</h3>
      <p className="subtitle">3 appointments on this week</p>
      <div className="chart">
        {activityChart.map((item, index) => (
          <div key={index} className="day">
            {item.bars.map((bar, i) => (
              <div key={i} className={`bar ${bar}`}></div>
            ))}
            <p>{item.day}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityChart;
