import React from 'react'
import './styles.scss'

const Footer = () => (
  <section className="site-footer">
    <header>
      <nav className="footer-nav container">
        <div className="footer-nav-item">
          <img src={'/images/icon-twitter.png'} alt="twitter icon"/>
          <a href="http://twitter.com/kolbysisk">Twitter</a>
        </div>
        <div className="footer-nav-item">
          <img src={'/images/icon-github.png'} alt="github icon"/>
          <a href="http://github.com/kolbysisk">GitHub</a>
        </div>
        <div className="footer-nav-item">
          <img src={'/images/icon-beard.png'} alt="beard icon"/>
          <a href="#">Blog</a>
        </div>
      </nav>
    </header>
    <footer>
      <p>© 2017</p>
      <img src={'/images/logo-blue__small.png'} alt="my logo - kolby sisk :)#"/>
    </footer>
  </section>
)

export default Footer