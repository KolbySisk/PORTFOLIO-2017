import React from 'react'
import './styles.scss'

const Header = () => (
  <header className="site-header">
    <div className="site-banner">
      <img src={'/images/logo.png'} alt="my logo - kolby sisk :)#" className="site-banner__logo"/>
      <img src={'/images/home-banner.jpg'} alt="sweet banner" className="site-banner__image"/>
    </div>
  </header>
)

export default Header