import React from 'react'
import Parallaxer from '../../containers/Parallaxer'
import FloatingSpheres from '../FloatingSpheres'
import './styles.scss'

const Header = () => (
  <header className="site-header">
    <div className="site-banner">
      <FloatingSpheres />
      <img src={'/images/logo.png'} alt="my logo - kolby sisk :)#" className="site-banner__logo" draggable="false"/>
      <Parallaxer>
        <picture>
          <source srcSet="/images/home-banner.jpg" media="(min-width: 1280px)" />
          <source srcSet="/images/home-banner__medium.jpg" media="(min-width: 768px)" />
          <img src="/images/home-banner__small.jpg" className="site-banner__image" alt="sweet banner" />  
        </picture>
      </Parallaxer>
    </div>
  </header>
)

export default Header