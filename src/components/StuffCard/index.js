import React, {Component} from 'react'
import './styles.scss'

const StuffCard = ({stuff, active, onClick}) => (
  <article className="stuff-card" onClick={onClick}>
    <div className="stuff-card__body">
      <img src={stuff.imagePath} alt="react" />
    </div>
    <footer className="stuff-card__footer">
      <h2>{stuff.name}</h2>
    </footer>
  </article>
)

export default StuffCard