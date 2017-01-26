import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const AppLayout = ({ children }) => (
  <div className='site-container'>
    <Header />
    <main> {children} </main>
    <Footer />
  </div>
)

AppLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default AppLayout