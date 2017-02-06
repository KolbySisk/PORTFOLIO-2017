import React, {Component} from 'react'
import smoothScroll from 'smooth-scroll'
import './styles.scss'

class Footer extends Component{  
  render(){
    return (
      <section className="site-footer">
        <header>
          <nav className="footer-nav container">
            <a className="footer-nav-item" href="http://twitter.com/kolbysisk">
              <img src={'/images/icon-twitter.png'} alt="twitter icon"/>
              <h3>Twitter</h3>
            </a>
            <a className="footer-nav-item" href="http://github.com/kolbysisk">
              <img src={'/images/icon-github.png'} alt="github icon"/>
              <h3>GitHub</h3>
            </a>
            <a className="footer-nav-item" href="javascript:;" onClick={() => {alert('this isn\'t a thing yet')}}>
              <img src={'/images/icon-beard.png'} alt="beard icon"/>
              <h3>Blog</h3>
            </a>
          </nav>
        </header>
        <footer>
          <p>© 2017</p>
          <img src={'/images/logo-blue__small.png'} alt="my logo - kolby sisk :)#" onClick={ () => smoothScroll.animateScroll(0) }/>
        </footer>
      </section>
    )
  }
}

export default Footer