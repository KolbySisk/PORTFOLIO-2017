import React from 'react'
import './styles.scss'

const BarGraph = ({ snowboardData }) => (
  <div className="scrollable-container">
    <div className="bar-chart-container">
      <div className="bar-chart">
        {snowboardData.map((data, i) =>
          <div key={ i } className="bar-container">
            <div className="bar-chart__bar" style={{height: data.displayPercent}}>
              <h3 className="bar-chart__value">{ data.value }</h3>
              <h2 className="bar-chart__x">{ data.date }</h2>
            </div>                  
          </div>
        )}
      </div>
    </div>
  </div>
)

export default BarGraph