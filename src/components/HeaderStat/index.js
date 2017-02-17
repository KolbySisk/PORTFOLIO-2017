import React from 'react'
import './styles.scss'

const HeaderStat = ({ value, title }) => (
  <div className="header-stat">
    <h2 className="header-stat__value">{ value }</h2>
    <h3 className="header-stat__title">{ title }</h3>
  </div>
)

export default HeaderStat