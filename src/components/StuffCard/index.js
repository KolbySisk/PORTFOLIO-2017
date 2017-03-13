import React from 'react'
import FontAwesome from 'react-fontawesome'
import './styles.scss'

const StuffCard = ({ stuff, active, onClick }) => (
  <article className="stuff-card" onClick={ onClick }>
    <div className="stuff-card__body">
      <div className="centerer">
        { stuff.role ? <h3 className="role">{ stuff.role }</h3> : '' }
        <h2 className="name">{ stuff.name }</h2>
      </div>
      <img src={ stuff.imagePath } alt={ stuff.name } style={{ backgroundImage: stuff.imagePath }} draggable="false"/>
    </div>
    <footer className="stuff-card__footer">
      <div className="actions">
        { stuff.link ? <a className="link" href={ stuff.link }><FontAwesome name='external-link' /></a> : '' }
        <a className="info"><FontAwesome name='info' /></a>
        { stuff.repoLink ? <a href={stuff.repoLink} className="repo"><FontAwesome name='github-alt' /></a> : '' }
      </div>
    </footer>
  </article>
)

export default StuffCard