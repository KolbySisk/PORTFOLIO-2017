import React from 'react'
import './styles.scss'

const TechnologyCard = ({technology, onClick}) => (
  <article className="technology-card" onClick={onClick}>
    <header className="technology-card__header">
      <h1>{technology.name}</h1>
    </header>
    <div className="technology-card__body">
      <img src={technology.imagePath} alt="react" />
    </div>
    <footer className="technology-card__footer">
      <h2>See stuff</h2>
      <div className="arrow bounce"></div>
    </footer>
  </article>
)

export default TechnologyCard