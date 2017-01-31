import React from 'react'
import Parallaxer from '../../containers/Parallaxer'
import './styles.scss'

const Header = () => (
  <header className="site-header">
    <div className="site-banner">
      <img src={'/images/logo.png'} alt="my logo - kolby sisk :)#" className="site-banner__logo"/>
      <picture>
        <source srcSet="/images/home-banner.jpg" media="(min-width: 1280px)" />
        <source srcSet="/images/home-banner__medium.jpg" media="(min-width: 768px)" />
        <img src="/images/home-banner__small.jpg" className="site-banner__image" alt="sweet banner" />  
      </picture>
    </div>
  </header>
)

export default Header