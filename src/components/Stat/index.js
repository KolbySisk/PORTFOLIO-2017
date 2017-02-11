import React from 'react'
import './styles.scss'

const Stat = ({ href, src, alt, value, title }) => (
  <div className="stat">
    <a href={ href }>
      <img stat__image src={ src } alt={ alt } draggable="false"/>
      <h2 className="stat__value">{ value }</h2>
      <h3 className="stat__title">{ title }</h3>
    </a>
  </div>
)

export default Stat