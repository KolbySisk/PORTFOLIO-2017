import React, {Component} from 'react'
import FontFaceObserver from 'fontfaceobserver'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const fontAgaints = new FontFaceObserver('Againts')
const fontRoboto = new FontFaceObserver('roboto')
const fontRobotoSlab = new FontFaceObserver('roboto-slab')

class AppLayout extends Component{
  state = {
    fontAgaintsLoaded: false,
    fontRobotoLoaded: false,
    fontRobotoSlabLoaded: false
  }

  componentDidMount(){
    fontAgaints.load(null, 20000).then(() => {
      alert('yoo')
      this.setState({fontAgaintsLoaded: true})
    })

    fontRoboto.load(null, 20000).then(() => {
      this.setState({fontRobotoLoaded: true})
    })

    fontRobotoSlab.load(null, 20000).then(() => {
      this.setState({fontRobotoSlabLoaded: true})
    })
  }

  render(){
    return (
      <div className={
        "site-container " + 
        (this.state.fontAgaintsLoaded ? 'againts-loaded ' : '') + 
        (this.state.fontRobotoLoaded ? 'roboto-loaded ' : '') + 
        (this.state.fontRobotoSlabLoaded ? 'roboto-slab-loaded ' : '')
      }>
        <Header />
        <main> {this.props.children} </main>
        <Footer />
      </div>
    )
  }
}

export default AppLayout