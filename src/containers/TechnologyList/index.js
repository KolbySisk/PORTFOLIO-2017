import React, {Component} from 'react'
import { connect } from 'react-redux'
import smoothScroll from 'smooth-scroll' //https://github.com/cferdinandi/smooth-scroll
import TechnologyCard from '../../components/TechnologyCard'
import StickyIcky from '../StickyIcky'
import { technologySelected } from './actions'
import './styles.scss'

class TechnologyList extends Component{  
  onTechnologyClick = (technology) => {
    this.props.technologySelected(technology.id)

    let anchor = document.querySelector('.stuff')
    let options = { speed: 800, offset: 130 }
    smoothScroll.animateScroll( anchor, null, options )
  }

  render(){
    return (
      <div className="technology-list" ref="technologyList">
        <h2>I like</h2>
        <StickyIcky>
          <div className="technology-list__list">
            {this.props.technologyListReducer.technologies.map(technology =>
              <TechnologyCard
                key={technology.id}
                active={this.props.technologyListReducer.selectedTechnology === technology.id}
                technology={technology}
                onClick={() => this.onTechnologyClick(technology)}
              />
            )}
          </div>
        </StickyIcky>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  technologyListReducer: state.technologyListReducer
})

export default connect(mapStateToProps, {
  technologySelected
})(TechnologyList)